const header = document.querySelector("nav");
const navHeight = header.getBoundingClientRect().height;

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollHeight > navHeight + 5) {
        header.classList.add("fixed-nav");
    } else {
        header.classList.remove("fixed-nav");
    }
});