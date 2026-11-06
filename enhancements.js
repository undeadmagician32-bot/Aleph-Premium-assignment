/* 추가 큰 글씨, 만 원 단위 예산 입력, 판매처 네 곳 검색 */
(() => {
  const shops = [
    { name: '다나와', url: query => `https://search.danawa.com/dsearch.php?query=${encodeURIComponent(query)}` },
    { name: '네이버', url: query => `https://search.shopping.naver.com/search/all?query=${encodeURIComponent(query)}` },
    { name: '쿠팡', url: query => `https://www.coupang.com/np/search?q=${encodeURIComponent(query)}` },
    { name: 'G마켓', url: query => `https://browse.gmarket.co.kr/search?keyword=${encodeURIComponent(query)}` }
  ];
  const stepWon = 10000;
  const minWon = 300000;
  const maxWon = 10000000;
  const budgetMarkup = `
    <section class="budget-control" aria-label="희망 본체 예산 설정">
      <div class="budget-field">
        <label for="custom-budget">희망 본체 예산</label>
        <div class="budget-input-row">
          <input id="custom-budget" type="number" inputmode="numeric" min="${minWon}" max="${maxWon}" step="${stepWon}" aria-describedby="budget-help">
          <span class="budget-unit">원</span>
        </div>
        <p id="budget-help" class="budget-help">1만 원 단위로 입력 · 본체만 기준</p>
      </div>
      <div>
        <p id="budget-guidance" class="budget-guidance" aria-live="polite"></p>
        <p class="budget-help">예산에 가장 가까운 추천 구성을 표시합니다. 실제 부품 가격 합계는 아닙니다.</p>
      </div>
    </section>`;

  const originalFontSizes = new WeakMap();
  function scaleText(root = document) {
    const candidates = [...root.querySelectorAll('*')].filter(element =>
      [...element.childNodes].some(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim())
    );
    // 렌더링 때마다 브라우저 스타일 기준의 150%를 다시 적용해 중복 확대를 막습니다.
    candidates.forEach(element => {
      if (!originalFontSizes.has(element)) {
        originalFontSizes.set(element, element.style.fontSize || '');
      }
      const computedSize = Number.parseFloat(getComputedStyle(element).fontSize);
      if (!Number.isFinite(computedSize)) return;
      const currentSize = Number.parseFloat(element.style.fontSize);
      const originalInline = originalFontSizes.get(element);
      const baseSize = currentSize && originalInline !== element.style.fontSize
        ? computedSize / 1.5
        : computedSize;
      element.style.fontSize = `${baseSize * 1.5}px`;
    });
  }

  function resetAndScaleText() {
    document.querySelectorAll('*').forEach(element => {
      if (originalFontSizes.has(element)) element.style.fontSize = originalFontSizes.get(element);
    });
    scaleText();
  }

  function formatWon(amount) {
    return `₩${Math.round(amount).toLocaleString('ko-KR')}`;
  }

  function midpoint(tier) {
    return Math.round(((tier.total[0] + tier.total[1]) / 2) / stepWon) * stepWon;
  }

  function updateGuidance() {
    const guidance = document.querySelector('#budget-guidance');
    if (guidance) guidance.textContent = `${formatWon(Number(customBudget.value))} 기준 · ${selectedTier.name} 추천 구성 (${selectedTier.price})`;
  }

  function showCustomBudget() {
    const amount = Number(customBudget.value);
    const budget = buildDetail.querySelector('.budget');
    if (!budget || !Number.isFinite(amount)) return;
    budget.querySelector('small').textContent = '설정한 본체 예산';
    budget.querySelector('strong').textContent = formatWon(amount);
    budget.querySelector('span').textContent = `추천 구성 참고 범위 · ${selectedTier.price}`;
  }

  function updateSearchLinks() {
    buildDetail.querySelectorAll('.part-row').forEach(row => {
      const product = row.querySelector('.part-info strong')?.textContent.trim();
      const links = row.querySelector('.part-searches');
      if (!product || !links) return;
      links.innerHTML = shops.map(shop => `
        <a href="${shop.url(product)}" target="_blank" rel="noopener noreferrer"
          aria-label="${product} ${shop.name} 가격 검색 (새 창)">${shop.name} <span aria-hidden="true">↗</span></a>`).join('');
    });
  }

  const originalRenderUsecases = renderUsecases;
  renderUsecases = function (...args) {
    const result = originalRenderUsecases.apply(this, args);
    scaleText(usecaseList);
    return result;
  };

  const originalRenderTiers = renderTiers;
  renderTiers = function (...args) {
    const result = originalRenderTiers.apply(this, args);
    scaleText(tierList);
    return result;
  };

  const originalRenderBuild = renderBuild;
  renderBuild = function (...args) {
    const result = originalRenderBuild.apply(this, args);
    updateSearchLinks();
    if (customBudget) showCustomBudget();
    scaleText(buildDetail);
    return result;
  };

  tierList.insertAdjacentHTML('afterend', budgetMarkup);
  const customBudget = document.querySelector('#custom-budget');
  customBudget.value = midpoint(selectedTier);

  function chooseClosestTier(amount) {
    const inRange = selectedUsecase.tiers.find(tier => amount >= tier.total[0] && amount <= tier.total[1]);
    if (inRange) return inRange;
    return selectedUsecase.tiers.reduce((best, tier) => {
      const distance = amount < tier.total[0] ? tier.total[0] - amount : amount - tier.total[1];
      const bestDistance = amount < best.total[0] ? best.total[0] - amount : amount - best.total[1];
      return distance < bestDistance ? tier : best;
    });
  }

  customBudget.addEventListener('change', () => {
    let amount = Number(customBudget.value);
    if (!Number.isFinite(amount)) amount = midpoint(selectedTier);
    amount = Math.min(maxWon, Math.max(minWon, Math.round(amount / stepWon) * stepWon));
    customBudget.value = amount;
    selectedTier = chooseClosestTier(amount);
    renderTiers();
    renderBuild();
    updateGuidance();
    announcer.textContent = `${formatWon(amount)} 예산에 가까운 ${selectedTier.name} 추천 구성을 표시했습니다.`;
  });

  function syncBudgetToTier() {
    customBudget.value = midpoint(selectedTier);
    renderBuild();
    updateGuidance();
  }
  usecaseList.addEventListener('click', syncBudgetToTier);
  tierList.addEventListener('click', syncBudgetToTier);

  // 화면 크기 변경 때 기준 글자 크기를 다시 계산해 확대율이 누적되지 않게 합니다.
  let resizeFrame = 0;
  window.addEventListener('resize', () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(resetAndScaleText);
  }, { passive: true });

  renderBuild();
  updateGuidance();
  scaleText();
})();
