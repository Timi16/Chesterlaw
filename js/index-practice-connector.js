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
})
