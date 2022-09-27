"use strict";
//Подгрузка данных с json
const buttonMore = document.querySelector(".title-over-portfolio__btn");
buttonMore.addEventListener("click", (e) => {
  e.preventDefault();
  getItem(buttonMore);
});

async function getItem(button) {
  if (!button.classList.contains("_hold")) {
    button.classList.add("_hold");
    const fileJson = "json/item.json";
    let response = await fetch(fileJson, {
      method: "GET",
    });
    if (response.ok) {
      let result = await response.json();
      loadItem(result);
      button.classList.remove("_hold");
      button.remove();
    } else {
      alert("Ошибка");
    }
  }
}
function loadItem(data) {
  const portfolioRow = document.querySelector(".portfolio__row");

  data.itemPortfolio.forEach((item) => {
    const itemId = item.id;
    const url = item.url;
    const text = item.text;
    const imageUrl = item.imageUrl;

    let template = `
            <div data-itemP="${itemId}" class="portfolio__item">
              <div class="portfolio__image">
                <img src="img/portfolio/${imageUrl}" alt="" />
              </div>
              <a
                href="${url}"
                class="portfolio__button"
              >
                ${text}
              </a>
            </div>`;

    portfolioRow.insertAdjacentHTML("beforeend", template);
  });
}

// Меню бургер
const burger = document.querySelector(".icon-menu");
const overHeader = document.querySelector(".over-header");
if (burger) {
  burger.addEventListener("click", (e) => {
    document.documentElement.classList.toggle("menu-open");
    document.body.classList.toggle("lock");
    overHeader.classList.toggle("activeHeader");
  });
}

// Typed.js
let typed = new Typed(".typed-element", {
  strings: ["НАВЫКИ", "УМЕНИЯ", "навыки"],
  typeSpeed: 150,
  loop: true,
  backSpeed: 100,
  startDelay: 400,
  shuffle: true,
  showCursor: true,
  cursorChar: "|",
});
let typedTwo = new Typed(".typed-element-two", {
  strings: ["Портфолио", "портфолио", "портфолио"],
  typeSpeed: 150,
  backSpeed: 100,
  loop: true,
  startDelay: 400,
  shuffle: true,
  showCursor: true,
  cursorChar: "|",
});

//Подгрузка плавная к элементам
const menuLinks = document.querySelectorAll(".menu__link[data-letsgo]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", menuLetsGoClick);
  });

  function menuLetsGoClick(e) {
    e.preventDefault();
    const menuLink = e.target;
    if (
      menuLink.dataset.letsgo &&
      document.querySelector(menuLink.dataset.letsgo)
    ) {
      const letsGoItem = document.querySelector(menuLink.dataset.letsgo);
      const letsGoValue =
        letsGoItem.getBoundingClientRect().top +
        scrollY -
        document.querySelector("header").offsetHeight;

      if (overHeader.classList.contains("activeHeader")) {
        document.documentElement.classList.remove("menu-open");
        document.body.classList.remove("lock");
        overHeader.classList.remove("activeHeader");
      }
      window.scrollTo({
        top: letsGoValue,
        behavior: "smooth",
      });
    }
  }
}
const menuTops = document.querySelectorAll(".menu-footer__link[data-goTop]");
if (menuTops.length > 0) {
  menuTops.forEach((menuTop) => {
    menuTop.addEventListener("click", (e) => {
      e.preventDefault();
      const elementClick = e.target;
      console.log(elementClick);
      if (
        elementClick.dataset.gotop &&
        document.querySelector(elementClick.dataset.gotop)
      ) {
        const goTopItem = document.querySelector(elementClick.dataset.gotop);
        const goTopValue =
          goTopItem.getBoundingClientRect().bottom +
          scrollY -
          document.querySelector("header").offsetHeight;

        window.scrollTo({
          top: goTopValue,
          behavior: "smooth",
        });
      }
    });
  });
}
const skillsScrolls = document.querySelectorAll(
  ".circle-inner__body[data-goskills]"
);
if (skillsScrolls.length > 0) {
  skillsScrolls.forEach((skill) => {
    skill.addEventListener("click", goFirstBlock);
  });

  function goFirstBlock(e) {
    e.preventDefault();
    const skillElement = e.target;
    console.log(skillElement);
    if (
      skillElement.dataset.goskills &&
      document.querySelector(skillElement.dataset.goskills)
    ) {
      const skillItem = document.querySelector(skillElement.dataset.goskills);
      const skillItemValue =
        skillItem.getBoundingClientRect().top +
        scrollY -
        document.querySelector("header").offsetHeight;

      window.scrollTo({
        top: skillItemValue,
        behavior: "smooth",
      });
    }
  }
}

//Изменение языка
