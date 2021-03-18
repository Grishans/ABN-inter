let Li = document.querySelectorAll(".slick-dots > li > .pager__item");
let slides = document.querySelectorAll(".mainSlider > .block");

document.addEventListener("DOMContentLoaded", () => {
  let Li = document.querySelectorAll(".slick-dots > li");
  for (let i = 0; i < Li.length; i++) {
    Li[i].addEventListener("click", function () {
      check();
    });
  }
});

function check() {
  for (let j = 0; j < slides.length; j++) {
    if (slides[j].classList.contains("slick-active")) {
      slides[j].style.opacity = 1;
    } else {
      slides[j].style.opacity = 0;
    }
  }
}

/*Hidenav*/
let navSpan = document.querySelector(".mainDots > span");
let navListToogle = false;

navSpan.addEventListener("click", function () {
  let dots = document.querySelectorAll(".mainDots > ul.slick-dots > li");
  if (!navListToogle) {
    dots[1].style.opacity = 0;
    dots[2].style.opacity = 0;
    dots[3].style.opacity = 0;
    dots[4].style.opacity = 0;
    dots[5].style.transform = "translate(0, -1000%)";
    dots[6].style.transform = "translate(0, -1000%)";
    navListToogle = !navListToogle;
  } else {
    dots[1].style.opacity = 1;
    dots[2].style.opacity = 1;
    dots[3].style.opacity = 1;
    dots[4].style.opacity = 1;
    dots[5].style.transform = "translate(0)";
    dots[6].style.transform = "translate(0)";
    navListToogle = !navListToogle;
  }
});

/*/Hidenav/*/

document.addEventListener("DOMContentLoaded", () => {
  let slideBTN = document.querySelectorAll(".slick-arrow");
  let li = document.querySelectorAll(".mainDots > ul.slick-dots > li");
  let dots = document.querySelectorAll(
    ".mainDots > ul.slick-dots > li > a.pager__item"
  );
  for (let i = 0; i < slideBTN.length; i++) {
    slideBTN[i].style.display = "none";
  }
  li[0].style.marginBottom = "60px";
  dots[1].setAttribute("style", "color: #000; margin-left: 20px");
  dots[2].setAttribute("style", "color: #000; margin-left: 20px");
  dots[3].setAttribute("style", "color: #000; margin-left: 20px");
  dots[4].setAttribute("style", "color: #000; margin-left: 20px");
});
