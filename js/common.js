// 올메뉴 햄버거 버튼
const allMenuOpenButton = document.querySelector('.allmenu-btn');
const allMenuContainer = document.querySelector('.allmenu-container');
const allMenuCloseButton = document.querySelector('.allmenu-close-btn');
const allMenuHeaders = document.querySelectorAll('.allmenu-depth1-header');

allMenuOpenButton.addEventListener('click', () => {
  document.documentElement.classList.add('hidden');
  allMenuContainer.classList.add('on');
});

allMenuCloseButton.addEventListener('click', () => {
  document.documentElement.classList.remove('hidden');
  allMenuContainer.classList.remove('on');
  for (const allMenuHeader of allMenuHeaders) {
    allMenuHeader.classList.remove('on');
    allMenuHeader.nextElementSibling.style.maxHeight = null;
  }
});


// 모바일 화면 올메뉴 아코디언 메뉴 토글
function accordionToggle(allMenuHeader) {
  if (!allMenuHeader.classList.contains('on')) {
    for (const allMenuHeader of allMenuHeaders) {
      allMenuHeader.classList.remove('on');
      allMenuHeader.nextElementSibling.style.maxHeight = null;
    }
    allMenuHeader.classList.add('on');
    allMenuHeader.nextElementSibling.style.maxHeight = `${allMenuHeader.nextElementSibling.scrollHeight}px`;
  } else {
    allMenuHeader.classList.remove('on');
    allMenuHeader.nextElementSibling.style.maxHeight = null;
  };
};

window.addEventListener('resize', () => {
  if (window.innerWidth <= 640) {
    for (const allMenuHeader of allMenuHeaders) {
      allMenuHeader.addEventListener('click', (e) => {
        e.preventDefault();
        accordionToggle(allMenuHeader);
      });
    };
  } else {
    for (const allMenuHeader of allMenuHeaders) {
      allMenuHeader.classList.remove('on');
      allMenuHeader.nextElementSibling.style.maxHeight = null;
    };
  };
});

if (window.innerWidth <= 640) {
  for (const allMenuHeader of allMenuHeaders) {
    allMenuHeader.addEventListener('click', (e) => {
      e.preventDefault();
      accordionToggle(allMenuHeader);
    });
  };
};


// TOP 버튼
const topButton = document.querySelector('.quick-top');
topButton.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });