(function () {
  "use strict";

  const year = document.getElementById("current-year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const navbar = document.getElementById("mainNavbar");
  const collapse = navbar ? bootstrap.Collapse.getOrCreateInstance(navbar, { toggle: false }) : null;

  document.querySelectorAll('a[href^="#"], a[href*=".html#"]').forEach((link) => {
    link.addEventListener("click", () => {
      if (navbar && navbar.classList.contains("show") && collapse) {
        collapse.hide();
      }
    });
  });
})();
