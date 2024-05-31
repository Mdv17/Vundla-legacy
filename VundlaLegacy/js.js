// Nav Bar
function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}
// End Of NavBar

// Swiper Slider 1
var swiper = new Swiper(".hero", {
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".hero .swiper-button-next",
        prevEl: ".hero .swiper-button-prev",
    },
});
// End Of Swiper Slider 1

// Filter cards according to category
const filters_cat = document.querySelector(".filter-btn");

let active_cards = document.querySelectorAll(".project-slider .swiper-slide:not(.d-none)");

filters_cat.forEach((filter) => {
    filter.addEventListener("click", function(){
        filters_cat.forEach((filter) => {
            filter.classList.remove("btn-active");
        });
        this.classList.add("btn-active");
    });
    this.classList.add("btn-active");
    const category = this.dataset.cat;
    const cards = document.querySelectorAll(".project-slider .swiper-slide");
    cards.forEach((card, index) => {
        card.classList.add("d-none");
    });
    let selectedcat;
    if (category === "all") {
        selectedcat = document.querySelectorAll(".project-slider .swiper-slide");
    } else {
        selectedcat = document.querySelectorAll(`[data-type="${category}"]`);
    }
    let numberItems;

    if (selectedcat.length >= 4) {
        numberItems = 4
    } else {
        numberItems = selectedcat.length;
    }

    for (let index = 0; index <= numberItems - 1; index++) {
        selectedcat[index].classList.remove("d-none");
    }

    // If number of cards is 0, show no result
    const cards_count = document.querySelectorAll(".project-slider .swiper-slide:not(.d-none)"
    );
    if (cards_count.length === 0) {
        document.querySelector(".no-result").classList.remove("d-none");
    } else {
        document.querySelector(".no-results").classList.add("d-none");
    }
});

// End Of Filter cards according to category

// Swiper Slider 2
var swiper = new Swiper(".project-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".project-slider .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".project-slider .swiper-button-next",
        prevEl: ".project-slider .swiper-button-prev",
    },
    breakpoints: {
        640: {
        slidesPerView: 1,
        spaceBetween: 20,
        },
        768: {
        slidesPerView: 2,
        spaceBetween: 40,
        },
        1024: {
        slidesPerView: 2,
        spaceBetween: 50,
        },
    },
});

// End Of Swiper Slider 2