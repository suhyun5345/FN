$('.main-slide').slick({
	slide: 'div',
	adaptiveHeight: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2500,
	centerPadding: 0,
	centerMode: false,
	draggable: true,
});

$('.new-goods').slick({
	slide: 'div',
	adaptiveHeight: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: false,
	autoplaySpeed: 2500,
	centerPadding: 0,
	centerMode: true,
	draggable: true,
});
$('.artist-slide').slick({
	slide: 'div',
	adaptiveHeight: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: false,
	autoplaySpeed: 2500,
	centerPadding: 0,
	centerMode: true,
	draggable: true,
});


//top
const toTopEl = document.querySelector("#to-top");
const toBottomEl = document.querySelector("#to-bottom");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    //console.log('scroll!');
    //console.log(window.scrollY);
    if (window.scrollY > 500) {
      //배지 숨기기
      //badgeEl.style.display = 'none';
      //gsap문법  gsap.to(요소, 지속시간초단위, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      //배지 보이기
      //badgeEl.style.display = 'block';
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, .7, {
    scrollTo: 0
  })
});

// 하단으로 스크롤 버튼을 클릭하면,
toBottomEl.addEventListener('click', function () {
  // 페이지 위치를 최하단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, 1, {
    scrollTo: 5000
  })
});


const banner = document.querySelector(".banner-inner");

const IMG_NUMBER = 4;

/* 이미지를 가져오는 함수 */
function paintImage(imgNumber) {
  /* 1. new 를 사용하여 object 만들기 */
  const image = new Image();
  /* 2. object에 이미지 주소(레퍼런스) 연결하기 */
  image.src = `images/banner/${imgNumber + 1}.png`;
  image.style.width = '100%';
  // + 1를 하는 이유는 Math.random() 함수가 0을 줄 수 있기 때문이다.
  /* body 안에 image 넣기 */
  banner.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();

  /* 이미지(갯수) 함수와 randeomNumber변수(랜덤숫자생성함수)를 인자로 설정 */
  paintImage(randomNumber);
}
init();
