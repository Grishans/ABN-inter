let Li = document.querySelectorAll(".slick-dots > li > .pager__item");
let slides = document.querySelectorAll(".mainSlider > .block");

document.addEventListener("DOMContentLoaded", () => {
  let Li = document.querySelectorAll(".slick-dots > li");
  for (let i = 0; i < Li.length; i++) {
    Li[i].addEventListener("click", function () {
      check();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
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

/*LangToogle*/
let langRU = document.querySelector(".langRU");
let langEN = document.querySelector(".langEN");
let langTrigger = document.querySelector(".sl__wrap__swith_trigger");
let langRUbool = true;
function changeLangRU() {
  if (langRUbool) {
    setTimeout(() => {
      langTrigger.style.left = "2px";
    }, 100);
    setTimeout(() => {
      langTrigger.style.left = "5px";
    }, 200);
    setTimeout(() => {
      langTrigger.style.left = "8px";
    }, 300);
    console.log("RU", langRUbool);
  } else {
    langRU.style.color = "#355070";
    langEN.style.color = "#C7C7C7";
    langTrigger.style.left = "5px";
    langTrigger.style.borderRadius = " 15px 20px 0px 15px";
    langRUbool = !langRUbool;
    console.log("RU", langRUbool);
  }
}
function changeLangEN() {
  if (!langRUbool) {
    setTimeout(() => {
      langTrigger.style.left = "12px";
    }, 100);
    setTimeout(() => {
      langTrigger.style.left = "18px";
    }, 200);
    setTimeout(() => {
      langTrigger.style.left = "15px";
    }, 300);
    console.log("EN", langRUbool);
  } else {
    langRU.style.color = "#C7C7C7";
    langEN.style.color = "#355070";
    langTrigger.style.left = "15px";
    langTrigger.style.borderRadius = "20px 15px 15px 0px";
    langRUbool = !langRUbool;
    console.log("EN", langRUbool);
  }
}
function changeLangTrigger() {
  if (langRUbool) {
    langRU.style.color = "#355070";
    langEN.style.color = "#C7C7C7";
    langTrigger.style.left = "15px";
    langTrigger.style.borderRadius = "20px 15px 15px 0px";
    langRUbool = !langRUbool;
    console.log("toogle", langRUbool);
  } else {
    langRU.style.color = "#C7C7C7";
    langEN.style.color = "#355070";
    langTrigger.style.left = "5px";
    langTrigger.style.borderRadius = "15px 20px 0px 15px";
    langRUbool = !langRUbool;
    console.log("toogle", langRUbool);
  }
}

if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", "ru");
}

langRU.addEventListener("click", () => {
  changeLangRU();
  localStorage.setItem("lang", "ru");
});
langEN.addEventListener("click", () => {
  changeLangEN();
  localStorage.setItem("lang", "en");
});
document.querySelector(".sl__wrap__swith").addEventListener("click", () => {
  changeLangTrigger();
});

/*/LangToogle/*/

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
