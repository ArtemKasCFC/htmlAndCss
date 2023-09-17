"use strict";

// Current Year
document.querySelector(".year").textContent = `${new Date().getFullYear()}`;

// Burger Menu
document
  .querySelector(".btn-mobile-nav")
  .addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("nav-open");
  });

// Scroll
document.querySelectorAll("a:link").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
    console.log(link);
    if (link.closest("ul").classList.contains("main-nav-list")) {
      document.querySelector(".header").classList.toggle("nav-open");
    }
  });
});

// Sticky navigation
const obs = new IntersectionObserver(
  function (entries) {
    const [etr] = entries;

    if (!etr.isIntersecting) document.body.classList.add("sticky");
    if (etr.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(document.querySelector(".section-hero"));

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
// function checkFlexGap() {
//   var flex = document.createElement("div");
//   flex.style.display = "flex";
//   flex.style.flexDirection = "column";
//   flex.style.rowGap = "1px";

//   flex.appendChild(document.createElement("div"));
//   flex.appendChild(document.createElement("div"));

//   document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);
//   console.log(isSupported);

//   if (!isSupported) document.body.classList.add("no-flexbox-gap");
// }
// checkFlexGap();
