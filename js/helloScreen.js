window.addEventListener('load', function() {
  const loader = document.getElementById("loader");
  const header = document.getElementById("header");
  const headerContent = document.getElementById("header__content");
  const card1 = document.getElementById('card1');

  // Hide loader with fade out effect after 1 second
  setTimeout(function () {
    loader.style.transition = 'opacity 1s';
    loader.style.opacity = '0';
    setTimeout(function () {
      loader.style.display = 'none';
    }, 1000);
  }, 1000);

  // Show header content with fade in effect after loader is hidden
  setTimeout(function () {
    headerContent.style.transition = 'opacity 1s';
    headerContent.style.opacity = '0';
    setTimeout(function () {
      headerContent.style.opacity = '1';
    }, 1000);
  }, 2000);

  // Hide header after 2 seconds
  setTimeout(function () {
    header.style.opacity = "0";
    setTimeout(function () {
      header.classList.add("hidden");
      // Execute the function after header is hidden
      flipCard(card1);
    }, 1500);
  }, 4000);
});