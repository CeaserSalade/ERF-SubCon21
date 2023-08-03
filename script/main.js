/* Language Switch */

let langmenu = document.querySelector(".lang-menu"),
  link = document.querySelectorAll("a"),
  hometext = document.querySelector(".home-text"),
  btn = document.querySelector(".btn"),
  en = document.querySelector(".en"),
  nl = document.querySelector(".nl"),
  abouttextspan = document.querySelector(".about-text-span"),
  abouttexth2 = document.querySelector(".about-text-h2"),
  abouttextp = document.querySelector(".about-text-p");

link.forEach((el) => {
  el.addEventListener("click", () => {
    langmenu.querySelector(".active").classList.remove("ative");
    el.classList.add("active");

    let attr = el.getAttribute("language");

    hometext.textContent = data[attr].hometext;
  });
});

let data = {
  en: {
    hometext: "Buy Tickets Buy Your tickets Whilst There Here",
    btn: "Tickets",
    en: "English",
    nl: "Dutch",
    abouttextspan: "About Us",
    abouttexth2: "We want to change peoples view about you!",
    abouttextp:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit quaerat deleniti numquam, veritatis hic enim fugit aliquam, sunt perspiciatis omnis magni, modi laboriosam iure nemo ratione ipsam incidunt doloribus fugiat aliquid eveniet dolorem excepturi voluptas? Delectus cumque ea molestias nostrum, facilis alias aliquam fuga, tenetur fugit aperiam ullam labore reiciendis?",
  },

  nl: {
    hometext: "Koop Tickets Koop Je Tickets Nu Ze Er Nog Zijn",
    btn: "Tickets",
    en: "Engels",
    nl: "Nederlands",
    abouttextspan: "Over Ons",
    abouttexth2: "Wij willen mensen hen beeld over jullie veranderen!",
    abouttextp:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit quaerat deleniti numquam, veritatis hic enim fugit aliquam, sunt perspiciatis omnis magni, modi laboriosam iure nemo ratione ipsam incidunt doloribus fugiat aliquid eveniet dolorem excepturi voluptas? Delectus cumque ea molestias nostrum, facilis alias aliquam fuga, tenetur fugit aperiam ullam labore reiciendis?",
  },
};

/* Mobile Menu */

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  navbar.clicklist.remove("active");
};
