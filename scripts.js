document.addEventListener('DOMContentLoaded', function() {
    
    // Toggle navigation menu on mobile devices
    const hamMenu = document.querySelector(".ham-menu");
    const secretMenu = document.querySelector(".secret-menu");

    hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("active");
        secretMenu.classList.toggle("active");
    });
    

    // Email Sign-Up Interaction
    const signUpButton = document.querySelector('.signup-box button');
    const emailInput = document.querySelector('.signup-box input[type="email"]');

    signUpButton.addEventListener('click', function() {
        alert(`Thank you for signing up with the email: ${emailInput.value}`);
        emailInput.value = '';
    });

    // Scroll-based animations
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

function ml_webform_success_25269214() {
    var $ = ml_jQuery || jQuery;
    $('.ml-subscribe-form-25269214 .row-success').show();
    $('.ml-subscribe-form-25269214 .row-form').hide();
  }