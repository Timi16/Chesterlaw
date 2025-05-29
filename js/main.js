// Attorney data
const attorneys = [
    {
        id: 'victoria-reynolds',
        name: 'Victoria Reynolds',
        position: 'Managing Partner',
        specialty: 'Corporate Law & Mergers',
        image: 'images/attorneys/victoria-reynolds.jpg',
        bio: 'Victoria Reynolds is a distinguished Managing Partner at Chester Law, with over 20 years of experience in corporate law and mergers & acquisitions.',
        education: [
            'J.D., Harvard Law School',
            'B.A., Yale University, Economics'
        ],
        contact: {
            email: 'victoria.reynolds@chesterlaw.com',
            phone: '+1 (555) 123-4567',
            office: '1234 Legal Avenue, Suite 500, San Francisco, CA 94111'
        },
        languages: ['English', 'French', 'Spanish'],
        social: {
            linkedin: '#',
            twitter: '#'
        },
        memberships: [
            'American Bar Association',
            'California State Bar Association',
            'International Bar Association'
        ]
    },
    {
        id: 'muhammed-abdul',
        name: 'Muhammed Abdul',
        position: 'Partner',
        specialty: 'Bankruptcy & Restructuring',
        image: 'images/attorneys/muhammed-abdul.jpg',
        bio: 'Muhammed Abdul is a Partner specializing in bankruptcy and corporate restructuring, with extensive experience in complex financial transactions.',
        education: [
            'J.D., Stanford Law School',
            'M.B.A., Stanford Graduate School of Business',
            'B.S., UC Berkeley, Business Administration'
        ],
        contact: {
            email: 'muhammed.abdul@chesterlaw.com',
            phone: '+1 (555) 234-5678',
            office: '1234 Legal Avenue, Suite 500, San Francisco, CA 94111'
        },
        languages: ['English', 'Arabic', 'Urdu'],
        social: {
            linkedin: '#'
        },
        memberships: [
            'American Bankruptcy Institute',
            'California State Bar Association',
            'Turnaround Management Association'
        ]
    },
    {
        id: 'sarah-johnson',
        name: 'Sarah Johnson',
        position: 'Senior Associate',
        specialty: 'Corporate Law',
        image: 'images/attorneys/sarah-johnson.jpg',
        bio: 'Sarah Johnson is a Senior Associate focusing on corporate law and securities regulation, with particular expertise in technology startups.',
        education: [
            'J.D., Columbia Law School',
            'B.A., Princeton University, Public Policy'
        ],
        contact: {
            email: 'sarah.johnson@chesterlaw.com',
            phone: '+1 (555) 345-6789',
            office: '1234 Legal Avenue, Suite 500, San Francisco, CA 94111'
        },
        languages: ['English', 'Mandarin'],
        social: {
            linkedin: '#',
            twitter: '#'
        },
        memberships: [
            'American Bar Association',
            'California State Bar Association',
            'Women in Law Association'
        ]
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Handle attorney profile if on attorney profile page
    if (window.location.pathname.includes('attorny-profile.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const attorneyId = urlParams.get('id');
        const attorney = attorneys.find(a => a.id === attorneyId);

        if (!attorney) {
            window.location.href = 'team.html';
        } else {
            // Update page title
            document.title = `${attorney.name} | Chester Law Partners`;
            
            // Update attorney profile content
            document.getElementById('attorney-image').src = attorney.image;
            document.getElementById('attorney-name').textContent = attorney.name;
            document.getElementById('attorney-position').textContent = attorney.position;
            document.getElementById('attorney-specialty').textContent = attorney.specialty;
            
            // Update bio
            document.getElementById('attorney-bio').innerHTML = `<p>${attorney.bio}</p>`;
            
            // Update education
            const educationList = document.getElementById('attorney-education');
            attorney.education.forEach(edu => {
                const li = document.createElement('li');
                li.textContent = edu;
                educationList.appendChild(li);
            });
            
            // Update contact info
            const contactInfo = document.getElementById('attorney-contact');
            contactInfo.innerHTML = `
                <div class="contact-item">
                    <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                    <div class="contact-text">${attorney.contact.email}</div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon"><i class="fas fa-phone"></i></div>
                    <div class="contact-text">${attorney.contact.phone}</div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
                    <div class="contact-text">${attorney.contact.office}</div>
                </div>
            `;
            
            // Update languages
            const languagesList = document.getElementById('attorney-languages');
            attorney.languages.forEach(lang => {
                const li = document.createElement('li');
                li.textContent = lang;
                languagesList.appendChild(li);
            });
            
            // Update social links
            const socialLinks = document.getElementById('attorney-social');
            if (attorney.social.linkedin) {
                socialLinks.innerHTML += `<a href="${attorney.social.linkedin}" class="social-link"><i class="fab fa-linkedin-in"></i></a>`;
            }
            if (attorney.social.twitter) {
                socialLinks.innerHTML += `<a href="${attorney.social.twitter}" class="social-link"><i class="fab fa-twitter"></i></a>`;
            }
            
            // Update memberships
            const membershipsList = document.getElementById('attorney-memberships');
            attorney.memberships.forEach(membership => {
                const li = document.createElement('li');
                li.textContent = membership;
                membershipsList.appendChild(li);
            });
        }
    }

    // Language selector functionality
    const languageSelector = document.querySelector('.language-selector');
    const currentLanguage = document.querySelector('.current-language');
    const languageOptions = document.querySelector('.language-options');

    if (languageSelector && currentLanguage && languageOptions) {
        languageSelector.addEventListener('click', (e) => {
            e.stopPropagation();
            languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', () => {
            languageOptions.style.display = 'none';
        });

        languageOptions.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                currentLanguage.textContent = e.target.textContent;
                Array.from(languageOptions.children).forEach(a => a.classList.remove('active'));
                e.target.classList.add('active');
            }
        });
    }
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
    
    // Only add event listeners if elements exist
    if (heroDots && heroDots.length > 0) {
        heroDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showHeroSlide(index);
            });
        });
    }
    
    if (heroPrev) {
        heroPrev.addEventListener('click', () => {
            currentHeroSlide = (currentHeroSlide - 1 + heroSlides.length) % heroSlides.length;
            showHeroSlide(currentHeroSlide);
        });
    }
    
    if (heroNext) {
        heroNext.addEventListener('click', () => {
            currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
            showHeroSlide(currentHeroSlide);
        });
    }
    
    // Start auto-advance for hero slider only if elements exist
    if (heroSlides && heroSlides.length > 0) {
        startHeroSlideInterval();
    }
    
    // Expertise tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    if (tabButtons && tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.dataset.tab;

                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));

                button.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
    
    // Case studies slider
    const caseSlides = document.querySelectorAll('.case-slide');
    const caseDots = document.querySelectorAll('.case-dot');
    const casePrev = document.querySelector('.case-prev');
    const caseNext = document.querySelector('.case-next');
    let currentCaseSlide = 0;
    
    function showCaseSlide(index) {
        if (!caseSlides || caseSlides.length === 0) return;
        
        caseSlides.forEach(slide => slide.classList.remove('active'));
        caseDots.forEach(dot => dot.classList.remove('active'));
        
        caseSlides[index].classList.add('active');
        caseDots[index].classList.add('active');
        currentCaseSlide = index;
    }
    
    if (caseDots && caseDots.length > 0) {
        caseDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showCaseSlide(index);
            });
        });
    }
    
    if (casePrev) {
        casePrev.addEventListener('click', () => {
            if (!caseSlides || caseSlides.length === 0) return;
            currentCaseSlide = (currentCaseSlide - 1 + caseSlides.length) % caseSlides.length;
            showCaseSlide(currentCaseSlide);
        });
    }
    
    if (caseNext) {
        caseNext.addEventListener('click', () => {
            if (!caseSlides || caseSlides.length === 0) return;
            currentCaseSlide = (currentCaseSlide + 1) % caseSlides.length;
            showCaseSlide(currentCaseSlide);
        });
    }
    
    // Note: Event listeners for prev/next buttons are already added above with null checks
    
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
    
    if (testimonialPrev) {
        testimonialPrev.addEventListener('click', () => {
            currentTestimonialSlide = (currentTestimonialSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
            showTestimonialSlide(currentTestimonialSlide);
        });
    }
    
    if (testimonialNext) {
        testimonialNext.addEventListener('click', () => {
            currentTestimonialSlide = (currentTestimonialSlide + 1) % testimonialSlides.length;
            showTestimonialSlide(currentTestimonialSlide);
        });
    }
    
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