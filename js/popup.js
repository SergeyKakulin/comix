let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.style.overflow = 'hidden';
        popupBg.classList.add('active');
        popup.classList.add('active');       
    })
});

closePopupButton.addEventListener('click',() => {
    document.body.style.overflow = 'visible';
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        document.body.style.overflow = 'visible';
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});

