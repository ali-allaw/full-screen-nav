let toggle = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let closeSpan = document.querySelector(".close");

toggle.onclick = function () {
    nav.classList.add("open")
};

closeSpan.onclick = function () {
    this.parentElement.classList.remove("open")
};

document.onkeyup = function (e) {
    if (e.key === "Escape") {
        nav.classList.remove("open")
    }
};