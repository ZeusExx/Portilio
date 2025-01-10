const menuToggle = document.getElementById('menu-toggle'); 
const buttons = document.querySelector('.buttons'); 


menuToggle.addEventListener('click', () => {
    buttons.classList.toggle('active'); 
});
