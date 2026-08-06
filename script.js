// =========================
// Merun v2.0
// script.js - Part 1
// =========================

// Mobile Menu
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    if (navbar) {
        navbar.classList.toggle("active");
    }
}

// Dark Mode
const darkBtn = document.getElementById("darkModeBtn");

function setTheme(mode) {
    if (mode === "dark") {
        document.body.classList.add("dark-mode");
        if (darkBtn) darkBtn.innerHTML = "☀️ Light";
    } else {
        document.body.classList.remove("dark-mode");
        if (darkBtn) darkBtn.innerHTML = "🌙 Dark";
    }
    localStorage.setItem("theme", mode);
}

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

// Toggle theme
if (darkBtn) {
    darkBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const nextTheme = document.body.classList.contains("dark-mode")
            ? "light"
            : "dark";
        setTheme(nextTheme);
    });
}

// Reading Progress Bar
window.addEventListener("scroll", function () {
    const progress = document.getElementById("progress-bar");
    if (!progress) return;

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const width = scrollHeight > 0
        ? (scrollTop / scrollHeight) * 100
        : 0;

    progress.style.width = width + "%";
});// =========================
// Search System
// =========================

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

function performSearch() {

    if (!searchInput) return;

    const query = searchInput.value.trim().toLowerCase();

    if (query === "") {
        alert("Please enter something to search.");
        return;
    }

    window.location.href =
        "search.html?query=" + encodeURIComponent(query);
}

if (searchBtn) {
    searchBtn.addEventListener("click", performSearch);
}

if (searchInput) {
    searchInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            performSearch();
        }
    });
}

// =========================
// Newsletter
// =========================

const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("✅ Thanks for subscribing to Merun!");

        newsletterForm.reset();

    });

}
