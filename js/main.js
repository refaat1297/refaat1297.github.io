$(document).ready(function() {
    $(".slider, .hire-me").ripples({
        // resolution: 200,
        dropRadius: 20,
        perturbance: 0.04
    });

    // Start

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 100) {
            $(".slider .info").addClass("disappear");
        } else {
            $(".slider .info").removeClass("disappear");
        }
    });

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 100) {
            $(".about-me").addClass("appear");
        } else {
            $(".about-me").removeClass("appear");
        }
    });

    

    $(".filters ul li").click(function() {
        $(".filters ul li").removeClass("active");
        $(this).addClass("active");

        var data = $(this).attr("data-filter");
        $grid.isotope({
            filter: data
        });
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: true,
        masonry: {
            columnWidth: ".all"
        }
    });

    var swiper = new Swiper(".swiper-container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 350,
            modifier: 1,
            slideShadows: true
        },
        pagination: {
            el: ".swiper-pagination"
        }
    });
});