document.addEventListener('DOMContentLoaded', function () {
    const backgroundImage = document.getElementById('backgroundImage');
    const images = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg'];
    let index = 0;

    function changeBackground() {
        backgroundImage.style.backgroundImage = `url('${images[index]}')`;
        index = (index + 1) % images.length;
    }

    setInterval(changeBackground, 4000);
});
