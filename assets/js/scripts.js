$(function() {

    "use strict";


    $(function() {

        var equalWidth = $(".clients-sa .item").outerWidth();

        $(".clients-sa .item").css({
            "height": equalWidth
        });

    });

    var testim = new Swiper(".testimonials-sa .testim-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        pagination: {
            el: ".testimonials-sa .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });

});


$(function() {
    var width = $(window).width();
    if (width > 991) {

        "use strict";

        $(function() {
            let cards = gsap.utils.toArray(".cards .card-item");

            let stickDistance = 0;

            let firstCardST = ScrollTrigger.create({
                trigger: cards[0],
                start: "center center"
            });

            let lastCardST = ScrollTrigger.create({
                trigger: cards[cards.length - 1],
                start: "bottom bottom"
            });

            cards.forEach((card, index) => {
                var scale = 1 - (cards.length - index) * 0.025;
                let scaleDown = gsap.to(card, {
                    scale: scale,
                    'transform-origin': '"50% ' + (lastCardST.start + stickDistance) + '"'
                });

                ScrollTrigger.create({
                    trigger: card,
                    start: "center center",
                    end: () => lastCardST.start + stickDistance,
                    pin: true,
                    pinSpacing: false,
                    ease: "none",
                    animation: scaleDown,
                    toggleActions: "restart none none reverse"
                });
            });
        });

    }
});


document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.auto-scroll');
    let scrollAmount = 0;
    const scrollSpeed = 1; // Adjust this value to control scroll speed
    
    function autoScroll() {
      scrollAmount += scrollSpeed;
      scrollContainer.scrollLeft = scrollAmount;
      
      // Reset scroll position when reaching the end
      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0;
      }
      
      requestAnimationFrame(autoScroll);
    }
    
    autoScroll();
  });