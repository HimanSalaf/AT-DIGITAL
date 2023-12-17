document.getElementById('toggleNav').addEventListener('click', function() {
    var nav = document.querySelector('nav');
    nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'block' : 'none';
});
