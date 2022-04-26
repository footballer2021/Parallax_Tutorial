const parallax:HTMLElement = document.getElementById('parallax');

window.addEventListener('scroll',()=>{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';
});