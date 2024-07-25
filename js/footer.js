document.getElementById('showBtn').addEventListener('click', function() {
    document.getElementById('footer').style.marginTop = '-100vh';
});

document.getElementById('hideBtn').addEventListener('click', function() {
    document.getElementById('footer').style.marginTop = '0';
});