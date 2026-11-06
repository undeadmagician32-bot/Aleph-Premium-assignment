const catalog = [
  {
    id: 'office', icon: '✎', label: '문서 · 인터넷', title: '공부와 일상',
    description: '문서 작성, 온라인 강의, 웹 서핑, 영상 시청이 주라면 내장 그래픽으로도 충분해요.',
    examples: '문서 · 웹 · 온라인 수업',
    tiers: [
      { id: 'office-basic', name: '알뜰형', price: '45–65만 원', total: [450000, 650000], summary: '가벼운 일상 작업에 필요한 기본 구성', parts: [
        ['CPU', 'AMD Ryzen 5 5600G', '내장 그래픽으로 별도 그래픽카드 없이 사용'],
        ['메인보드', 'A520M 칩셋 · AM4 소켓', '선택 CPU와 소켓·BIOS 호환 확인'],
        ['메모리', 'DDR4 16GB (8GB × 2)', '듀얼 채널 구성 권장'],
        ['저장장치', 'NVMe SSD 500GB', '운영체제와 프로그램 설치용'],
        ['그래픽카드', 'CPU 내장 그래픽', '게임 성능은 낮아 고사양 게임에는 부적합'],
        ['파워', '정격 500W · 80 PLUS 인증 제품', '인증과 실제 모델 리뷰 확인'],
        ['케이스', 'M-ATX 통풍형 케이스', '메인보드 규격과 쿨러 높이 확인']
      ]},
      { id: 'office-plus', name: '여유형', price: '65–90만 원', total: [650000, 900000], summary: '여러 작업을 동시에 하고 저장 공간도 넉넉하게', parts: [
        ['CPU', 'AMD Ryzen 5 8600G', '내장 그래픽 기반의 AM5 플랫폼 구성'],
        ['메인보드', 'A620M 칩셋 · AM5 소켓', 'CPU 지원 목록과 BIOS 버전 확인'],
        ['메모리', 'DDR5 32GB (16GB × 2)', '메인보드 지원 속도 확인'],
        ['저장장치', 'NVMe SSD 1TB', '용량 및 보증 기간 확인'],
        ['그래픽카드', 'CPU 내장 그래픽', '무거운 3D 게임은 별도 그래픽카드 필요'],
        ['파워', '정격 550W · 80 PLUS 인증 제품', '정확한 모델과 커넥터 확인'],
        ['케이스', 'M-ATX 통풍형 케이스', '보드·쿨러·저장장치 호환 확인']
      ]}
    ]
  },
  {
    id: 'gaming', icon: '⌘', label: '게임', title: '게임용 PC',
    description: '게임에 따라 필요한 그래픽카드가 달라요. 아래는 1080p 게임을 고려한 균형형 예시예요.',
    examples: '온라인 게임 · 1080p 게임',
    tiers: [
      { id: 'gaming-value', name: '가성비', price: '100–140만 원', total: [1000000, 1400000], summary: '1080p 게임 입문 구성 · 그래픽카드 가격이 예산을 크게 좌우', parts: [
        ['CPU', 'AMD Ryzen 5 5600', 'AM4 세대 제품, 정확한 재고와 가격 확인'],
        ['메인보드', 'B550M 칩셋 · AM4 소켓', 'CPU 지원 BIOS와 M.2 슬롯 확인'],
        ['메모리', 'DDR4 32GB (16GB × 2)', '메인보드 지원 규격 확인'],
        ['저장장치', 'NVMe SSD 1TB', '게임 설치 용량 고려'],
        ['그래픽카드', 'Radeon RX 7600 8GB 급', '게임·해상도에 따라 체감 성능 차이 큼'],
        ['파워', '정격 650W · 80 PLUS 인증 제품', 'GPU 제조사 권장 용량·전원 단자 확인'],
        ['케이스', '통풍형 미들타워', 'GPU 길이와 CPU 쿨러 높이 확인']
      ]},
      { id: 'gaming-smooth', name: '쾌적형', price: '150–210만 원', total: [1500000, 2100000], summary: '1080p 고주사율 또는 1440p 게임을 위한 상위 구성 예시', parts: [
        ['CPU', 'AMD Ryzen 5 7500F', 'AM5 플랫폼, 일부 상품은 내장 그래픽이 없을 수 있음'],
        ['메인보드', 'B650M 칩셋 · AM5 소켓', '선택 CPU 지원 및 BIOS 확인'],
        ['메모리', 'DDR5 32GB (16GB × 2)', '보드 권장 속도와 메모리 호환 목록 확인'],
        ['저장장치', 'NVMe SSD 1TB', '추가 M.2 슬롯 필요 시 보드 확인'],
        ['그래픽카드', 'GeForce RTX 4060 Ti 8GB 급', '게임 옵션·VRAM 요구량에 따라 적합성 확인'],
        ['파워', '정격 650–750W · 인증 제품', 'GPU 제조사 권장 용량 및 커넥터 확인'],
        ['케이스', '통풍형 미들타워', 'GPU 길이·두께와 전면 흡기 공간 확인']
      ]},
      { id: 'gaming-high', name: '고성능', price: '220–320만 원+', total: [2200000, 3200000], summary: '고해상도·높은 그래픽 옵션을 원하는 사용자용 예시', parts: [
        ['CPU', 'AMD Ryzen 7 7800X3D', '게임 중심 CPU, 판매가와 재고 확인'],
        ['메인보드', 'B650 칩셋 · AM5 소켓', '전원부·BIOS·확장 슬롯 확인'],
        ['메모리', 'DDR5 32GB (16GB × 2)', '향후 작업에 따라 64GB 고려'],
        ['저장장치', 'NVMe SSD 2TB', '게임 라이브러리 크기에 맞춰 선택'],
        ['그래픽카드', 'GeForce RTX 4070 SUPER 급 이상', '정확한 GPU·VRAM과 전원 커넥터 비교'],
        ['파워', '정격 750W 이상 · 검증된 제품', 'GPU 제조사 권장량과 ATX 규격 확인'],
        ['케이스 / 쿨러', '대형 통풍 케이스 · 타워형 또는 수랭', 'GPU·라디에이터·쿨러 높이 간섭 확인']
      ]}
    ]
  },
  {
    id: 'creative', icon: '▧', label: '영상 · 디자인', title: '영상 편집과 디자인',
    description: '편집 프로그램, 영상 해상도와 효과에 따라 CPU·메모리·그래픽카드 요구량이 달라져요.',
    examples: '사진 편집 · 영상 편집 · 3D 입문',
    tiers: [
      { id: 'creative-starter', name: '입문형', price: '130–180만 원', total: [1300000, 1800000], summary: '사진 편집과 가벼운 1080p 영상 작업 예시', parts: [
        ['CPU', 'AMD Ryzen 5 7600', '멀티코어 성능과 사용하는 프로그램의 권장 사양 확인'],
        ['메인보드', 'B650M 칩셋 · AM5 소켓', 'USB·저장장치 확장 요구 확인'],
        ['메모리', 'DDR5 32GB (16GB × 2)', '프로젝트 크면 64GB 고려'],
        ['저장장치', 'NVMe SSD 1TB', '원본 영상용 추가 드라이브 고려'],
        ['그래픽카드', 'GeForce RTX 4060 8GB 급', '프로그램 가속·VRAM 요구를 확인'],
        ['파워', '정격 650W · 인증 제품', '그래픽카드 제조사 권장량 확인'],
        ['케이스 / 냉각', '통풍형 미들타워 · 기본 쿨러', '장시간 작업 시 온도·소음 고려']
      ]},
      { id: 'creative-work', name: '작업형', price: '200–300만 원+', total: [2000000, 3000000], summary: '고해상도 편집과 여러 앱 동시 작업을 위한 예시', parts: [
        ['CPU', 'AMD Ryzen 9 7900 급', '작업 프로그램의 CPU 최적화와 요구 사양 확인'],
        ['메인보드', 'B650 칩셋 · AM5 소켓', '저장장치·USB·네트워크 확장 확인'],
        ['메모리', 'DDR5 64GB (32GB × 2)', '메인보드 메모리 지원 목록 확인'],
        ['저장장치', 'NVMe SSD 2TB + 작업용 추가 드라이브', '백업용 드라이브는 별도로 준비'],
        ['그래픽카드', 'GeForce RTX 4070 SUPER 12GB 급', '앱별 GPU·VRAM 가속 지원 여부 확인'],
        ['파워', '정격 750W 이상 · 인증 제품', '정확한 GPU 전원 단자와 권장 용량 확인'],
        ['케이스 / 냉각', '통풍형 미들타워 · 타워형 쿨러', 'CPU 쿨러 높이와 GPU 길이 확인']
      ]}
    ]
  }
];

