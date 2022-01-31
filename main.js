let icon = document.getElementById("links");
let btn = document.getElementById("button");

function toggle() {
  let ul = document.querySelector("ul");

  ul.style.display == "none"
    ? (ul.style.cssText = "display: block")
    : (ul.style.cssText = "display: none");
}

icon.addEventListener("click", toggle);

window.onscroll = function () {
  if (window.scrollY > 800) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
