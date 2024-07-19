const openPopup = document.getElementById('open_popup');
const closePopup = document.getElementById('popup_close');
const popup = document.getElementById('popup');

openPopup.addEventListener('click', function(e) {
    e.preventDefault();
    popup.classList.add('active');
})

closePopup.addEventListener('click', () => {
    popup.classList.remove('active');
})