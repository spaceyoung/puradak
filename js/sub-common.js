// header 호버 이펙트 및 로고 색상 변경
const header = document.querySelector('.header');
const logo = document.querySelector('.logo > a > img');

header.addEventListener('mouseover', () => {
  header.classList.add('on');
  logo.src = '../img/logo-k.png';
});

header.addEventListener('mouseout', () => {
  header.classList.remove('on');
  logo.src = '../img/logo.png';
});