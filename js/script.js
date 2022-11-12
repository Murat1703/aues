$('.partners-container').slick({
    infinite: true,
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 1
});

let menuBurger = document.querySelector('.menu-burger');
menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('__show_mobile');
})