const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("[data-nav-links]");
const yearTarget = document.querySelector("[data-current-year]");
const bookingLink = document.querySelector(".booking-link");

if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
        navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });

    navLinks.addEventListener("click", (event) => {
        if (event.target instanceof HTMLAnchorElement) {
            navLinks.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.setAttribute("aria-label", "Open navigation");
        }
    });
}

document.querySelectorAll("[data-plan]").forEach((button) => {
    button.addEventListener("click", () => {
        const plan = button.getAttribute("data-plan");
        const subject = encodeURIComponent(`Swimming lesson booking: ${plan}`);
        const body = encodeURIComponent(`Hello Swimming Academy,\n\nI would like to book the ${plan} lesson plan.\n\nLearner name:\nPreferred schedule:\nLesson type:`);

        window.location.href = `mailto:support@swimacademy.com?subject=${subject}&body=${body}`;
    });
});

if (bookingLink) {
    bookingLink.addEventListener("click", () => {
        if (navLinks) {
            navLinks.classList.remove("is-open");
        }
    });
}
