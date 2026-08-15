/* ABN Textiles — site behaviour
   1. Footer year   2. Sticky header border   3. Mobile menu   4. Scroll reveal */

(function () {
  'use strict';

  /* 1. Footer year ------------------------------------------------------- */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* 2. Sticky header hairline once the page scrolls ---------------------- */
  var hdr = document.getElementById('hdr');
  if (hdr) {
    var onScroll = function () {
      hdr.classList.toggle('stuck', window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* 3. Mobile menu ------------------------------------------------------- */
  var burger = document.getElementById('burger');
  var mmenu = document.getElementById('mmenu');
  if (burger && mmenu) {
    var setMenu = function (open) {
      mmenu.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.textContent = open ? '✕' : '☰';
    };
    burger.addEventListener('click', function () {
      setMenu(!mmenu.classList.contains('open'));
    });
    mmenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });
  }

  /* 4. Reveal sections on scroll ----------------------------------------- */
  var targets = document.querySelectorAll('.rv');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  targets.forEach(function (el) { io.observe(el); });
})();
