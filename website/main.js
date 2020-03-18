const vid = document.querySelector("video");
const btn = document.querySelector("button");
const titleHeader = document.querySelector(".HeaderTitle");

btn.addEventListener("click", HeaderOut);

function HeaderOut() {
    console.log("look at that button");
  vid.classList.add("disappear");
}
