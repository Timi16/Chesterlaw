// Team members data
const teamMembers = {
    victoria_reynolds: {
        name: "Victoria Reynolds",
        position: "Managing Partner",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80",
        content: `
            <div class="attorney-profile">
                <h2>About Victoria</h2>
                <p>Victoria Reynolds is a Managing Partner at Prestige Law Partners, specializing in corporate law and international business transactions. With over 15 years of experience, she has established herself as a trusted advisor to Fortune 500 companies, multinational corporations, and emerging businesses.</p>
                
                <div class="expertise-areas">
                    <h3>Areas of Expertise</h3>
                    <ul class="expertise-list">
                        <li><i class="fas fa-check-circle"></i> Corporate Law & Governance</li>
                        <li><i class="fas fa-check-circle"></i> Mergers & Acquisitions</li>
                        <li><i class="fas fa-check-circle"></i> International Business Transactions</li>
                        <li><i class="fas fa-check-circle"></i> Securities Regulation</li>
                        <li><i class="fas fa-check-circle"></i> Private Equity & Venture Capital</li>
                        <li><i class="fas fa-check-circle"></i> Corporate Finance</li>
                    </ul>
                </div>

                <div class="attorney-experience">
                    <h3>Experience Highlights</h3>
                    <ul class="experience-list">
                        <li>Led legal team in $2.5 billion merger between major technology companies</li>
                        <li>Advised on international expansion strategies for Fortune 100 clients</li>
                        <li>Structured complex cross-border transactions in over 20 countries</li>
                        <li>Regular speaker at international corporate law conferences</li>
                    </ul>
                </div>

                <div class="education-section">
                    <h3>Education</h3>
                    <ul>
                        <li><strong>J.D., magna cum laude</strong> - Harvard Law School</li>
                        <li><strong>B.A., Economics & Political Science, summa cum laude</strong> - Yale University</li>
                        <li><strong>Certificate in International Business Law</strong> - London School of Economics</li>
                    </ul>
                </div>

                <div class="memberships-section">
                    <h3>Professional Memberships</h3>
                    <ul>
                        <li>American Bar Association, Business Law Section</li>
                        <li>International Bar Association</li>
                        <li>Board Member, Corporate Counsel Association</li>
                    </ul>
                </div>
            </div>
        `,
        languages: ["English", "French", "Spanish", "Mandarin (basic)"],
        phone: "(555) 123-4567",
        email: "victoria.reynolds@prestigelaw.com",
        linkedin: "https://linkedin.com/in/victoria-reynolds"
    },
    viktor_surnyk: {
        name: "Viktor Surnyk",
        position: "Managing Partner",
        image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80",
        content: `
            <div class="attorney-profile">
                <h2>About Viktor</h2>
                <p>Viktor Surnyk is a Managing Partner at Prestige Law Partners with over 20 years of experience in complex litigation and dispute resolution. He has represented Fortune 100 companies, financial institutions, and high-profile individuals in high-stakes litigation and international arbitration proceedings.</p>
                
                <div class="expertise-areas">
                    <h3>Areas of Expertise</h3>
                    <ul class="expertise-list">
                        <li><i class="fas fa-check-circle"></i> Commercial & Business Litigation</li>
                        <li><i class="fas fa-check-circle"></i> International Arbitration</li>
                        <li><i class="fas fa-check-circle"></i> Complex Dispute Resolution</li>
                        <li><i class="fas fa-check-circle"></i> Securities Litigation</li>
                        <li><i class="fas fa-check-circle"></i> White-Collar Criminal Defense</li>
                        <li><i class="fas fa-check-circle"></i> Regulatory Investigations</li>
                    </ul>
                </div>

                <div class="attorney-experience">
                    <h3>Experience Highlights</h3>
                    <ul class="experience-list">
                        <li>Successfully defended multinational corporation in $1.8 billion international arbitration</li>
                        <li>Lead counsel in landmark securities fraud litigation resulting in favorable settlement</li>
                        <li>Represented major financial institution in regulatory investigation with no penalties imposed</li>
                        <li>Named "Top 100 Trial Lawyers" by National Trial Lawyers Association for 5 consecutive years</li>
                    </ul>
                </div>

                <div class="education-section">
                    <h3>Education</h3>
                    <ul>
                        <li><strong>J.D., honors</strong> - Columbia Law School</li>
                        <li><strong>L.L.M., International Law</strong> - King's College London</li>
                        <li><strong>B.A., International Relations, cum laude</strong> - Georgetown University</li>
                    </ul>
                </div>

                <div class="memberships-section">
                    <h3>Professional Memberships</h3>
                    <ul>
                        <li>American Bar Association, Litigation Section</li>
                        <li>International Association of Defense Counsel</li>
                        <li>Chartered Institute of Arbitrators (Fellow)</li>
                    </ul>
                </div>
            </div>
        `,
        languages: ["English", "Ukrainian", "Russian", "Polish"],
        phone: "(555) 234-5678",
        email: "viktor.surnyk@prestigelaw.com",
        linkedin: "https://linkedin.com/in/viktor-surnyk"
    },
    sarah_johnson: {
        name: "Sarah Johnson",
        position: "Senior Associate",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80",
        content: `
            <div class="attorney-profile">
                <h2>About Sarah</h2>
                <p>Sarah Johnson is a Senior Associate at Prestige Law Partners specializing in intellectual property and technology law. With her unique background in computer science and law, she provides cutting-edge legal counsel to technology companies, startups, and creative professionals navigating the complex intersection of law and innovation.</p>
                
                <div class="expertise-areas">
                    <h3>Areas of Expertise</h3>
                    <ul class="expertise-list">
                        <li><i class="fas fa-check-circle"></i> Intellectual Property Protection & Enforcement</li>
                        <li><i class="fas fa-check-circle"></i> Technology Transactions & Licensing</li>
                        <li><i class="fas fa-check-circle"></i> Privacy & Data Security</li>
                        <li><i class="fas fa-check-circle"></i> Trademark & Copyright Law</li>
                        <li><i class="fas fa-check-circle"></i> Software & AI Legal Issues</li>
                        <li><i class="fas fa-check-circle"></i> Entertainment & Media Law</li>
                    </ul>
                </div>

                <div class="attorney-experience">
                    <h3>Experience Highlights</h3>
                    <ul class="experience-list">
                        <li>Secured worldwide IP protection for breakthrough medical device technology</li>
                        <li>Negotiated complex technology licensing agreements for major software companies</li>
                        <li>Advised Silicon Valley startups on comprehensive IP strategy and protection</li>
                        <li>Developed data privacy compliance programs for multinational technology firms</li>
                    </ul>
                </div>

                <div class="education-section">
                    <h3>Education</h3>
                    <ul>
                        <li><strong>J.D., Technology Law concentration</strong> - Stanford Law School</li>
                        <li><strong>B.S., Computer Science, high honors</strong> - Massachusetts Institute of Technology (MIT)</li>
                        <li><strong>Certificate in Intellectual Property Law</strong> - Berkeley Law</li>
                    </ul>
                </div>

                <div class="publications-section">
                    <h3>Selected Publications</h3>
                    <ul>
                        <li>"The Future of AI Regulation: Legal Frameworks in an Algorithmic World" - Harvard Technology Review</li>
                        <li>"Intellectual Property Protection in the Age of Rapid Innovation" - Stanford Law & Technology Journal</li>
                        <li>Co-author, "Blockchain and Smart Contracts: Legal Implications" - Oxford University Press</li>
                    </ul>
                </div>
            </div>
        `,
        languages: ["English", "German", "Japanese"],
        phone: "(555) 345-6789",
        email: "sarah.johnson@prestigelaw.com",
        linkedin: "https://linkedin.com/in/sarah-johnson"
    },
    david_chen: {
        name: "David Chen",
        position: "Associate",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80",
        content: `
            <div class="attorney-profile">
                <h2>About David</h2>
                <p>David Chen is an Associate at Chester Law specializing in intellectual property and technology law. He brings a unique combination of technical knowledge and legal expertise to help clients protect their innovations.</p>
                
                <div class="expertise-areas">
                    <h3>Areas of Expertise</h3>
                    <ul>
                        <li>Intellectual Property</li>
                        <li>Technology Law</li>
                        <li>Patent Litigation</li>
                        <li>Licensing</li>
                    </ul>
                </div>

                <div class="education-section">
                    <h3>Education</h3>
                    <ul>
                        <li>J.D., UC Berkeley School of Law</li>
                        <li>B.S., MIT (Computer Science)</li>
                    </ul>
                </div>

                <div class="contact-info">
                    <h3>Contact Information</h3>
                    <p><i class="fas fa-phone"></i> (555) 123-4570</p>
                    <p><i class="fas fa-envelope"></i> david.chen@chesterlaw.com</p>
                </div>
            </div>
        `,
        languages: ["English", "Mandarin", "Cantonese"],
        phone: "(555) 123-4570",
        email: "david.chen@chesterlaw.com",
        linkedin: "https://linkedin.com/in/david-chen"
    }
};

