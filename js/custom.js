/*------ MENU Fixed ------*/
$(window).scroll(function () {
    var $scroll = $(window).scrollTop();
    var $navbar = $(".navbar");
    var $header = $("#header ");
    if ($scroll > 10) {
        $navbar.addClass("scroll-nav");
        $header.addClass("bar-color");
    } else {
        $navbar.removeClass("scroll-nav");
        $header.removeClass("bar-color");
    }
});

$(document).ready(function () {
    $(".headerHamburger button").click(function () {
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        $(".headerMobileOverlay").toggleClass("active");
    })
});



$(document).ready(function () {
    $('.modal-link').on('click', function () {
        $('body').addClass("modal-open");
    });
    $('.close-modal').on('click', function () {
        $('body').removeClass("modal-open");
    });
});
$(document).ready(function () {

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

});
document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".testimonial-slide");

    const prevButtons = document.querySelectorAll(".prev");
    const nextButtons = document.querySelectorAll(".next");

    const currentCounters = document.querySelectorAll(".current-slide");

    const progressBars = document.querySelectorAll(".progress-active");

    let currentIndex = 0;


    function showSlide(index) {

        // Remove active class
        slides.forEach(function (slide) {
            slide.classList.remove("active");
        });


        // Add active class
        slides[index].classList.add("active");


        // Update counter
        const slideNumber = String(index + 1).padStart(2, "0");

        currentCounters.forEach(function (counter) {
            counter.textContent = slideNumber;
        });


        // Update progress
        const progress = ((index + 1) / slides.length) * 100;

        progressBars.forEach(function (bar) {
            bar.style.width = progress + "%";
        });

    }


    function nextSlide() {

        currentIndex++;

        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }

        showSlide(currentIndex);
    }


    function previousSlide() {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }

        showSlide(currentIndex);
    }


    // Next buttons
    nextButtons.forEach(function (button) {

        button.addEventListener("click", function () {
            nextSlide();
        });

    });


    // Previous buttons
    prevButtons.forEach(function (button) {

        button.addEventListener("click", function () {
            previousSlide();
        });

    });


    // Initial state
    showSlide(currentIndex);

});
var swiper = new Swiper('.mySwiper', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

var swiper2 = new Swiper('.mySwiper2', {
    loop: true,
    spaceBetween: 10,

    speed: 1000,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    thumbs: {
        swiper: swiper,
    },

});



document.querySelectorAll('.faq-question').forEach(function (question) {

    question.addEventListener('click', function () {

        const currentItem = this.closest('.faq-item');

        document.querySelectorAll('.faq-item').forEach(function (item) {
            if (item !== currentItem) {
                item.classList.remove('active');
            }
        });

        currentItem.classList.toggle('active');

    });

});
