(function () {
  "use strict";
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".mainnav ul");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();
