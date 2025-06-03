document.addEventListener("DOMContentLoaded", function () {
  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 3000,
    animationDuration: 500,
    gap: 20,
    breakpoints: {
      768: {
        perView: 1
      },
      1024: {
        perView: 2
      },
      1440: {
        perView: 3
      }
    }
  }).mount();

  const toggleBtn = document.querySelector(".toggle-nav");
  const nav = document.querySelector("nav");

  toggleBtn.addEventListener("click", function () {
    nav.classList.toggle("open");

    const expanded = toggleBtn.getAttribute("aria-expanded") === "true" || false;
    toggleBtn.setAttribute("aria-expanded", !expanded);
  });
});
