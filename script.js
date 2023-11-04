var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,

    breakpoints: {
        1024: {
            slidesPerView: 1, //change if need  // note : change the slidePerView according to your need
        },
        640: {
            slidesPerView: 1, //change if need  // note : change the slidePerView according to your need
        },
        320: {
            slidesPerView: 1, //change if need  // note : change the slidePerView according to your need
        },
    },
});