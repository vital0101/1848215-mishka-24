  const navMain = document.querySelector('.main-navigation');
  const navToggle = document.querySelector('.page-header__button');

  navMain.classList.add('main-navigation--closed');
  navToggle.classList.add('button-toggle-menu');
  navToggle.classList.add('button-toggle-menu--opened');


  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-navigation--closed') &&
      navToggle.classList.contains('button-toggle-menu--opened')) {
      navMain.classList.remove('main-navigation--closed');
      navMain.classList.add('main-navigation--opened');
      navToggle.classList.remove('button-toggle-menu--opened');
      navToggle.classList.add('button-toggle-menu--closed');
    } else {
      navMain.classList.remove('main-navigation--opened');
      navMain.classList.add('main-navigation--closed');
      navToggle.classList.remove('button-toggle-menu--closed');
      navToggle.classList.add('button-toggle-menu--opened');
    }
  });
