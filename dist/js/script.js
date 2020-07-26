const navToggle = () => {
    const navToggler = document.querySelector('.header__toggle');
    const navMenu = document.querySelector('.header__nav');
    const page = document.querySelector('body');

    navToggler.addEventListener('click', event => {
      navMenu.classList.toggle('header__nav--active');
      page.classList.toggle('Not-Allowed')
    })
}

navToggle();