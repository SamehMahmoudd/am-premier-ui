
function loadNavbar() {
    fetch('nav.html')
      .then(response => response.text())
      .then(html => {
        document.querySelectorAll('.navbar-container').forEach(container => {
            container.innerHTML = html;
          });
      })
      .catch(error => console.error('Error loading navbar:', error));
  }
  
  // Function to load footer
  function loadFooter() {
    fetch('footer.html')
      .then(response => response.text())
      .then(html => {
        document.querySelectorAll('.footer-container').forEach(container => {
            container.innerHTML = html;
          });
      })
      .catch(error => console.error('Error loading footer:', error));
  }
  
  // Call functions to load navbar and footer
  loadNavbar();
  loadFooter();

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar-container').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.navbar-container').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

// form start




