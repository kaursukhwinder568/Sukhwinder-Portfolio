
console.log("Welcome to Sukhwinder Kaur's Portfolio!");

// Smooth Scrolling
document.querySelectorAll('nav a, .btn').forEach(function(link) {
    link.addEventListener('click', function(event) {
        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Footer Current Year
const footer = document.querySelector('footer p');

if (footer) {
    footer.innerHTML =
        "© " + new Date().getFullYear() +
        " Sukhwinder Kaur | All Rights Reserved.";
}

