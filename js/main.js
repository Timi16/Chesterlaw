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

    // Initialize mobile menu
    const initMobileMenu = () => {
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        const body = document.body;
        const html = document.documentElement;

        if (mobileBtn && navLinks) {
            // Toggle menu on button click
            mobileBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
                mobileBtn.setAttribute('aria-expanded', !isExpanded);
                navLinks.classList.toggle('active');
                body.classList.toggle('menu-open');
                html.classList.toggle('no-scroll');
            });

            // Close menu when clicking on a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    mobileBtn.setAttribute('aria-expanded', 'false');
                    body.classList.remove('menu-open');
                    html.classList.remove('no-scroll');
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                const isClickInside = navLinks.contains(e.target) || mobileBtn.contains(e.target);
                if (!isClickInside && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileBtn.setAttribute('aria-expanded', 'false');
                    body.classList.remove('menu-open');
                    html.classList.remove('no-scroll');
                }
            });
        }
    };


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
    initMobileMenu();
    initSmoothScrolling();

    // News Slider with touch support
    const initNewsSlider = () => {
        const newsSlider = document.querySelector('.news-slider');
        const dots = document.querySelectorAll('.slider-dots .dot');
        if (!newsSlider || !dots.length) return;

        let currentSlide = 0;
        let touchStartX = 0;
        let touchEndX = 0;
        let autoSlideInterval;
        const slideCount = document.querySelectorAll('.news-item').length;

        function showSlide(index) {
            // Handle wrap-around for infinite sliding
            if (index >= slideCount) {
                index = 0;
            } else if (index < 0) {
                index = slideCount - 1;
            }
            
            currentSlide = index;
            
            // Update dots
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });

            // Update slides with smooth transition
            const slides = newsSlider.querySelectorAll('.news-item');
            slides.forEach((slide, i) => {
                const offset = i - index;
                slide.style.transform = `translateX(${offset * 100}%)`;
                slide.style.opacity = i === index ? '1' : '0.5';
                slide.setAttribute('aria-hidden', i !== index);
            });
        }


        // Initialize dots
        dots.forEach((dot, index) => {
            dot.setAttribute('role', 'button');
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dot.setAttribute('tabindex', '0');
            
            // Click handler
            const handleDotClick = () => showSlide(index);
            
            // Keyboard support
            const handleKeyDown = (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    showSlide(index);
                }
            };
            
            dot.addEventListener('click', handleDotClick);
            dot.addEventListener('keydown', handleKeyDown);
            
            // Cleanup function for later
            dot._handleDotClick = handleDotClick;
            dot._handleKeyDown = handleKeyDown;
        });

        // Touch event handlers
        const handleTouchStart = (e) => {
            touchStartX = e.touches[0].clientX;
            clearInterval(autoSlideInterval);
        };

        const handleTouchMove = (e) => {
            touchEndX = e.touches[0].clientX;
        };

        const handleTouchEnd = () => {
            const difference = touchStartX - touchEndX;
            if (difference > 50) {
                // Swipe left - go to next slide
                showSlide(currentSlide + 1);
            } else if (difference < -50) {
                // Swipe right - go to previous slide
                showSlide(currentSlide - 1);
            }
            startAutoSlide();
        };

        // Add touch event listeners
        newsSlider.addEventListener('touchstart', handleTouchStart, { passive: true });
        newsSlider.addEventListener('touchmove', handleTouchMove, { passive: true });
        newsSlider.addEventListener('touchend', handleTouchEnd, { passive: true });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                showSlide(currentSlide - 1);
                clearInterval(autoSlideInterval);
                startAutoSlide();
            } else if (e.key === 'ArrowRight') {
                showSlide(currentSlide + 1);
                clearInterval(autoSlideInterval);
                startAutoSlide();
            }
        });

        // Auto slide function
        function startAutoSlide() {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(() => {
                showSlide((currentSlide + 1) % slideCount);
            }, 5000);
        }

        // Pause auto-slide on hover
        newsSlider.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });

        newsSlider.addEventListener('mouseleave', () => {
            startAutoSlide();
        });

        // Start auto-slide
        startAutoSlide();

        // Show first slide
        showSlide(0);

        // Cleanup function
        return () => {
            clearInterval(autoSlideInterval);
            newsSlider.removeEventListener('touchstart', handleTouchStart);
            newsSlider.removeEventListener('touchmove', handleTouchMove);
            newsSlider.removeEventListener('touchend', handleTouchEnd);
            
            // Remove dot event listeners
            dots.forEach(dot => {
                if (dot._handleDotClick) {
                    dot.removeEventListener('click', dot._handleDotClick);
                    delete dot._handleDotClick;
                }
                if (dot._handleKeyDown) {
                    dot.removeEventListener('keydown', dot._handleKeyDown);
                    delete dot._handleKeyDown;
                }
            });
        };
    };

    // Initialize the slider
    initNewsSlider();

    // Sample news data
    const newsData = [
        {
            title: 'Latest Legal Updates',
            date: '2025-05-16',
            image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&q=80',
            description: 'Recent changes in legal regulations and their impact on businesses.'
        },
        {
            title: 'Corporate Law Changes',
            date: '2025-05-15',
            image: 'https://placehold.co/800x600/1C352D/ffffff?text=Corporate+Law+Changes',
            description: 'Updates to corporate law regulations affecting businesses.'
        },
        {
            title: 'New Partner Announcement',
            date: '2025-05-14',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&q=80',
            description: 'Welcoming our newest partner to the firm.'
        }
    ];

    // Populate news slider
    const newsContainer = document.querySelector('.news-slider');
    if (newsContainer) {
        newsData.forEach(news => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item fade-in';
            newsItem.innerHTML = `
                <img src="${news.image}" alt="${news.title}">
                <div class="news-date">${news.date}</div>
                <h3>${news.title}</h3>
                <p>${news.description}</p>
            `;
            newsContainer.appendChild(newsItem);
        });
    }

    // Populate news section
    function populateNews() {
        const newsSlider = document.querySelector('.news-slider');
        if (!newsSlider) return;
        
        newsSlider.innerHTML = ''; // Clear existing content
        
        // Create and add all news items
        newsData.forEach((item, index) => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            newsItem.style.opacity = '1';
            newsItem.style.transform = `translateX(${index * 100}%)`;
            
            // Use a guaranteed working image for the second position
            const img = new Image();
            img.src = item.image;
            img.alt = item.title;
            img.style.opacity = '0';
            
            // Make sure images load properly
            img.onload = () => {
                img.style.opacity = '1';
                console.log(`Image ${index + 1} loaded:`, item.image);
            };
            
            // Handle failed image loads with a backup
            img.onerror = () => {
                console.log(`Image ${index + 1} failed to load:`, item.image);
                // Always use working placeholder as fallback
                img.src = `https://placehold.co/800x600/1C352D/ffffff?text=${encodeURIComponent(item.title)}`;
            };
            
            newsItem.appendChild(img);
            
            const content = document.createElement('div');
            content.className = 'news-content';
            content.innerHTML = `
                <div class="news-date">${new Date(item.date).toLocaleDateString()}</div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            `;
            
            newsItem.appendChild(content);
            newsSlider.appendChild(newsItem);
        });

        // Force the second image to load if it hasn't already
        if (newsData.length >= 2) {
            const secondImg = newsSlider.querySelectorAll('img')[1];
            if (secondImg) {
                secondImg.src = newsData[1].image;
                console.log('Forcing second image to load:', newsData[1].image);
            }
        }

        // Initialize the first slide
        showSlide(0);
    }

    // Call populateNews function
    populateNews();
});
