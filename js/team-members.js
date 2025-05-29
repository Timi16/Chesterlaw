// Team members data
const teamMembers = {
    victoria_reynolds: {
        name: "Victoria Reynolds",
        position: "Managing Partner",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80",
        content: `
            <div class="attorney-profile">
                <h2>About Victoria</h2>
                <p>Victoria Reynolds is a Managing Partner at Chester Law, specializing in corporate law and international business transactions. With over 15 years of experience, she has established herself as a trusted advisor to multinational corporations and emerging businesses alike.</p>
                
                <div class="expertise-areas">
                    <h3>Areas of Expertise</h3>
                    <ul>
                        <li>Corporate Law</li>
                        <li>Mergers & Acquisitions</li>
                        <li>International Business Law</li>
                        <li>Securities Regulation</li>
                    </ul>
                </div>

                <div class="education-section">
                    <h3>Education</h3>
                    <ul>
                        <li>J.D., Harvard Law School</li>
                        <li>B.A., Yale University (magna cum laude)</li>
                    </ul>
                </div>

                <div class="contact-info">
                    <h3>Contact Information</h3>
                    <p><i class="fas fa-phone"></i> (555) 123-4567</p>
                    <p><i class="fas fa-envelope"></i> victoria.reynolds@chesterlaw.com</p>
                </div>
            </div>
        `,
        languages: ["English", "French", "Spanish"],
        phone: "(555) 123-4567",
        email: "victoria.reynolds@chesterlaw.com",
        linkedin: "https://linkedin.com/in/victoria-reynolds"
    },
    viktor_surnyk: {
        name: "Viktor Surnyk",
        position: "Managing Partner",
        image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80",
        content: `
            <div class="attorney-profile">
                <h2>About Viktor</h2>
                <p>Viktor Surnyk is a Managing Partner at Chester Law with extensive experience in litigation and dispute resolution. He has successfully represented clients in complex commercial disputes across multiple jurisdictions.</p>
                
                <div class="expertise-areas">
                    <h3>Areas of Expertise</h3>
                    <ul>
                        <li>Commercial Litigation</li>
                        <li>International Arbitration</li>
                        <li>Dispute Resolution</li>
                        <li>Corporate Law</li>
                    </ul>
                </div>

                <div class="education-section">
                    <h3>Education</h3>
                    <ul>
                        <li>J.D., Stanford Law School</li>
                        <li>B.A., University of California, Berkeley</li>
                    </ul>
                </div>

                <div class="contact-info">
                    <h3>Contact Information</h3>
                    <p><i class="fas fa-phone"></i> (555) 123-4568</p>
                    <p><i class="fas fa-envelope"></i> viktor.surnyk@chesterlaw.com</p>
                </div>
            </div>
        `,
        languages: ["English", "Ukrainian", "Russian"],
        phone: "(555) 123-4568",
        email: "viktor.surnyk@chesterlaw.com",
        linkedin: "https://linkedin.com/in/viktor-surnyk"
    },
    sarah_johnson: {
        name: "Sarah Johnson",
        position: "Senior Associate",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80",
        content: `
            <div class="attorney-profile">
                <h2>About Sarah</h2>
                <p>Sarah Johnson is a Senior Associate at Chester Law, focusing on employment law and labor relations. She has helped numerous clients navigate complex employment issues and workplace disputes.</p>
                
                <div class="expertise-areas">
                    <h3>Areas of Expertise</h3>
                    <ul>
                        <li>Employment Law</li>
                        <li>Labor Relations</li>
                        <li>Workplace Discrimination</li>
                        <li>Employment Contracts</li>
                    </ul>
                </div>

                <div class="education-section">
                    <h3>Education</h3>
                    <ul>
                        <li>J.D., Columbia Law School</li>
                        <li>B.A., Brown University</li>
                    </ul>
                </div>

                <div class="contact-info">
                    <h3>Contact Information</h3>
                    <p><i class="fas fa-phone"></i> (555) 123-4569</p>
                    <p><i class="fas fa-envelope"></i> sarah.johnson@chesterlaw.com</p>
                </div>
            </div>
        `,
        languages: ["English", "Mandarin"],
        phone: "(555) 123-4569",
        email: "sarah.johnson@chesterlaw.com",
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
