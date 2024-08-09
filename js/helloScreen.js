window.addEventListener('load', function() {
  const loader = document.getElementById("loader");
  const header = document.getElementById("header");
  const headerContent = document.getElementById("header__content");

  setTimeout(function () {
    loader.style.transition = 'opacity 1s';
    loader.style.opacity = '0';
    setTimeout(function () {
      loader.style.display = 'none';
    }, 1000);
  }, 500);

  setTimeout(function () {
    headerContent.style.transition = 'opacity 1s';
    headerContent.style.opacity = '0';
    setTimeout(function () {
      headerContent.style.opacity = '1';
    }, 1000);
  }, 1000);

  setTimeout(function () {
    header.style.opacity = "0";
    setTimeout(function () {
      header.classList.add("hidden");
    }, 1000);
  }, 4000);
});