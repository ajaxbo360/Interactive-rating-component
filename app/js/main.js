

const popup = document.querySelector("#pop-up");

let stars = document.querySelectorAll(".stars");
const thank_you = document.querySelector(".thank-you__component");


function openPopup() {
    popup.classList.add("open-popup");
}

popup.addEventListener("click", function (e) {
    if (popup.classList.contains("open-popup")){
        popup.classList.remove("open-popup");
    }
})