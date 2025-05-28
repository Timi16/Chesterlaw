// Practice area data
const practiceAreas = {
    corporate: {
        title: "Corporate Law",
        heroImage: "images/practices/corporate-law.jpg",
        description: "Comprehensive legal solutions for businesses of all sizes, from startups to multinational corporations.",
        content: `
            <div class="practice-content">
                <h2>Corporate Law Services</h2>
                <p>Our corporate law practice provides comprehensive legal solutions to businesses at every stage of their development. We combine industry knowledge with practical legal expertise to deliver results-oriented counsel to our clients.</p>
                
                <div class="service-highlights">
                    <div class="highlight-item">
                        <i class="fas fa-handshake"></i>
                        <h3>Mergers & Acquisitions</h3>
                        <p>Strategic guidance throughout the M&A process, from due diligence to post-merger integration.</p>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-file-contract"></i>
                        <h3>Corporate Governance</h3>
                        <p>Advising boards and executives on governance structures, compliance, and risk management.</p>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-chart-line"></i>
                        <h3>Securities & Capital Markets</h3>
                        <p>Expertise in public and private offerings, regulatory compliance, and reporting obligations.</p>
                    </div>
                </div>

                <div class="key-benefits">
                    <h3>Why Choose Us for Corporate Law?</h3>
                    <ul>
                        <li>Experienced team with deep industry knowledge</li>
                        <li>Practical, business-focused solutions</li>
                        <li>Comprehensive service across all corporate matters</li>
                        <li>Strong track record of successful transactions</li>
                    </ul>
                </div>
            </div>
        `
    },
    litigation: {
        title: "Litigation",
        heroImage: "images/practices/litigation.jpg",
        description: "Strategic representation in complex disputes across various industries and jurisdictions.",
        content: `
            <div class="practice-content">
                <h2>Litigation Services</h2>
                <p>Our litigation team provides strategic representation in complex disputes, combining aggressive advocacy with practical business judgment to achieve optimal results for our clients.</p>
                
                <div class="service-highlights">
                    <div class="highlight-item">
                        <i class="fas fa-balance-scale"></i>
                        <h3>Commercial Litigation</h3>
                        <p>Representation in business disputes, contract conflicts, and commercial matters.</p>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-shield-alt"></i>
                        <h3>Class Action Defense</h3>
                        <p>Strategic defense against class action lawsuits across various industries.</p>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-gavel"></i>
                        <h3>Alternative Dispute Resolution</h3>
                        <p>Skilled representation in mediation and arbitration proceedings.</p>
                    </div>
                </div>

                <div class="key-benefits">
                    <h3>Why Choose Us for Litigation?</h3>
                    <ul>
                        <li>Trial-tested attorneys with proven track record</li>
                        <li>Strategic approach to dispute resolution</li>
                        <li>Cost-effective litigation management</li>
                        <li>Experience across multiple jurisdictions</li>
                    </ul>
                </div>
            </div>
        `
    },
    bankruptcy: {
        title: "Bankruptcy & Restructuring",
        heroImage: "images/practices/bankruptcy.jpg",
        description: "Expert guidance in financial restructuring and bankruptcy proceedings.",
        content: `
            <div class="practice-content">
                <h2>Bankruptcy & Restructuring Services</h2>
                <p>Our bankruptcy and restructuring practice provides comprehensive solutions for businesses facing financial challenges, from out-of-court workouts to formal bankruptcy proceedings.</p>
                
                <div class="service-highlights">
                    <div class="highlight-item">
                        <i class="fas fa-chart-pie"></i>
                        <h3>Chapter 11 Restructuring</h3>
                        <p>Strategic guidance through the Chapter 11 process for business reorganization.</p>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-handshake"></i>
                        <h3>Creditor Representation</h3>
                        <p>Protecting creditor interests in bankruptcy proceedings and workouts.</p>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-sync"></i>
                        <h3>Business Reorganization</h3>
                        <p>Strategic planning for business turnaround and financial restructuring.</p>
                    </div>
                </div>

                <div class="key-benefits">
                    <h3>Why Choose Us for Bankruptcy & Restructuring?</h3>
                    <ul>
                        <li>Deep understanding of bankruptcy law and procedure</li>
                        <li>Creative solutions for complex financial challenges</li>
                        <li>Experience with multi-party negotiations</li>
                        <li>Strong track record of successful reorganizations</li>
                    </ul>
                </div>
            </div>
        `
    },
    ip: {
        title: "Intellectual Property",
        heroImage: "images/practices/intellectual-property.jpg",
        description: "Protecting and maximizing the value of intellectual property assets.",
        content: `
            <div class="practice-content">
                <h2>Intellectual Property Services</h2>
                <p>Our intellectual property practice helps clients protect, manage, and monetize their IP assets through strategic counseling and vigorous enforcement.</p>
                
                <div class="service-highlights">
                    <div class="highlight-item">
                        <i class="fas fa-trademark"></i>
                        <h3>Patent & Trademark</h3>
                        <p>Comprehensive IP protection through patent and trademark registration.</p>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-copyright"></i>
                        <h3>Copyright</h3>
                        <p>Protection of creative works through copyright registration and enforcement.</p>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-laptop-code"></i>
                        <h3>Technology Licensing</h3>
                        <p>Strategic advice on IP licensing and technology transfers.</p>
                    </div>
                </div>

                <div class="key-benefits">
                    <h3>Why Choose Us for IP Law?</h3>
                    <ul>
                        <li>Technical expertise across various industries</li>
                        <li>Strategic approach to IP portfolio management</li>
                        <li>Experience with complex IP transactions</li>
                        <li>Strong enforcement track record</li>
                    </ul>
                </div>
            </div>
        `
    },
    employment: {
        title: "Employment Law",
        heroImage: "images/practices/employment-law.jpg",
        description: "Comprehensive employment law services for both employers and employees.",
        content: `
            <div class="practice-content">
                <h2>Employment Law Services</h2>
                <p>Our employment law practice provides strategic counsel to employers and employees on all aspects of workplace law, from compliance to dispute resolution.</p>
                
                <div class="service-highlights">
                    <div class="highlight-item">
                        <i class="fas fa-users"></i>
                        <h3>Employment Agreements</h3>
                        <p>Drafting and reviewing employment contracts, non-compete agreements, and severance packages.</p>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-balance-scale"></i>
                        <h3>Workplace Compliance</h3>
                        <p>Ensuring compliance with labor laws, regulations, and workplace safety requirements.</p>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-gavel"></i>
                        <h3>Dispute Resolution</h3>
                        <p>Representation in employment disputes, discrimination claims, and workplace investigations.</p>
                    </div>
                </div>

                <div class="key-benefits">
                    <h3>Why Choose Us for Employment Law?</h3>
                    <ul>
                        <li>Extensive experience in employment litigation and counseling</li>
                        <li>Proactive approach to compliance and risk management</li>
                        <li>Understanding of both employer and employee perspectives</li>
                        <li>Practical solutions for complex workplace issues</li>
                    </ul>
                </div>
            </div>
        `
    },
    realestate: {
        title: "Real Estate Law",
        heroImage: "images/practices/real-estate.jpg",
        description: "Comprehensive legal services for all aspects of real estate transactions and disputes.",
        content: `
            <div class="practice-content">
                <h2>Real Estate Law Services</h2>
                <p>Our real estate practice provides expert legal guidance for property transactions, development projects, and real estate litigation.</p>
                
                <div class="service-highlights">
                    <div class="highlight-item">
                        <i class="fas fa-building"></i>
                        <h3>Property Transactions</h3>
                        <p>Handling purchases, sales, leases, and complex real estate transactions.</p>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-city"></i>
                        <h3>Development & Zoning</h3>
                        <p>Guidance on property development, zoning laws, and land use regulations.</p>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-key"></i>
                        <h3>Property Management</h3>
                        <p>Legal support for property management, tenant relations, and compliance.</p>
                    </div>
                </div>

                <div class="key-benefits">
                    <h3>Why Choose Us for Real Estate Law?</h3>
                    <ul>
                        <li>Extensive experience in property transactions</li>
                        <li>Deep understanding of local real estate markets</li>
                        <li>Comprehensive development project support</li>
                        <li>Expert handling of real estate disputes</li>
                    </ul>
                </div>
            </div>
        `
    },
    family: {
        title: "Family Law",
        heroImage: "images/practices/family-law.jpg",
        description: "Compassionate legal support for family matters and domestic relations.",
        content: `
            <div class="practice-content">
                <h2>Family Law Services</h2>
                <p>Our family law practice provides sensitive and professional legal support for all aspects of domestic relations and family matters.</p>
                
                <div class="service-highlights">
                    <div class="highlight-item">
                        <i class="fas fa-heart"></i>
                        <h3>Divorce & Separation</h3>
                        <p>Professional guidance through divorce proceedings and separation agreements.</p>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-child"></i>
                        <h3>Child Custody</h3>
                        <p>Advocacy for child custody, support, and visitation arrangements.</p>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-home"></i>
                        <h3>Property Division</h3>
                        <p>Fair resolution of marital property division and asset distribution.</p>
                    </div>
                </div>

                <div class="key-benefits">
                    <h3>Why Choose Us for Family Law?</h3>
                    <ul>
                        <li>Compassionate approach to sensitive matters</li>
                        <li>Experience in complex family disputes</li>
                        <li>Focus on children's best interests</li>
                        <li>Skilled negotiation and mediation</li>
                    </ul>
                </div>
            </div>
        `
    },
    inheritance: {
        title: "Inheritance Law",
        heroImage: "images/practices/inheritance-law.jpg",
        description: "Expert guidance in estate planning, probate, and inheritance matters.",
        content: `
            <div class="practice-content">
                <h2>Inheritance Law Services</h2>
                <p>Our inheritance law practice provides comprehensive estate planning and probate services to protect your family's legacy.</p>
                
                <div class="service-highlights">
                    <div class="highlight-item">
                        <i class="fas fa-scroll"></i>
                        <h3>Estate Planning</h3>
                        <p>Creating wills, trusts, and comprehensive estate plans.</p>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-balance-scale"></i>
                        <h3>Probate Administration</h3>
                        <p>Guiding executors and beneficiaries through the probate process.</p>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-shield-alt"></i>
                        <h3>Asset Protection</h3>
                        <p>Strategies for protecting and preserving family wealth.</p>
                    </div>
                </div>

                <div class="key-benefits">
                    <h3>Why Choose Us for Inheritance Law?</h3>
                    <ul>
                        <li>Comprehensive estate planning expertise</li>
                        <li>Experience with complex probate matters</li>
                        <li>Tax-efficient wealth transfer strategies</li>
                        <li>Family-focused approach</li>
                    </ul>
                </div>
            </div>
        `
    }
};

