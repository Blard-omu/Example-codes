// let burgerMenu = document.querySelector('.burger-menu');
// burgerMenu.addEventListener('click', slideMenu);

// function slideMenu() {
//     burgerMenu.classList.toggle('slide_menu')
// }

//
const menu = document.querySelector('.burger_menu');
const items = document.querySelector('.menu_container');

menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  items.classList.toggle('open');
});
