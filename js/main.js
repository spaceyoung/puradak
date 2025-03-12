// header 호버 이펙트 및 로고 색상 변경
const header = document.querySelector('.header');
const logo = document.querySelector('.logo > a > img');

header.addEventListener('mouseover', () => {
  header.classList.add('on');
  logo.src = './img/logo-k.png';
});

header.addEventListener('mouseout', () => {
  header.classList.remove('on');
  logo.src = './img/logo.png';
});


// visual 섹션 스킵 버튼
const visualSkipButton = document.querySelector('.visual-skip-btn');
visualSkipButton.addEventListener('click', function () {
  window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
});


// visual 섹션 모바일 height 조정
window.addEventListener('resize', () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh*100}px`);
});


// 메인 페이지 best 섹션 swiper
new Swiper('.bestSwiper', {
  slidesPerView: 'auto',
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})


// 메인 페이지 event 섹션 swiper
new Swiper('.eventSwiper', {
  slidesPerView: 'auto',
  grabCursor: true,
  preventClicksPropagation: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});


// AOS 라이브러리 스크롤 애니메이션
AOS.init();