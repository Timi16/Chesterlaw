document.addEventListener('DOMContentLoaded', function() {
    // Page loader
    const loader = document.querySelector('.loader');
    
    setTimeout(() => {
        loader.style.opacity = '0';
        document.body.classList.remove('no-scroll');
        
        setTimeout(() => {
            loader.style.display = 'none';
            
            // Initialize animations after loader is gone
            initAnimations();
        }, 500);
    }, 2000);
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });
        
        // Add active class to cursor when hovering over links and buttons
        const links = document.querySelectorAll('a, button, .team-card, .news-card, .recognition-item');
        
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                cursor.classList.add('active');
                cursorFollower.classList.add('active');
            });
            
            link.addEventListener('mouseleave', () => {
                cursor.classList.remove('active');
                cursorFollower.classList.remove('active');
            });
        });
    }
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Hero slider
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroDots = document.querySelectorAll('.hero-dot');
    const heroPrev = document.querySelector('.hero-prev');
    const heroNext = document.querySelector('.hero-next');
    let currentHeroSlide = 0;
    let heroSlideInterval;
    
    function showHeroSlide(index) {
        heroSlides.forEach(slide => slide.classList.remove('active'));
        heroDots.forEach(dot => dot.classList.remove('active'));
        
        heroSlides[index].classList.add('active');
        heroDots[index].classList.add('active');
        currentHeroSlide = index;
        
        // Reset auto-advance timer
        clearInterval(heroSlideInterval);
        startHeroSlideInterval();
    }
    
    function startHeroSlideInterval() {
        heroSlideInterval = setInterval(() => {
            currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
            showHeroSlide(currentHeroSlide);
        }, 8000);
    }
    
    heroDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showHeroSlide(index);
        });
    });
    
    heroPrev.addEventListener('click', () => {
        currentHeroSlide = (currentHeroSlide - 1 + heroSlides.length) % heroSlides.length;
        showHeroSlide(currentHeroSlide);
    });
    
    heroNext.addEventListener('click', () => {
        currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
        showHeroSlide(currentHeroSlide);
    });
    
    // Start auto-advance for hero slider
    startHeroSlideInterval();
    
    // Expertise tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Case studies slider
    const caseSlides = document.querySelectorAll('.case-slide');
    const caseDots = document.querySelectorAll('.case-dot');
    const casePrev = document.querySelector('.case-prev');
    const caseNext = document.querySelector('.case-next');
    let currentCaseSlide = 0;
    
    function showCaseSlide(index) {
        caseSlides.forEach(slide => slide.classList.remove('active'));
        caseDots.forEach(dot => dot.classList.remove('active'));
        
        caseSlides[index].classList.add('active');
        caseDots[index].classList.add('active');
        currentCaseSlide = index;
    }
    
    caseDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showCaseSlide(index);
        });
    });
    
    casePrev.addEventListener('click', () => {
        currentCaseSlide = (currentCaseSlide - 1 + caseSlides.length) % caseSlides.length;
        showCaseSlide(currentCaseSlide);
    });
    
    caseNext.addEventListener('click', () => {
        currentCaseSlide = (currentCaseSlide + 1) % caseSlides.length;
        showCaseSlide(currentCaseSlide);
    });
    
    // Testimonials slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    const testimonialPrev = document.querySelector('.testimonial-prev');
    const testimonialNext = document.querySelector('.testimonial-next');
    let currentTestimonialSlide = 0;
    
    function showTestimonialSlide(index) {
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        
        testimonialSlides[index].classList.add('active');
        testimonialDots[index].classList.add('active');
        currentTestimonialSlide = index;
    }
    
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonialSlide(index);
        });
    });
    
    testimonialPrev.addEventListener('click', () => {
        currentTestimonialSlide = (currentTestimonialSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
        showTestimonialSlide(currentTestimonialSlide);
    });
    
    testimonialNext.addEventListener('click', () => {
        currentTestimonialSlide = (currentTestimonialSlide + 1) % testimonialSlides.length;
        showTestimonialSlide(currentTestimonialSlide);
    });
    
    // Stats counter animation
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 16ms per frame (approx 60fps)
            let current = 0;
            
            const updateStat = () => {
                current += step;
                if (current < target) {
                    stat.textContent = Math.floor(current);
                    requestAnimationFrame(updateStat);
                } else {
                    stat.textContent = target;
                }
            };
            
            updateStat();
        });
    }
    
    // Initialize text animations
    function initAnimations() {
        // Initialize GSAP
        gsap.registerPlugin(ScrollTrigger);
        
        // Split text into characters
        if (typeof SplitType !== 'undefined') {
            const splitTextElements = document.querySelectorAll('.split-text');
            
            splitTextElements.forEach(element => {
                new SplitType(element, { types: 'chars' });
            });
            
            // Animate split text on scroll
            gsap.utils.toArray('.split-text').forEach(text => {
                ScrollTrigger.create({
                    trigger: text,
                    start: 'top 80%',
                    onEnter: () => text.classList.add('active'),
                    once: true
                });
            });
        }
        
        // Animate reveal text on scroll
        gsap.utils.toArray('.reveal-text').forEach(text => {
            ScrollTrigger.create({
                trigger: text,
                start: 'top 80%',
                onEnter: () => text.classList.add('active'),
                once: true
            });
        });
        
        // Animate elements on scroll
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // If this is a stat number, start the animation
                    if (entry.target.classList.contains('stat-item')) {
                        animateStats();
                    }
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        animateElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    // Form validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let valid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (valid) {
                // Simulate form submission
                const submitButton = contactForm.querySelector('button[type="submit"]');
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
                
                setTimeout(() => {
                    contactForm.reset();
                    submitButton.disabled = false;
                    submitButton.textContent = 'Submit Inquiry';
                    
                    // Show success message
                    alert('Thank you for your inquiry. We will get back to you shortly.');
                }, 2000);
            }
        });
    }
    
    // Newsletter form validation
    const newsletterForms = document.querySelectorAll('.newsletter-form, .subscribe-form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = form.querySelector('input[type="email"]');
            const submitButton = form.querySelector('button[type="submit"]');
            
            if (emailInput.value.trim() === '') {
                emailInput.classList.add('error');
                return;
            }
            
            // Simulate form submission
            submitButton.disabled = true;
            submitButton.textContent = 'Subscribing...';
            
            setTimeout(() => {
                form.reset();
                submitButton.disabled = false;
                submitButton.textContent = 'Subscribe';
                
                // Show success message
                alert('Thank you for subscribing to our newsletter!');
            }, 1500);
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});