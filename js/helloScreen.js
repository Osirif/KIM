setTimeout(function () {
  document.getElementById("header").style.opacity = "0";
  setTimeout(function () {
    document.getElementById("header").classList.add("hidden");
  }, 1000);
}, 1000);