const usecaseList = document.querySelector('#usecase-list');
const tierList = document.querySelector('#tier-list');
const buildDetail = document.querySelector('#build-detail');
const announcer = document.querySelector('#announcer');
let selectedUsecase = catalog[1];
let selectedTier = catalog[1].tiers[0];

function makeSearchUrl(shop, query) {
  const q = encodeURIComponent(query);
  return shop === 'danawa'
    ? `https://search.danawa.com/dsearch.php?query=${q}`
    : `https://search.shopping.naver.com/search/all?query=${q}`;
}

function recommendationReason(name, product) {
  if (name === 'CPU') {
    if (product.includes('5600G')) return '일상 작업에 필요한 CPU 성능과 그래픽 기능을 한 칩에서 제공해 별도 그래픽카드 비용을 줄일 수 있어요.';
    if (product.includes('8600G')) return '여러 앱을 함께 쓰기 좋은 최신 플랫폼과 내장 그래픽을 갖춰, 별도 그래픽카드 없이 시작하기 좋아요.';
    if (product.includes('5600')) return '게임용 예산에서 CPU 비용을 합리적으로 유지하고 그래픽카드에 예산을 배분하기 좋은 선택이에요.';
    if (product.includes('7500F')) return '게임 처리에 필요한 CPU 성능을 제공하고 AM5 플랫폼으로 향후 업그레이드 여지를 고려했어요.';
    if (product.includes('7800X3D')) return '높은 프레임을 목표로 하는 게임 중심 구성에서 CPU 성능을 중시한 선택이에요.';
    if (product.includes('Ryzen 5 7600')) return '사진 편집과 가벼운 영상 작업에 균형 잡힌 성능을 제공하는 작업용 기반이에요.';
    if (product.includes('7900')) return '멀티코어를 활용하는 편집 작업과 여러 앱을 함께 실행할 때 여유를 기대할 수 있어요.';
  }
  if (name === '메인보드') {
    const platform = product.includes('AM4') ? 'AM4' : 'AM5';
    const chipset = product.split(' · ')[0];
    return `${selectedTier.parts[0][1]} CPU와 같은 ${platform} 플랫폼으로 맞춘 ${chipset} 보드예요. 필요한 슬롯과 기능을 확인해 선택하세요.`;
  }
  if (name === '메모리') {
    if (product.includes('16GB')) return '문서·웹 위주 사용에 필요한 기본 용량을 두 장으로 구성해 내장 그래픽의 메모리 대역폭도 고려했어요.';
    if (product.includes('64GB')) return '고해상도 편집과 큰 프로젝트, 여러 앱 동시 실행에서 메모리 부족을 줄이기 위한 용량이에요.';
    if (selectedUsecase.id === 'gaming') return '요즘 게임과 백그라운드 앱을 함께 실행할 때 여유를 두도록 32GB로 구성했어요.';
    return '편집 프로그램과 여러 앱을 함께 사용할 때 작업 공간을 확보하도록 32GB로 구성했어요.';
  }
  if (name === '저장장치') {
    if (product.includes('500GB')) return '운영체제와 자주 쓰는 프로그램을 빠르게 실행하면서 기본 구매 비용을 낮추기 위한 용량이에요.';
    if (product.includes('2TB')) return '게임 라이브러리나 대용량 프로젝트 파일을 넉넉하게 보관할 수 있도록 용량을 늘렸어요.';
    if (product.includes('추가 드라이브')) return '작업 프로그램과 원본 파일 공간을 함께 고려한 구성으로, 중요 자료는 별도 백업도 필요해요.';
    return '운영체제와 프로그램, 게임 또는 현재 프로젝트를 한 드라이브에 담기 좋은 균형 용량이에요.';
  }
  if (name === '그래픽카드') {
    if (product.includes('내장 그래픽')) return '문서·웹·영상 시청에는 별도 그래픽카드 없이 시작해 비용과 전력 소비를 줄일 수 있어요.';
    if (product.includes('RX 7600')) return '1080p 게임을 겨냥해 그래픽 성능에 예산을 우선 배분한 구성 예시예요.';
    if (product.includes('4060 Ti')) return '더 높은 옵션이나 1440p 게임을 고려한 단계예요. 게임별 VRAM 요구량을 함께 확인하세요.';
    if (product.includes('4070 SUPER')) return '고해상도·높은 그래픽 옵션 또는 GPU 가속 작업을 고려한 상위 성능급 예시예요.';
    if (product.includes('RTX 4060')) return '일부 편집 프로그램의 GPU 가속과 3D 작업 입문을 고려한 선택이에요.';
  }
  if (name === '파워') {
    return '추천된 그래픽카드와 나머지 부품의 전력 공급을 고려한 정격 용량 급이에요. 실제 모델의 권장 용량과 커넥터를 확인하세요.';
  }
  if (name.includes('케이스')) {
    return '부품 조립과 공기 흐름을 고려한 형태예요. 구매할 정확한 모델의 그래픽카드 길이, 쿨러 높이와 통풍을 확인하세요.';
  }
  return '사용 목적과 구성 단계에 맞춰 성능과 비용의 균형을 고려한 부품 예시예요.';
}

