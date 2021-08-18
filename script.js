let popup = document.querySelector('.modal');
let openPopupButton = document.querySelector('.form_button');
let closePopupButton = popup.querySelector('.close');

openPopupButton.addEventListener('click', function(evt){
  popup.classList.add('modal-show');
  evt.preventDefault();
  console.log('fuck!');
});

closePopupButton.addEventListener('click', function(){
  popup.classList.remove('modal-show');
  console.log('fuck!');
});
