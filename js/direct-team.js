// OVERLAY APPROACH: Using a completely separate overlay for team member profiles
document.addEventListener('DOMContentLoaded', function() {
    console.log('Overlay team script loaded!');
    
    // Get references to key elements
    const teamCards = document.querySelectorAll('.team-card');
    const teamOverviewSection = document.getElementById('team-overview');
    const teamMemberOverlay = document.getElementById('team-member-overlay');
    
    // Function to show a specific team member profile using the overlay
    function showTeamMember(memberId) {
        console.log('SHOWING TEAM MEMBER IN OVERLAY:', memberId);
        
        // Get the member data
        const member = teamMembers[memberId];
        if (!member) {
            console.error('Member data not found for ID:', memberId);
            return;
        }
        
        // Update URL without refreshing page
        history.pushState({page: 'member', id: memberId}, '', `?member=${memberId}`);
        
        try {
            // Update overlay content with member details
            document.getElementById('overlay-member-image').src = member.image;
            document.getElementById('overlay-member-image').alt = member.name;
            document.getElementById('overlay-member-name').textContent = member.name;
            document.getElementById('overlay-member-position').textContent = member.position;
            document.getElementById('overlay-member-content').innerHTML = member.content;
            document.getElementById('overlay-member-phone').innerHTML = `<i class="fas fa-phone"></i> ${member.phone}`;
            document.getElementById('overlay-member-email').innerHTML = `<i class="fas fa-envelope"></i> ${member.email}`;
            document.getElementById('overlay-member-linkedin').href = member.linkedin;
            
            // Update languages section
            const languagesHtml = member.languages.map(lang => 
                `<span style="display: inline-block; background: #f0f0f0; padding: 5px 10px; margin-right: 10px; margin-bottom: 10px; border-radius: 4px;">${lang}</span>`
            ).join('');
            document.getElementById('overlay-member-languages').innerHTML = languagesHtml;
            
            console.log('Overlay data populated successfully');
        } catch (err) {
            console.error('Error updating overlay with member data:', err);
        }
        
        // Show the overlay
        teamMemberOverlay.style.display = 'block';
        
        // Hide everything else
        document.body.style.overflow = 'hidden'; // Prevent scrolling the main page
        
        // Scroll overlay to top
        teamMemberOverlay.scrollTop = 0;
        window.scrollTo(0, 0);
        
        console.log('Team member overlay displayed!');
    }
    
    // Function to hide the overlay and show team overview
    function showTeamOverview() {
        console.log('HIDING OVERLAY AND SHOWING TEAM OVERVIEW');
        
        // Update URL
        history.pushState({page: 'overview'}, '', window.location.pathname);
        
        // Hide the overlay
        teamMemberOverlay.style.display = 'none';
        
        // Restore body scrolling
        document.body.style.overflow = '';
        
        // Ensure overview is visible
        teamOverviewSection.style.display = 'block';
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        console.log('Returned to team overview');
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
    
    // Add click handler to ALL back buttons (there might be multiple)
    const backButtons = document.querySelectorAll('.back-to-team');
    backButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Back button clicked');
            showTeamOverview();
        });
    });
    
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
        // Use a slightly longer delay to ensure DOM is fully ready
        setTimeout(() => {
            showTeamMember(memberId);
        }, 500);
    } else {
        console.log('No member ID in URL, showing overview');
        showTeamOverview();
    }
});
