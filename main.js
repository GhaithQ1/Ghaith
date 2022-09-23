let but = document.querySelector(".up");
window.onscroll = function () {
  if (window.scrollY >= 2000) {
    but.style.display = "block";
  } else {
    but.style.display = "none";
  }
};

but.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
