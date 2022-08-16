const element1 = document.getElementById("textarea");
const element2 = document.getElementById("total-counter");
const element3 = document.getElementById("remaining-counter");


element1.addEventListener("keyup", () => {
    updateCounter();
})

updateCounter();

function updateCounter() {
    element2.innerText = element1.value.length;
    element3.innerText = element1.getAttribute("maxlength") - element1.value.length;
}