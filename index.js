const header = document.querySelector(".Container-header");
const menu = document.querySelector(".menu-icon i");
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function() {
    header.classList.toggle("shadow", this.window.scrollY > 0);
    navbar.classList.remove("active");
    menu.classList.remove("bx-x");
})

menu.addEventListener("click", () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");

})
var swiper = new Swiper(".container-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper2 = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    centeredSlides: true,
    breakpoins: {
        0: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        968: {
            slidesPerView: 5,
        }
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
});