(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("open", !isOpen);
  });

  // Gallery modal (placeholder tiles)
  const modal = document.querySelector(".modal");
  const modalTitle = document.querySelector("[data-modal-title]");
  const closeBtn = document.querySelector("[data-modal-close]");
  const openers = document.querySelectorAll("[data-modal-open]");
  function closeModal() { if (modal) modal.classList.remove("open"); }
  if (openers.length && modal) {
    openers.forEach((btn) => {
      btn.addEventListener("click", () => {
        const title = btn.getAttribute("data-title") || "Photo";
        if (modalTitle) modalTitle.textContent = title;
        modal.classList.add("open");
      });
    });
  }
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modal) modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

  // Testimonials shuffle (subtle)
  const t = document.querySelectorAll("[data-testimonial]");
  if (t.length > 3) {
    const arr = Array.from(t);
    arr.sort(() => Math.random() - 0.5);
    arr.forEach((el) => el.parentElement.appendChild(el));
  }
})();
