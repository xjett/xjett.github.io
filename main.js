//grab elements
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

//toggle navbar (open/close)
menuBtn.addEventListener("click", () -> {
    menu.classList.toggle('nav-toggle');
});

/*get current year + add to html */
document.querySelector(".year").
innerHTML = new Date().getFullYear();