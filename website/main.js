    const background = document.querySelector(".img-parallax");
    const second = document.querySelector(".AboutUs");


/*window.addEventListener("scroll", function (){
    var scrolled = window.scrollY;
    var offSet = - scrolled * 0.2 + 20;
    var offSetSecond = scrolled * 0.1;
    background.style.top = offSet + 'px';
    second.style.top = offSetSecond + 'px';
})*/

const vid = document.querySelector("video");
const btn = document.querySelector("button");
const titleHeader = document.querySelector(".HeaderTitle");

btn.addEventListener("click", HeaderOut);

function HeaderOut() {
    console.log("look at that button");
  vid.classList.add("disappear");
  btn.classList.add("disappear");

    titleHeader.classList.remove("disappear");
    titleHeader.classList.add("AnimationHeader");
}

vid.onended = HeaderOut;

// starting for the parallax

