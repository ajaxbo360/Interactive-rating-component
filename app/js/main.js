

const popup = document.querySelector("#pop-up");
const closeBtn = document.querySelector(".thank-you__component__close__btn");

let stars = document.querySelectorAll(".stars");
const thank_you = document.querySelector(".thank-you__component");


function openPopup() {
    popup.classList.add("open-popup");
}

closeBtn.addEventListener("click", function(e) {
    popup.classList.remove("open-popup");
})