// Initialize team member functionality
document.addEventListener('DOMContentLoaded', function() {
    const memberLinks = document.querySelectorAll('.team-view-profile');
    const teamOverview = document.getElementById('team-overview');
    const teamDetail = document.getElementById('team-detail');
    const backToTeam = document.querySelector('.back-to-team');

    // Check URL parameters for direct access to team member
    function checkURLParameters() {
        const urlParams = new URLSearchParams(window.location.search);
        const memberId = urlParams.get('member');
        if (memberId && teamMembers[memberId]) {
            loadTeamMember(memberId);
        }
    }

    // Load team member profile
    function loadTeamMember(memberId) {
        const member = teamMembers[memberId];
        if (!member) return;

        // Update URL
        const newUrl = window.location.pathname + '?member=' + memberId;
        window.history.pushState({ memberId }, '', newUrl);

        // Update breadcrumb
        document.getElementById('member-breadcrumb-name').textContent = member.name;

        // Update hero section
        document.getElementById('member-image').src = member.image;
        document.getElementById('member-image').alt = member.name;
        document.getElementById('member-name').textContent = member.name;
        document.getElementById('member-position').textContent = member.position;

        // Update main content
        document.getElementById('member-content').innerHTML = member.content;

        // Update contact info
        document.getElementById('member-phone').innerHTML = `<i class="fas fa-phone"></i> ${member.phone}`;
        document.getElementById('member-email').innerHTML = `<i class="fas fa-envelope"></i> ${member.email}`;
        document.getElementById('member-linkedin').href = member.linkedin;

        // Update languages
        const languagesHtml = member.languages.map(lang => `<span class="language-tag">${lang}</span>`).join('');
        document.getElementById('member-languages').innerHTML = languagesHtml;

        // Show detail section
        teamOverview.classList.remove('active');
        teamDetail.classList.add('active');
    }

    // Event listeners
    memberLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const memberId = this.getAttribute('data-member');
            loadTeamMember(memberId);
        });
    });

    backToTeam.addEventListener('click', function(e) {
        e.preventDefault();
        teamDetail.classList.remove('active');
        teamOverview.classList.add('active');
        window.history.pushState({}, '', window.location.pathname);
    });

    // Handle browser back/forward
    window.addEventListener('popstate', function(e) {
        if (e.state && e.state.memberId) {
            loadTeamMember(e.state.memberId);
        } else {
            teamDetail.classList.remove('active');
            teamOverview.classList.add('active');
        }
    });

    // Check URL parameters on load
    checkURLParameters();
});
