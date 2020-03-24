const vid = document.querySelector("video");
const btn = document.querySelector("button");
const bigger = document.querySelector(".bigger");
const smaller = document.querySelector(".smaller");
const protest = document.querySelector(".protest");

btn.addEventListener("click", HeaderOut);

function HeaderOut() {
    vid.classList.add("disappear");
    btn.classList.add("disappear");

    smaller.classList.remove("disappear");
    smaller.classList.add("AnimationHeader");

    bigger.classList.remove("disappear");
    protest.classList.remove("disappear");
    bigger.classList.add("AnimationHeader");
}

vid.onended = HeaderOut;

// starting for the parallax

// const background = document.querySelector(".img-parallax");
// const second = document.querySelector(".AboutUs");

const parallaxedDown = document.querySelectorAll(".parallaxed-down");

window.addEventListener("scroll", function () {

    parallaxedDown.forEach(function (e) {
        var scrolled = window.scrollY;
        var offSet = scrolled * e.getAttribute("data-delay") - 220;
        e.style.top = offSet + "px";

    });

    //background.style.top = offSet + 'px';
    //second.style.top = offSetSecond + 'px';
})

const parallaxedUp = document.querySelectorAll(".parallaxed-up");

window.addEventListener("scroll", function () {

    parallaxedUp.forEach(function (f) {
        var scrolled = window.scrollY;
        var offSet = -scrolled * f.getAttribute("data-delay");
        f.style.top = offSet + "px";

    });

    //background.style.top = offSet + 'px';
    //second.style.top = offSetSecond + 'px';
})
