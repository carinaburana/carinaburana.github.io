/* ============================================================
   Portfolio – script.js
   ============================================================ */

(() => {
  "use strict";

  /* ── Active nav link on scroll ─────────────────────────── */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  const navH = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--nav-h"),
    10
  );

  function setActiveLink() {
    let current = "";
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - navH - 20) {
        current = sec.id;
      }
    });
    navLinks.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
    });
  }

  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink();

  /* ── Mobile hamburger ──────────────────────────────────── */
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!expanded));
    navMenu.classList.toggle("open", !expanded);
  });

  // Close on link click
  navMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      hamburger.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("open");
    });
  });

  /* ── Impressum toggle ──────────────────────────────────── */
  const impressumToggle = document.getElementById("impressum-toggle");
  const impressumBody = document.getElementById("impressum-body");

  impressumToggle.addEventListener("click", () => {
    const expanded = impressumToggle.getAttribute("aria-expanded") === "true";
    impressumToggle.setAttribute("aria-expanded", String(!expanded));
    impressumBody.classList.toggle("open", !expanded);
  });
})();
