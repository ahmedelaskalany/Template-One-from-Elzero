let icon = document.getElementById("links");
let btn = document.getElementById("button");

icon.addEventListener("click", toggle);

function toggle() {
  let ul = document.querySelector("ul");

  if (ul.style.display !== "block") {
    ul.style.cssText = "display: block";
  } else {
    ul.style.cssText = "display: none";
  }
}

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
