let icon = document.getElementById("links");
let btn = document.getElementById("button");

icon.addEventListener("click", toggle);

function toggle() {
  let ul = document.getElementById("dropdown");

  ul.classList.toggle("active");
  // if (ul.style.display !== "block") {
  //   ul.style.cssText = "display: block";
  //   ul.classList.add("active");
  // } else {
  //   ul.style.cssText = "display: none";
  //   ul.classList.remove("active");
  // }
}

window.onclick = function (e) {
  if (!e.target.matches("#icon") && !e.target.matches("#fnt-icon")) {
    if (document.getElementById("dropdown").classList.contains("active")) {
      document.getElementById("dropdown").classList.remove("active");
    }
  }
};

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
