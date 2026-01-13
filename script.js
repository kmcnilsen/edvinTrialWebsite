// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            // Toggle active class on hamburger and menu
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);

            if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Hide placeholder icons when images are loaded (for older browser compatibility)
    // This provides fallback for browsers that don't support :has() CSS selector
    const imageContainers = document.querySelectorAll('.about-image, .project-image');
    imageContainers.forEach(container => {
        const img = container.querySelector('img');
        if (img) {
            // Image exists, hide placeholder icon
            container.classList.add('has-image');
            
            // Also handle if image fails to load
            img.addEventListener('error', function() {
                container.classList.remove('has-image');
            });
        }
    });
});
