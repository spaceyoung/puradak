// JSON 메뉴 데이터 불러와서 탭 메뉴 생성
async function init() {
  const response = await fetch('../json/menu.json');
  const menu = await response.json();

  // 치킨 메뉴
  const bone = await menu.chicken.bone;
  const boneless = await menu.chicken.boneless;
  const wingsCombo = await menu.chicken.wingsCombo;
  const half = await menu.chicken.half;
  const set = await menu.chicken.set;

  const side = await menu.side; // 사이드 메뉴
  const pReast = await menu['p-reast']; // 푸레스트
  const pizza = await menu.pizza; // P-피자


  // 각 서브 페이지에 맞는 메뉴 생성
  const lnbLists = [...document.querySelectorAll('.lnb-list > li')];
  const lnbListOn = document.querySelector('.lnb-list > li.on');
  const lnbListOnIndex = lnbLists.indexOf(lnbListOn);

  // 치킨 메뉴
  if (lnbListOnIndex === 0) {
    createMenu(bone);

    // 서브 메뉴 탭 기능
    const menuTabButtons = document.querySelectorAll('.menu-tab-btn > button');
    menuTabButtons[0].classList.add('on');

    menuTabButtons.forEach((menuTabButton, menuTabIndex) => {
      menuTabButton.addEventListener('click', (e) => {
        e.preventDefault();

        for (const menuTabButton of menuTabButtons) {
          menuTabButton.classList.remove('on');
        };
        const menuList = document.querySelector('.menu-list');
        menuList.remove();

        menuTabButton.classList.add('on');
        if (menuTabIndex === 0) createMenu(bone);
        if (menuTabIndex === 1) createMenu(boneless);
        if (menuTabIndex === 2) createMenu(wingsCombo);
        if (menuTabIndex === 3) createMenu(half);
        if (menuTabIndex === 4) createMenu(set);
      });
    });
  };

  if (lnbListOnIndex === 1) createMenu(side); // 사이드 메뉴
  if (lnbListOnIndex === 2) createMenu(pReast); // 푸레스트
  if (lnbListOnIndex === 3) createMenu(pizza); // P-피자
};



// 탭 내부에 메뉴 생성하는 함수 선언
function createMenu(menus) {
  // 메뉴 리스트 생성 및 추가
  const menuSection = document.querySelector('.sub-sec > .inner');
  const menuList = document.createElement('ul');
  menuList.classList.add('menu-list');
  menuSection.append(menuList);

  for (const menu of menus) {
    // 메뉴 아이템 생성 및 추가
    const menuItem = document.createElement('li');
    menuItem.classList.add('menu-item');
    menuList.append(menuItem);

    // 메뉴 아티클 생성 및 추가
    const menuContent = document.createElement('article');
    menuContent.classList.add('menu-content');
    menuItem.append(menuContent);

    // 메뉴 이미지 생성 및 추가
    const menuImg = document.createElement('figure');
    const img = document.createElement('img');
    menuImg.classList.add('menu-img');
    menuContent.append(menuImg);
    menuImg.append(img);
    img.src = `../img/menu/${menu.img}`;
    img.alt = `${menu.name}`;

    // 메뉴 기본정보 생성 및 추가
    const menuText = document.createElement('div');
    const menuTitle = document.createElement('h4');
    const menuEng = document.createElement('h5');
    const menuOption = document.createElement('ul');

    menuText.classList.add('menu-txt');
    menuTitle.classList.add('menu-tit');
    menuEng.classList.add('menu-eng');
    menuOption.classList.add('menu-option');

    menuContent.append(menuText);
    menuText.append(menuTitle, menuEng, menuOption);

    menuTitle.textContent = `${menu.name}`;
    menuEng.textContent = `${menu.engName}`;

    for (const optionList of menu.option) {
      const li = document.createElement('li');
      menuOption.append(li);
      li.textContent = `${optionList}`;
    };

    if (menu.spicy.level >= 1) {
      const menuSpicy = document.createElement('figure');
      const img = document.createElement('img');
      menuSpicy.classList.add('menu-spicy');
      menuText.append(menuSpicy);
      menuSpicy.append(img);
      img.src = `../img/menu/menu-spicy0${menu.spicy.level}.png`;
      img.alt = `${menu.spicy.caption}`;
    };

    // 클릭시 나타나는 메뉴 상세정보 생성 및 추가
    const menuDetail = document.createElement('div');
    const menuDetailTitle = document.createElement('h4');
    const menuDetailEng = document.createElement('h5');
    const menuDetailPrice = document.createElement('span');
    const menuDetailDesc = document.createElement('p');
    const menuDetailAllergy = document.createElement('p');

    menuDetail.classList.add('menu-detail', 'hide');
    menuDetailTitle.classList.add('menu-detail-tit');
    menuDetailEng.classList.add('menu-detail-eng');
    menuDetailPrice.classList.add('menu-detail-price');
    menuDetailDesc.classList.add('menu-detail-desc');
    menuDetailAllergy.classList.add('menu-detail-allergy');

    menuContent.append(menuDetail);
    menuDetail.append(menuDetailTitle, menuDetailEng, menuDetailPrice, menuDetailDesc, menuDetailAllergy);

    menuDetailTitle.textContent = `${menu.name}`;
    menuDetailEng.textContent = `${menu.engName}`;
    menuDetailPrice.textContent = `${menu.price}`;
    menuDetailDesc.textContent = `${menu.desc}`;
    menuDetailAllergy.textContent = `알레르기 성분 : ${menu.allergy.join(', ')}`;

    // 메뉴 상세정보 닫기 버튼 생성 및 추가
    const menuDetailClose = document.createElement('button');
    const closeIcon = document.createElement('span');
    menuDetailClose.classList.add('menu-detail-close');
    closeIcon.classList.add('material-symbols-outlined');
    menuDetail.append(menuDetailClose);
    menuDetailClose.append(closeIcon);
    closeIcon.textContent = `close`;

    // 메뉴 상세정보 토글
    menuItem.addEventListener('click', (e) => {
      e.preventDefault();
      menuItem.classList.toggle('on');
      menuDetail.classList.toggle('hide');
    });
  };
};


// 함수 실행
init();