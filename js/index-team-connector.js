// This file connects the team section in index.html to the expert profile pages

document.addEventListener("DOMContentLoaded", () => {
  // Find all team member cards in the index page
  const teamCards = document.querySelectorAll(".team-card")

  // Add click event listeners to each team card
  teamCards.forEach((card) => {
    card.addEventListener("click", function (e) {
      e.preventDefault()

      // Get the expert ID from the data attribute
      const expertId = this.getAttribute("data-expert-id")

      if (expertId) {
        // Create transition effect
        createTransitionEffect(() => {
          // Navigate to the expert profile page
          window.location.href = `expert-profile.html?id=${expertId}`
        })
      }
    })
  })

  // Function to create a transition effect
  function createTransitionEffect(callback) {
    // Create overlay element
    const overlay = document.createElement("div")
    overlay.style.position = "fixed"
    overlay.style.top = "0"
    overlay.style.left = "0"
    overlay.style.width = "100%"
    overlay.style.height = "100%"
    overlay.style.backgroundColor = "var(--primary)"
    overlay.style.zIndex = "9999"
    overlay.style.opacity = "0"
    overlay.style.transition = "opacity 0.3s ease"

    // Add overlay to the body
    document.body.appendChild(overlay)

    // Trigger transition
    setTimeout(() => {
      overlay.style.opacity = "1"

      // Execute callback after transition completes
      setTimeout(() => {
        if (callback) callback()
      }, 300)
    }, 10)
  }
})