function renderUsecases() {
  usecaseList.innerHTML = catalog.map(item => `
    <button type="button" class="usecase-card" data-id="${item.id}" aria-pressed="${item.id === selectedUsecase.id}">
      <span class="usecase-icon" aria-hidden="true">${item.icon}</span>
      <span class="usecase-text"><strong>${item.label}</strong><small>${item.examples}</small></span>
      <span class="card-arrow" aria-hidden="true">↗</span>
    </button>`).join('');
}

function renderTiers() {
  tierList.innerHTML = selectedUsecase.tiers.map((tier, index) => `
    <button type="button" class="tier-card ${tier.id === selectedTier.id ? 'selected' : ''}" data-id="${tier.id}" aria-pressed="${tier.id === selectedTier.id}">
      <span class="tier-top"><span>${index === 0 ? 'ENTRY' : index === selectedUsecase.tiers.length - 1 ? 'PERFORMANCE' : 'BALANCED'}</span><span aria-hidden="true">${tier.id === selectedTier.id ? '●' : '○'}</span></span>
      <strong>${tier.name}</strong><span class="tier-price">${tier.price}</span><small>${tier.summary}</small>
    </button>`).join('');
}

function renderBuild() {
  const parts = selectedTier.parts.map(([name, product, note]) => `
    <article class="part-row">
      <div class="part-info"><span class="part-name">${name}</span><strong>${product}</strong><small>${note}</small><small class="part-reason"><strong>추천 이유</strong> · ${recommendationReason(name, product)}</small></div>
      <div class="part-searches">
        <a href="${makeSearchUrl('danawa', product)}" target="_blank" rel="noopener noreferrer" aria-label="${product} 다나와 가격 검색 (새 창)">다나와 <span aria-hidden="true">↗</span></a>
        <a href="${makeSearchUrl('naver', product)}" target="_blank" rel="noopener noreferrer" aria-label="${product} 네이버 쇼핑 가격 검색 (새 창)">네이버 <span aria-hidden="true">↗</span></a>
      </div>
    </article>`).join('');

  buildDetail.innerHTML = `
    <div class="detail-header">
      <div><p class="section-kicker">선택한 구성 · ${selectedUsecase.title}</p><h3>${selectedTier.name} 구성</h3><p>${selectedTier.summary}</p></div>
      <div class="budget"><small>예상 본체 예산</small><strong>${selectedTier.price}</strong><span>참고 범위 · 실시간가 아님</span></div>
    </div>
    <div class="parts-list">${parts}</div>
    <div class="detail-footnote"><span aria-hidden="true">ⓘ</span> 부품명은 해당 등급의 예시예요. 추천 이유는 용도와 일반적인 부품 역할에 따른 간략한 설명이며, 구매 전 정확한 모델의 성능과 호환성을 확인해 주세요. 검색 결과에서 정확한 제품 모델, 가격, 판매 조건을 비교해 주세요.</div>`;
}

