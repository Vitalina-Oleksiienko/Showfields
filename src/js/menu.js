(() => {
  const menuBtnRef = document.querySelector("[data-menu-button ]");
  // const menuBtnRef = document.querySelector("[data-menu-button2]");
  const mobileMenuRef = document.querySelector("[data-menu ]");
  // const mobileMenuRef = document.querySelector("[data-menu2]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button1]");
  const mobileMenuRef = document.querySelector("[data-menu1]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button2]");
  const mobileMenuRef = document.querySelector("[data-menu2]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button3]");
  const mobileMenuRef = document.querySelector("[data-menu3]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button4]");
  const mobileMenuRef = document.querySelector("[data-menu4]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();