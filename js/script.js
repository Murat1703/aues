$('.partners-container').slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    variableWidth: true, 
});

let menuBurger = document.querySelector('.menu-burger');
let mobileMenu = document.querySelector('.mobile-menu');

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('__show_mobile');
    mobileMenu.classList.toggle('__active');
})