const nav = document.querySelector(".navbar");
const bottomContainer = document.querySelector(".bottom-container");

window.addEventListener("scroll", () => {
    if (window.scrollY > bottomContainer.offsetTop - nav.offsetHeight - 50) {
        nav.classList.add("active");
    }else {
        nav.classList.remove("active")
    }
})