    // Menu Déroulant

	document.addEventListener('DOMContentLoaded', function() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        const navButtons = document.querySelector('.nav-buttons');
        
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navButtons.classList.toggle('active');
            
            // Change l'icône du menu hamburger
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Ferme le menu quand on clique sur un lien
        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                navButtons.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
        
        // Gestion responsive en cas de redimensionnement
        window.addEventListener('resize', function() {
            if (window.innerWidth > 992) {
                navLinks.classList.remove('active');
                navButtons.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

// Dark Mode Toggle

const toggleBtn = document.getElementById('darkModeToggle');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Load saved mode from localStorage
if (localStorage.getItem("theme") === "dark" || 
	(!localStorage.getItem("theme") && prefersDarkScheme.matches)) {
  document.body.classList.add("dark-mode");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  
  // Save preference
  if (document.body.classList.contains("dark-mode")) {
	localStorage.setItem("theme", "dark");
  } else {
	localStorage.setItem("theme", "light");
  }
});