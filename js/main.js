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