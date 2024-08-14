if (localStorage.getItem('firstVisit') !== 'true') {
  window.addEventListener('load', function () {
    const loader = document.getElementById("loader");
    const header = document.getElementById("header");
    const headerContent = document.getElementById("header__content");
    const card1 = document.getElementById('card1');

    setTimeout(function () {
      loader.style.transition = 'opacity 1s';
      loader.style.opacity = '0';
      setTimeout(function () {
        loader.style.display = 'none';
      }, 1000);
    }, 1000);

    setTimeout(function () {
      headerContent.style.transition = 'opacity 1s';
      headerContent.style.opacity = '0';
      setTimeout(function () {
        headerContent.style.opacity = '1';
      }, 1000);
    }, 2000);

    setTimeout(function () {
      header.style.opacity = "0";
      setTimeout(function () {
        header.classList.add("hidden");
        flipCard(card1);
      }, 1500);
    }, 4000);
  });
  localStorage.setItem('firstVisit', 'true');
}

else {
  header.classList.add("hidden");
  setTimeout(function () {
    flipCard(card1);
  }, 1500);
}