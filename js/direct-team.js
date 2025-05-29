// Direct team member profile functionality with aggressive display control
document.addEventListener('DOMContentLoaded', function() {
    console.log('Direct team script loaded!');
    
    // Get references to key elements
    const teamCards = document.querySelectorAll('.team-card');
    const teamOverviewSection = document.getElementById('team-overview');
    const teamDetailSection = document.getElementById('team-detail');
    
    // Apply immediate styles to important elements
    if (teamOverviewSection) {
        teamOverviewSection.classList.add('active');
        teamOverviewSection.style.display = 'block';
    }
    
    if (teamDetailSection) {
        teamDetailSection.style.display = 'none';
    }
    
    // Function to show a specific team member profile
    function showTeamMember(memberId) {
        console.log('SHOWING TEAM MEMBER:', memberId);
        
        // Get the member data
        const member = teamMembers[memberId];
        if (!member) {
            console.error('Member data not found for ID:', memberId);
            return;
        }
        
        // Update URL without refreshing page
        history.pushState({page: 'member', id: memberId}, '', `?member=${memberId}`);
        
        try {
            // Update member details in the DOM
            document.getElementById('member-breadcrumb-name').textContent = member.name;
            document.getElementById('member-image').src = member.image;
            document.getElementById('member-image').alt = member.name;
            document.getElementById('member-name').textContent = member.name;
            document.getElementById('member-position').textContent = member.position;
            document.getElementById('member-content').innerHTML = member.content;
            document.getElementById('member-phone').innerHTML = `<i class="fas fa-phone"></i> ${member.phone}`;
            document.getElementById('member-email').innerHTML = `<i class="fas fa-envelope"></i> ${member.email}`;
            document.getElementById('member-linkedin').href = member.linkedin;
            
            // Update languages section
            const languagesHtml = member.languages.map(lang => `<span class="language-tag">${lang}</span>`).join('');
            document.getElementById('member-languages').innerHTML = languagesHtml;
            
            console.log('Member data populated successfully');
        } catch (err) {
            console.error('Error updating DOM with member data:', err);
        }
        
        // IMPORTANT: Control visibility with multiple techniques
        document.body.classList.add('showing-member');
        
        // 1. Use classList
        teamOverviewSection.classList.remove('active');
        teamDetailSection.classList.add('active');
        
        // 2. Set inline styles directly
        teamOverviewSection.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important;';
        teamDetailSection.style.cssText = 'display: block !important; visibility: visible !important; opacity: 1 !important; z-index: 999 !important;';
        
        // 3. Scroll to top of page to ensure visibility
        window.scrollTo(0, 0);
        
        console.log('Display styles applied!');
    }
    
    // Function to show team overview
    function showTeamOverview() {
        console.log('SHOWING TEAM OVERVIEW');
        
        // Update URL
        history.pushState({page: 'overview'}, '', window.location.pathname);
        
        // Control visibility
        document.body.classList.remove('showing-member');
        
        // 1. Use classList
        teamDetailSection.classList.remove('active');
        teamOverviewSection.classList.add('active');
        
        // 2. Set inline styles directly
        teamDetailSection.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important;';
        teamOverviewSection.style.cssText = 'display: block !important; visibility: visible !important; opacity: 1 !important; z-index: 999 !important;';
        
        // 3. Scroll to top
        window.scrollTo(0, 0);
    }
    
    // Add click handlers to all team cards
    teamCards.forEach(card => {
        // Make cards look clickable
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const memberId = this.getAttribute('data-member');
            if (!memberId) {
                console.error('No member ID found on card');
                return;
            }
            
            console.log('Card clicked for member:', memberId);
            showTeamMember(memberId);
        });
    });
    
    // Add click handler to back button
    const backButton = document.querySelector('.back-to-team');
    if (backButton) {
        backButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Back button clicked');
            showTeamOverview();
        });
    }
    
    // Handle browser back/forward navigation
    window.addEventListener('popstate', function(e) {
        console.log('Popstate event:', e.state);
        
        if (e.state && e.state.page === 'member' && e.state.id) {
            showTeamMember(e.state.id);
        } else {
            showTeamOverview();
        }
    });
    
    // Check for member ID in URL on page load
    const urlParams = new URLSearchParams(window.location.search);
    const memberId = urlParams.get('member');
    
    if (memberId && teamMembers[memberId]) {
        console.log('Found member ID in URL:', memberId);
        setTimeout(() => {
            showTeamMember(memberId);
        }, 200); // Small delay to ensure DOM is ready
    } else {
        console.log('No member ID in URL, showing overview');
        showTeamOverview();
    }
});
