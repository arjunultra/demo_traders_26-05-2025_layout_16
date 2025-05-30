// nav menu open/close
$('.hamburger-menu, .link').click(function () {
  $('body').toggleClass('menu-open');

  // toggle visual style only when menu is closed
  if ($('body').hasClass('menu-open')) {
    $('.hamburger-menu').removeClass('menu-closed');
  } else {
    $('.hamburger-menu').addClass('menu-closed');
  }
});


// index carousel swiper
document.addEventListener("DOMContentLoaded", () => {
    const homeCarouselSwiper = new Swiper(".home-carousel-swiper", {
      loop: true,
      speed: 600,
      effect: "creative",
      creativeEffect: {
        prev: {
          translate: ["-20%", 0, -1],
          opacity: 0.5,
          scale: 0.8,
        },
        next: {
          translate: ["20%", 0, -1],
          opacity: 0.5,
          scale: 0.8,
        },
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      // No pagination
      // No navigation
    });
  });
  // safety nav click handler
  $(document).ready(function() {
    // Initialize with first tab active
    $('.safety-nav-item').first().addClass('active');
    $('.safety-content').first().addClass('active').show();
    $('.safety-content').not(':first').hide();

    $('.safety-nav-item').click(function() {
        // Remove active class from all items and hide all content
        $('.safety-nav-item').removeClass('active');
        $('.safety-content').removeClass('active').hide();
        
        // Add active class to clicked item
        $(this).addClass('active');
        
        // Show the selected content section with animation
        $('#' + $(this).data('target')).addClass('active').fadeIn(300);
        
        // Reinitialize wow.js for new content
        new WOW().init();
    });
});
// index counter odometer
document.addEventListener('DOMContentLoaded', function() {
    const indexCounterSection = document.querySelector('.index-counter');
    if (!indexCounterSection) return; // Exit if section doesn't exist
    // Initialize odometer options
    window.odometerOptions = {
        auto: false, // We'll trigger manually
        format: '(,ddd).dd',
        duration: 2000
    };

    // Function to initialize counters when in view
    function initCounters() {
        const counters = document.querySelectorAll('.odometer');
        counters.forEach(counter => {
            const finalValue = parseInt(counter.getAttribute('data-odometer-final'));
            const od = new Odometer({
                el: counter,
                value: 0
            });
            od.update(finalValue);
        });
    }

    // Initialize when section comes into view
    const counterSection = document.querySelector('.index-counter');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(counterSection);
});
// swiper.js
document.addEventListener('DOMContentLoaded', function() {
    // Check if Swiper is loaded
    if (typeof Swiper === 'undefined') {
        console.error('Swiper.js is not loaded. Please ensure Swiper is included in your project.');
        return;
    }
  // Initialize Swiper with custom effects
  const brandSwiper = new Swiper('.brands-swiper', {
      // Custom parameters
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      grabCursor: true,
      breakpoints: {
          576: {
              slidesPerView: 3,
              spaceBetween: 20,
          },
          768: {
              slidesPerView: 4,
              spaceBetween: 25,
          },
          992: {
              slidesPerView: 5,
              spaceBetween: 30,
          },
          1200: {
              slidesPerView: 6,
              spaceBetween: 30,
          }
      },
      // Custom navigation
      navigation: {
          nextEl: '.brands-swiper-next',
          prevEl: '.brands-swiper-prev',
      },
      // Custom transition effect
      on: {
          init: function() {
              animateSlides(this.slides[this.activeIndex], true);
          },
          slideChange: function() {
              this.slides.forEach((slide, index) => {
                  animateSlides(slide, index === this.activeIndex);
              });
          }
      }
  });
  
  // Custom slide animation function
  function animateSlides(slide, isActive) {
      const card = slide.querySelector('.brands-section-card');
      if (isActive) {
          card.style.transform = 'scale(1.05)';
          card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
          card.querySelector('img').style.filter = 'grayscale(0%)';
          card.querySelector('img').style.opacity = '1';
      } else {
          card.style.transform = '';
          card.style.boxShadow = '';
          card.querySelector('img').style.filter = 'grayscale(100%)';
          card.querySelector('img').style.opacity = '0.7';
      }
  }
  
  // Hover pause functionality
  const swiperContainer = document.querySelector('.brands-swiper');
    if (!swiperContainer) return; // Exit if swiper container doesn't exist
  swiperContainer.addEventListener('mouseenter', () => {
      brandSwiper.autoplay.stop();
  });
  swiperContainer.addEventListener('mouseleave', () => {
      brandSwiper.autoplay.start();
  });
});
// navbar fixed to top on scroll
$(document).ready(function() {
  let lastScrollTop = 0;
  const navbar = $('.navbar');

  function getContactBarHeight() {
      const windowWidth = $(window).width();
      
      if (windowWidth < 576) { // Mobile screens
          return $('.fireworks-header .header-announcement').outerHeight() + 380;
      } else if (window.matchMedia('(min-width: 768px) and (max-width: 991.98px)').matches) { // Tablets
          return $('.fireworks-header .header-announcement').outerHeight() + 195;
      } else { // Desktop screens
          return $('.fireworks-header .header-announcement').outerHeight() + 100;
      }
  }

  $(window).on('scroll resize', function() {
      const scrollTop = $(this).scrollTop();
      const contactBarHeight = getContactBarHeight();

      if (scrollTop > lastScrollTop) {
          // Hide everything including the navbar when scrolling down
          navbar.slideUp();
      } else {
          // Show navbar at top:0 when scrolling up
          navbar.css('top', '0').slideDown();
      }

      // Adjust navbar position when at the top
      if (scrollTop <= contactBarHeight) {
          navbar.css('top', contactBarHeight + 'px');
      }

      lastScrollTop = scrollTop;
  });

  // Make the navbar fixed to top
  navbar.addClass('nav-fixed-top');
});



  