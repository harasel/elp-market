/* =========================================================
   ELP Markets — Vanilla JS
   ========================================================= */
(function () {
  "use strict";

  // ----- Mobile menu -----
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("mobileNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      if (open) { nav.setAttribute("hidden", ""); }
      else { nav.removeAttribute("hidden"); }
    });
    // Close on link click
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        nav.setAttribute("hidden", "");
      });
    });
  }

  // ----- Sticky header shadow on scroll -----
  var header = document.getElementById("siteHeader");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 8) header.classList.add("is-scrolled");
      else header.classList.remove("is-scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // ----- Auto year -----
  document.querySelectorAll("#year").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  // ----- Reveal on scroll (subtle) -----
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".section, .hero-inner, .card, .market, .stat").forEach(function (el) {
      el.classList.add("reveal");
      io.observe(el);
    });
  }
})();
