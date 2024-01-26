function toggleMenu() {
    var nav = document.getElementById("myNav");
    nav.style.display = (nav.style.display === "block") ? "none" : "block";
}
function flipCard() {
    var card = document.querySelector('.card');
    card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}



function expandCard(card) {
    card.classList.toggle('expanded');
}