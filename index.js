
// SELECTS MOBILE NAVIGATION
const mobileNav = document.querySelector(".mobile__nav");
const mobileNavBtn = document.querySelector(".fa-bars");
const clostMobileNav = document.querySelector(".fa-x");


// TOGGLE BUTTONS FOR THE MOBILE NAVBAR
mobileNavBtn.addEventListener("click", () => {
	mobileNav.classList.add("open");
});

clostMobileNav.addEventListener("click", () => {
	mobileNav.classList.remove("open");
});

