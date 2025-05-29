class TeamManager {
    constructor() {
        this.teamOverview = document.getElementById('team-overview');
        this.teamDetail = document.getElementById('team-detail');
        this.memberLinks = document.querySelectorAll('.team-view-profile');
        this.backToTeam = document.querySelector('.back-to-team');
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.checkURLParameters();
        this.initializeAnimations();
    }

    bindEvents() {
        // Make entire team cards clickable
        const teamCards = document.querySelectorAll('.team-card');
        teamCards.forEach(card => {
            card.addEventListener('click', (e) => {
                const memberId = card.getAttribute('data-member');
                this.loadTeamMember(memberId);
            });
            // Make the card appear clickable with cursor
            card.style.cursor = 'pointer';
        });

        // Back button click
        if (this.backToTeam) {
            this.backToTeam.addEventListener('click', (e) => {
                e.preventDefault();
                this.showOverview();
            });
        }

        // Handle browser back/forward
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.memberId) {
                this.loadTeamMember(e.state.memberId);
            } else {
                this.showOverview();
            }
        });
    }

    checkURLParameters() {
        const urlParams = new URLSearchParams(window.location.search);
        const memberId = urlParams.get('member');
        if (memberId && teamMembers[memberId]) {
            this.loadTeamMember(memberId);
        }
    }

    loadTeamMember(memberId) {
        console.log('Loading team member:', memberId);
        const member = teamMembers[memberId];
        if (!member) {
            console.error('Member not found:', memberId);
            return;
        }
        
        console.log('Member data:', member);

        // Update URL
        history.pushState({ memberId }, '', `?member=${memberId}`);

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

        // Force display style directly
        this.teamOverview.style.display = 'none';
        this.teamDetail.style.display = 'block';
        
        // Also set classes for animation purposes
        this.teamOverview.classList.remove('active');
        this.teamDetail.classList.add('active');

        // Trigger animations
        this.triggerDetailAnimations();
    }

    showOverview() {
        console.log('Showing overview');
        // Force display style directly
        this.teamDetail.style.display = 'none';
        this.teamOverview.style.display = 'block';
        
        // Also set classes for animation purposes
        this.teamDetail.classList.remove('active');
        this.teamOverview.classList.add('active');
        history.pushState({}, '', window.location.pathname);
    }

    triggerDetailAnimations() {
        gsap.from('.member-hero', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out'
        });

        gsap.from('.member-profile', {
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: 0.2,
            ease: 'power2.out'
        });
    }

    initializeAnimations() {
        gsap.from('.team-card', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.team-grid',
                start: 'top 80%'
            }
        });
    }
}

// Initialize team functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new TeamManager();
});
