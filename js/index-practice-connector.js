document.addEventListener("DOMContentLoaded", () => {
  // Find all practice area links in the index page
  const practiceLinks = document.querySelectorAll(".practice-area-link")

  // Add click event listeners to each practice area link
  practiceLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Get the practice area ID from the data attribute
      const practiceId = link.dataset.practice

      // If there's a practice ID, redirect to the practice area page with the appropriate parameter
      if (practiceId) {
        e.preventDefault()
        window.location.href = `practice-area.html?practice=${practiceId}`
      }
    })
  })

  // Connect expertise tab buttons to practice area page
  const tabButtons = document.querySelectorAll(".tab-button")
  const learnMoreButtons = document.querySelectorAll(".tab-text .btn-secondary")

  // Map tab IDs to practice area IDs
  const practiceAreaMap = {
    corporate: "corporate",
    litigation: "litigation",
    bankruptcy: "bankruptcy",
    intellectual: "ip",
  }

  // Add click event to all "Learn More" buttons in the expertise tabs
  learnMoreButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      const activeTab = document.querySelector(".tab-pane.active")
      const practiceId = activeTab.id
      const mappedPractice = practiceAreaMap[practiceId] || practiceId

      // Create transition effect before navigation
      createPageTransition(() => {
        window.location.href = `practice-area.html?practice=${mappedPractice}`
      })
    })
  })

  // Update practice area links in the footer
  const practiceAreaLinks = document.querySelectorAll(".footer-nav-column:nth-child(2) ul li a")

  practiceAreaLinks.forEach((link, index) => {
    // Skip the "View All Practices" link (last one)
    if (index < practiceAreaLinks.length - 1) {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const practiceTypes = ["corporate", "litigation", "bankruptcy", "ip"]
        const practiceId = practiceTypes[index] || "corporate"

        // Create transition effect before navigation
        createPageTransition(() => {
          window.location.href = `practice-area.html?practice=${practiceId}`
        })
      })
    } else {
      // "View All Practices" link
      link.addEventListener("click", (e) => {
        e.preventDefault()

        // Create transition effect before navigation
        createPageTransition(() => {
          window.location.href = "practice-area.html"
        })
      })
    }
  })

  // Create page transition effect
  function createPageTransition(callback) {
    // Create overlay for transition
    const overlay = document.createElement("div")
    overlay.className = "page-transition-overlay"
    document.body.appendChild(overlay)

    // Create animated elements inside overlay
    for (let i = 0; i < 5; i++) {
      const bar = document.createElement("div")
      bar.className = "transition-bar"
      overlay.appendChild(bar)
    }

    // Animate the overlay
    setTimeout(() => {
      overlay.classList.add("active")

      // Execute callback after animation completes
      setTimeout(() => {
        if (callback) callback()
      }, 800)
    }, 50)
  }
})
