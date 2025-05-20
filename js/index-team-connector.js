// This file connects the team section in index.html to the expert profile pages

document.addEventListener("DOMContentLoaded", () => {
  // Find the team section in the index page
  const teamSection = document.querySelector("#team")

  if (teamSection) {
    // Find all team member elements
    const teamMembers = teamSection.querySelectorAll(".team-member")

    // Add click event listeners to each team member
    teamMembers.forEach((member) => {
      member.addEventListener("click", function (e) {
        e.preventDefault()

        // Get the expert ID from the data attribute
        const expertId = this.getAttribute("data-expert-id")

        if (expertId) {
          // Navigate to the expert profile page with the expert ID
          window.location.href = `expert-profile.html?id=${expertId}`
        }
      })
    })

    // Find the "View Full Team" button if it exists
    const viewFullTeamBtn = teamSection.querySelector(".view-full-team")

    if (viewFullTeamBtn) {
      // Add click event listener to the "View Full Team" button
      viewFullTeamBtn.addEventListener("click", (e) => {
        e.preventDefault()

        // Create an array of all expert IDs
        const expertIds = ["viktor", "vitaliy", "olga", "pavlo", "maksym", "oleksandr"]

        // Randomly select an expert ID
        const randomExpertId = expertIds[Math.floor(Math.random() * expertIds.length)]

        // Navigate to the expert profile page with the random expert ID
        window.location.href = `expert-profile.html?id=${randomExpertId}`
      })
    }
  }
})
