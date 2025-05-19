// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(function() {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    // Add hover effect to links and buttons
    const links = document.querySelectorAll('a, button, .language-selector, .team-card');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.5)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.borderColor = 'var(--secondary)';
        });
        
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.borderColor = 'var(--primary)';
        });
    });
    
    // Header Scroll Effect
    function handleHeaderScroll() {
        const header = document.querySelector('header');
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.height = '7rem';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.height = '8rem';
        }
    }
    
    window.addEventListener('scroll', handleHeaderScroll);
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Hero Slider
    function initHeroSlider() {
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.hero-dot');
        const prevBtn = document.querySelector('.hero-prev');
        const nextBtn = document.querySelector('.hero-next');
        let currentSlide = 0;
        let slideInterval;
        
        function showSlide(index) {
            // Hide all slides and remove active class from dots
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Show the current slide and add active class to corresponding dot
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            
            // Add active class to hero content with delay
            setTimeout(() => {
                slides[index].querySelector('.hero-content').classList.add('active');
            }, 100);
        }
        
        function nextSlide() {
            // Hide active class from current hero content
            slides[currentSlide].querySelector('.hero-content').classList.remove('active');
            
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        function prevSlide() {
            // Hide active class from current hero content
            slides[currentSlide].querySelector('.hero-content').classList.remove('active');
            
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
        
        // Initialize slider
        showSlide(currentSlide);
        
        // Auto slide
        function startSlideInterval() {
            slideInterval = setInterval(nextSlide, 8000);
        }
        
        function resetSlideInterval() {
            clearInterval(slideInterval);
            startSlideInterval();
        }
        
        startSlideInterval();
        
        // Event listeners for controls
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetSlideInterval();
            });
            
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetSlideInterval();
            });
        }
        
        // Event listeners for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                // Hide active class from current hero content
                slides[currentSlide].querySelector('.hero-content').classList.remove('active');
                
                currentSlide = index;
                showSlide(currentSlide);
                resetSlideInterval();
            });
        });
    }
    
    // Initialize hero slider if it exists
    if (document.querySelector('.hero-slider')) {
        initHeroSlider();
    }
    
    // Expertise Tabs
    function initExpertiseTabs() {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabPanes = document.querySelectorAll('.tab-pane');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.getAttribute('data-tab');
                
                // Remove active class from all buttons and panes
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));
                
                // Add active class to current button and pane
                button.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
    
    // Initialize expertise tabs if they exist
    if (document.querySelector('.expertise-tabs')) {
        initExpertiseTabs();
    }
    
    // Case Studies Slider
    function initCaseSlider() {
        const slides = document.querySelectorAll('.case-slide');
        const dots = document.querySelectorAll('.case-dot');
        const prevBtn = document.querySelector('.case-prev');
        const nextBtn = document.querySelector('.case-next');
        let currentSlide = 0;
        
        function showSlide(index) {
            // Hide all slides and remove active class from dots
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Show the current slide and add active class to corresponding dot
            slides[index].classList.add('active');
            dots[index].classList.add('active');
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
        
        // Initialize slider
        showSlide(currentSlide);
        
        // Event listeners for controls
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', prevSlide);
            nextBtn.addEventListener('click', nextSlide);
        }
        
        // Event listeners for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
    }
    
    // Initialize case slider if it exists
    if (document.querySelector('.case-slider')) {
        initCaseSlider();
    }
    
    // Testimonials Slider
    function initTestimonialsSlider() {
        const slides = document.querySelectorAll('.testimonial-slide');
        const dots = document.querySelectorAll('.testimonial-dot');
        const prevBtn = document.querySelector('.testimonial-prev');
        const nextBtn = document.querySelector('.testimonial-next');
        let currentSlide = 0;
        
        function showSlide(index) {
            // Hide all slides and remove active class from dots
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Show the current slide and add active class to corresponding dot
            slides[index].classList.add('active');
            dots[index].classList.add('active');
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
        
        // Initialize slider
        showSlide(currentSlide);
        
        // Event listeners for controls
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', prevSlide);
            nextBtn.addEventListener('click', nextSlide);
        }
        
        // Event listeners for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
    }
    
    // Initialize testimonials slider if it exists
    if (document.querySelector('.testimonials-slider')) {
        initTestimonialsSlider();
    }
    
    // Animated Stats Counter
    function initStatsCounter() {
        const stats = document.querySelectorAll('.stat-number');
        
        // Check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                rect.bottom >= 0
            );
        }
        
        // Animate counter
        function animateCounter(counter, target) {
            let current = 0;
            const increment = target / 100;
            const duration = 2000;
            const interval = duration / (target / increment);
            
            const timer = setInterval(() => {
                current += increment;
                counter.textContent = Math.round(current);
                
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                }
            }, interval);
        }
        
        // Start counter animation when element is in viewport
        function startCounters() {
            stats.forEach(stat => {
                if (isInViewport(stat) && !stat.classList.contains('counted')) {
                    const target = parseInt(stat.getAttribute('data-count'));
                    animateCounter(stat, target);
                    stat.classList.add('counted');
                }
            });
        }
        
        // Check on scroll
        window.addEventListener('scroll', startCounters);
        
        // Check on load
        startCounters();
    }
    
    // Initialize stats counter if it exists
    if (document.querySelector('.stats-grid')) {
        initStatsCounter();
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Form submission success
                alert('Thank you for your message. We will contact you shortly.');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // Scroll animations with vanilla JS
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-in');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const isVisible = elementTop < window.innerHeight - 100 && elementBottom > 0;
            
            if (isVisible && !element.classList.contains('animated')) {
                // Use vanilla JS to animate the element
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                element.classList.add('animated');
            }
        });
    }
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run animation on page load after a slight delay
    setTimeout(animateOnScroll, 200);
    
    // Update active nav link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        let scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Add hover effect to team cards
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover');
        });
    });
});