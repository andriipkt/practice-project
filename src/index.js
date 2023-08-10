const burgerBtn = document.querySelector('.burger_btn');
const burgerIcon = document.querySelector('.burger_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

burgerBtn.addEventListener('click', () => {
  dropDownMenu.classList.toggle('is_hidden');

  const isHidden = dropDownMenu.classList.contains('is_hidden');

  burgerIcon.classList = isHidden ? 'fa-solid fa-bars' : 'fa-solid fa-xmark';
});
