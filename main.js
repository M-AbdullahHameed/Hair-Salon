const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

// Hero vein: draws itself as you scroll, then the monogram fades in
const vein = document.querySelector("[data-vein]");
const hero = document.querySelector(".hero");
if (vein && hero) {
  const length = vein.getTotalLength();
  vein.style.strokeDasharray = length;
  const update = () => {
    const progress = reduceMotion ? 1 : Math.min(1, 0.25 + window.scrollY / (hero.offsetHeight * 0.6));
    vein.style.strokeDashoffset = length * (1 - progress);
    hero.style.setProperty("--mono", Math.max(0, (progress - 0.55) / 0.45));
  };
  update();
  addEventListener("scroll", update, { passive: true });
}

// Before / after slider
document.querySelectorAll("[data-ba]").forEach((ba) => {
  const input = ba.querySelector("input");
  input.addEventListener("input", () => ba.style.setProperty("--pos", `${input.value}%`));
});

// Reveal sections as they enter the viewport
const targets = document.querySelectorAll(".section-head, .menu li, .split > *, .space__grid > *, .people li, .quote, .book__inner > *");
targets.forEach((el) => el.classList.add("reveal"));
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("is-in");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
targets.forEach((el) => io.observe(el));
