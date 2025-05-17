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

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (hero) {
                    const scrolled = window.pageYOffset;
                    hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // Mobile Navigation
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');


    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileBtn.classList.toggle('active');
        });
    }

    // News Slider
    const newsSlider = document.querySelector('.news-slider');
    const dots = document.querySelectorAll('.slider-dots .dot');
    let currentSlide = 0;

    function showSlide(index) {
        if (!newsSlider) return;
        
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
        });
    }

    // Initialize dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    // Auto advance slider
    setInterval(() => {
        showSlide((currentSlide + 1) % dots.length);
    }, 5000);

    // Smooth scroll functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sample news data
    const newsData = [
        {
            title: 'Latest Legal Updates',
            date: '2025-05-16',
            image: 'https://source.unsplash.com/random/800x600?law,court',
            description: 'Recent changes in legal regulations and their impact on businesses.'
        },
        {
            title: 'Corporate Law Changes',
            date: '2025-05-15',
            image: 'https://source.unsplash.com/random/800x600?business,corporate',
            description: 'Updates to corporate law regulations affecting businesses.'
        },
        {
            title: 'New Partner Announcement',
            date: '2025-05-14',
            image: 'https://source.unsplash.com/random/800x600?lawyer,office',
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
        
        newsData.forEach(item => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item fade-in';
            newsItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="news-date">${new Date(item.date).toLocaleDateString()}</div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            `;
            newsSlider.appendChild(newsItem);
        });

        // Initialize the first slide
        showSlide(0);
    }

    // Call populateNews function
    populateNews();
});