// Initialize practice areas functionality
document.addEventListener('DOMContentLoaded', function() {
    const practiceLinks = document.querySelectorAll('.practice-link');
    const overviewSection = document.getElementById('practice-overview');
    const detailSection = document.getElementById('practice-detail');
    const practiceHero = document.getElementById('practice-hero');
    const practiceTitle = document.getElementById('practice-title');
    const practiceDescription = document.getElementById('practice-description');
    const practiceBreadcrumb = document.getElementById('practice-breadcrumb');

    // Check URL parameters for direct access to practice area
    const urlParams = new URLSearchParams(window.location.search);
    const practiceParam = urlParams.get('practice');
    if (practiceParam && practiceAreas[practiceParam]) {
        loadPracticeArea(practiceParam);
    }

    // Add click event listeners to practice area links
    practiceLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const practice = link.getAttribute('data-practice');
            loadPracticeArea(practice);
            // Update URL without refreshing the page
            window.history.pushState({}, '', `?practice=${practice}`);
        });
    });

    function loadPracticeArea(practiceKey) {
        const practice = practiceAreas[practiceKey];
        if (!practice) return;

        // Update hero section
        practiceTitle.textContent = practice.title;
        practiceDescription.textContent = practice.description;
        practiceBreadcrumb.textContent = practice.title;
        practiceHero.style.backgroundImage = `url(${practice.heroImage})`;

        // Update content
        detailSection.innerHTML = practice.content;

        // Show/hide sections
        overviewSection.classList.remove('active');
        detailSection.classList.add('active');

        // Scroll to top
        window.scrollTo(0, 0);

        // Add animation classes
        const elements = detailSection.querySelectorAll('.highlight-item, .key-benefits');
        elements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.2}s`;
            el.classList.add('fade-in');
        });
    }
});
