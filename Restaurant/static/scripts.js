// FOOTER SCRIPT
// Get the current year
const currentYear = new Date().getFullYear();

// Set the year dynamically
document.getElementById('copyright-year').textContent = currentYear;


// SLIDE SHOW SCRIPT
const slideshows = document.querySelectorAll('.carousel'); // Select all carousels

slideshows.forEach(slideshow => {
  const track = slideshow.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const prevButton = slideshow.querySelector('.carousel-button.prev');
  const nextButton = slideshow.querySelector('.carousel-button.next');
  let currentIndex = 0;

  function updateCarousel() {
    const width = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * width}px)`;
  }

  nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  window.addEventListener('resize', updateCarousel); // Recalculate positions on window resize
});

//CONTACT FORM
const openPopupButton = document.getElementById('open-popup');
const closePopupButton = document.getElementById('close-popup');
const popupForm = document.getElementById('popup-form');

// Open the popup
openPopupButton.addEventListener('click', () => {
  popupForm.style.display = 'flex';
});

// Close the popup
closePopupButton.addEventListener('click', () => {
  popupForm.style.display = 'none';
});

// Close the popup when clicking outside the form
window.addEventListener('click', (e) => {
  if (e.target === popupForm) {
    popupForm.style.display = 'none';
  }
});

// STOPS FORMSPREE PAGE FROM LOADING, CLEARS FORM, AND DISPLAYS 'THANK YOU' MESSAGE
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); //Prevents default form submission

    const formData = new FormData(form);

    try {
      //Send form data to Formspree
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json', // Specify JSON response
        },
      });

      if (response.ok) {
        formMessage.style.display = 'block'; //Success message
        formMessage.textContent = 'Thank you! Your message has been sent.';
        form.reset(); //Clears form fields
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error(error);
      formMessage.style.display = 'block';
      formMessage.textContent = 'There was an error sending your message. Please try again.';
      formMessage.style.color = 'red';
    }
  });
});

//BACK TO TOP BUTTON
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//When user clicks on button, scroll to the top of document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//LIGHT-DARK MODE
const themeToggle = document.getElementById('themeToggle');

// Toggle theme when the button is clicked
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Update button text based on the current theme
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Light Mode';
  } else {
    themeToggle.textContent = 'Dark Mode';
  }
});


//MOBILE NAVBAR MENU

    // JavaScript for Popup Menu
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');

    // Toggle Mobile Menu
    menuToggle.addEventListener('click', () => {
      if (mobileMenu.style.display === 'flex') {
        // Menu is visible; hide it
        mobileMenu.style.display = 'none';
      } else {
        // Menu is hidden; show it
        mobileMenu.style.display = 'flex';
      }
    });

    // Close Mobile Menu when Close Button is Clicked
    closeMenu.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
    });

    // Close the menu when a link is clicked
    const menuLinks = document.querySelectorAll('.mobile-menu a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.style.display = 'none'; // Hide the menu after link click
      });
    });

    // Optional: Close the menu when clicking outside of it
    window.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.style.display = 'none';
      }
    });