function updateView(view) {
  document.querySelectorAll('.nav-button').forEach(button => {
    const active = button.dataset.view === view;
    button.classList.toggle('is-active', active);
    if (active) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
  if (view === 'prices') {
    document.querySelector('#builder-title').textContent = '부품별 현재 가격 검색';
    buildDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    document.querySelector('#builder-title').textContent = '어떤 PC가 필요하신가요?';
    document.querySelector('#builder').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

usecaseList.addEventListener('click', event => {
  const card = event.target.closest('.usecase-card');
  if (!card) return;
  selectedUsecase = catalog.find(item => item.id === card.dataset.id);
  selectedTier = selectedUsecase.tiers[0];
  renderUsecases();
  renderTiers();
  renderBuild();
  usecaseList.querySelector(`[data-id="${selectedUsecase.id}"]`).focus();
  announcer.textContent = `${selectedUsecase.label} 용도. ${selectedUsecase.tiers.length}가지 추천 구성을 표시했습니다.`;
});

tierList.addEventListener('click', event => {
  const card = event.target.closest('.tier-card');
  if (!card) return;
  selectedTier = selectedUsecase.tiers.find(tier => tier.id === card.dataset.id);
  renderTiers();
  renderBuild();
  tierList.querySelector(`[data-id="${selectedTier.id}"]`).focus();
  announcer.textContent = `${selectedTier.name} 구성, 참고 예산 ${selectedTier.price}.`;
});

document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('click', () => updateView(button.dataset.view));
});

renderUsecases();
renderTiers();
renderBuild();
