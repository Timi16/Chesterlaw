document.addEventListener('DOMContentLoaded', () => {
    // Enhanced Animation Observer with stagger effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add stagger delay based on index
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150); // 150ms delay between each animation
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '50px'
    });

    // Observe all animated elements with enhanced initialization
    document.querySelectorAll('.fade-in, .slide-in, .scale-in').forEach((el, index) => {
        // Add initial state class
        el.style.setProperty('--stagger-delay', `${index * 0.1}s`);
        observer.observe(el);
    });

    // Parallax scroll effect for hero section
    const hero = document.querySelector('.hero');
    let ticking = false;

    const updateParallax = () => {
        if (window.innerWidth > 768) { // Only apply parallax on larger screens
            if (hero) {
                const scrolled = window.pageYOffset;
                hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
            }
        }
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Update on resize
    window.addEventListener('resize', updateParallax);
    updateParallax(); // Initial check

    // Initialize smooth scrolling
    const initSmoothScrolling = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#' || targetId === '#!') return;
                
                const targetElement = document.querySelector(targetId);
                if (!targetElement) return;
                
                e.preventDefault();
                
                // Close mobile menu if open
                const mobileBtn = document.querySelector('.mobile-menu-btn');
                const navLinks = document.querySelector('.nav-links');
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileBtn.setAttribute('aria-expanded', 'false');
                    document.body.classList.remove('menu-open');
                    document.documentElement.classList.remove('no-scroll');
                }
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Account for fixed header
                    behavior: 'smooth'
                });
                
                // Update URL without adding to history
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    window.location.hash = targetId;
                }
            });
        });
    };

    // Initialize components
    initSmoothScrolling();
    initMobileMenu();

    // Sample news data
    const newsData = [
        {
            title: 'Latest Legal Updates',
            date: '2025-05-16',
            image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&q=80',
            description: 'Recent changes in legal regulations and their impact on businesses.'
        }
    ];

    // Populate news section
    function populateNews() {
        const newsSlider = document.querySelector('.news-slider');
        if (!newsSlider) return;
        
        newsSlider.innerHTML = ''; // Clear existing content
        
        // Create and add news item
        newsData.forEach((item) => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            newsItem.style.opacity = '1';
            
            const img = new Image();
            img.src = item.image;
            img.alt = item.title;
            img.loading = 'lazy';
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
            
            // Make sure images load properly
            img.onload = () => {
                img.style.opacity = '1';
                console.log(`Image loaded:`, item.image);
            };
            
            // Handle failed image loads with a backup
            img.onerror = () => {
                console.log(`Image failed to load:`, item.image);
                img.src = `https://placehold.co/800x600/1C352D/ffffff?text=${encodeURIComponent(item.title)}`;
            };
            
            const content = document.createElement('div');
            content.className = 'news-content';
            content.innerHTML = `
                <div class="news-date">${new Date(item.date).toLocaleDateString()}</div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            `;
            
            newsItem.appendChild(img);
            newsItem.appendChild(content);
            newsSlider.appendChild(newsItem);
        });
    }

    // Call populateNews function
    populateNews();
    
    // Mobile menu functionality
    const initMobileMenu = () => {
        const menuButton = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        const navOverlay = document.createElement('div');
        navOverlay.className = 'nav-overlay';
        document.body.appendChild(navOverlay);
        
        if (!menuButton || !navLinks) return;
        
        // Toggle menu function
        const toggleMenu = (show) => {
            const isOpen = show !== undefined ? show : !menuButton.classList.contains('active');
            
            // Toggle button state
            menuButton.setAttribute('aria-expanded', isOpen);
            menuButton.classList.toggle('active', isOpen);
            
            // Toggle menu and overlay
            navLinks.classList.toggle('active', isOpen);
            navOverlay.classList.toggle('active', isOpen);
            
            // Toggle body scroll
            document.body.style.overflow = isOpen ? 'hidden' : '';
            
            // Add/remove event listeners
            if (isOpen) {
                navOverlay.addEventListener('click', closeMenu);
                document.addEventListener('keydown', handleEscape);
            } else {
                navOverlay.removeEventListener('click', closeMenu);
                document.removeEventListener('keydown', handleEscape);
            }
        };
        
        // Close menu function
        const closeMenu = () => toggleMenu(false);
        
        // Handle escape key
        const handleEscape = (e) => {
            if (e.key === 'Escape') closeMenu();
        };
        
        // Toggle menu on button click
        menuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });
        
        // Close when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
        
        // Close on window resize to desktop
        let resizeTimer;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (window.innerWidth > 768 && menuButton.classList.contains('active')) {
                    closeMenu();
                }
            }, 100);
        };
        
        window.addEventListener('resize', handleResize);
        
        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            navOverlay.remove();
            document.body.style.overflow = '';
        };
    };
    
    // Initialize mobile menu
    initMobileMenu();
});
