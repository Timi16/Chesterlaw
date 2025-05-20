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

        // Create spectacular transition effect before navigation
        createSpectacularTransition(() => {
          window.location.href = `practice-area.html?practice=${practiceId}`
        })
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

      // Create spectacular transition effect before navigation
      createSpectacularTransition(() => {
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

        // Create spectacular transition effect before navigation
        createSpectacularTransition(() => {
          window.location.href = `practice-area.html?practice=${practiceId}`
        })
      })
    } else {
      // "View All Practices" link
      link.addEventListener("click", (e) => {
        e.preventDefault()

        // Create spectacular transition effect before navigation
        createSpectacularTransition(() => {
          window.location.href = "practice-area.html"
        })
      })
    }
  })

  // Fix mobile navigation - ensure it works from any page including expertise section
  const mobileMenuToggle = document.querySelector(".menu-toggle")
  const mobileMenu = document.querySelector(".mobile-menu")
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-links li a")

  if (mobileMenuToggle && mobileMenu) {
    // Improved toggle functionality
    mobileMenuToggle.addEventListener("click", (e) => {
      e.stopPropagation() // Prevent event bubbling
      mobileMenuToggle.classList.toggle("active")
      mobileMenu.classList.toggle("active")

      if (mobileMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden" // Prevent scrolling when menu is open

        // Add dramatic entrance animation for each menu item
        document.querySelectorAll(".mobile-nav-links li").forEach((item, index) => {
          item.style.animation = `slideInRight 0.5s forwards ${0.1 * index}s`
          item.style.opacity = "0"
          setTimeout(() => {
            item.style.opacity = "1"
          }, 100 * index)
        })
      } else {
        document.body.style.overflow = "" // Restore scrolling when menu is closed
      }

      document.body.classList.toggle("menu-open")
    })

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (mobileMenu.classList.contains("active") && !mobileMenu.contains(e.target) && e.target !== mobileMenuToggle) {
        mobileMenuToggle.classList.remove("active")
        mobileMenu.classList.remove("active")
        document.body.classList.remove("menu-open")
        document.body.style.overflow = ""
      }
    })

    // Prevent clicks inside menu from closing it
    mobileMenu.addEventListener("click", (e) => {
      e.stopPropagation()
    })
  }

  // Enhanced mobile navigation links with proper handling
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href")

      // If it's an anchor link on the same page
      if (href.startsWith("#")) {
        e.preventDefault()

        // Close the mobile menu
        mobileMenuToggle.classList.remove("active")
        mobileMenu.classList.remove("active")
        document.body.classList.remove("menu-open")
        document.body.style.overflow = ""

        // Scroll to the section with animation
        const targetSection = document.querySelector(href)
        if (targetSection) {
          createMiniTransition(() => {
            targetSection.scrollIntoView({ behavior: "smooth" })
          })
        }
      } else if (href.includes("practice-area.html")) {
        e.preventDefault()

        // Close the mobile menu
        mobileMenuToggle.classList.remove("active")
        mobileMenu.classList.remove("active")
        document.body.classList.remove("menu-open")
        document.body.style.overflow = ""

        // Navigate with transition effect
        createSpectacularTransition(() => {
          window.location.href = href
        })
      }
    })
  })

  // Create spectacular page transition effect with advanced animations
  function createSpectacularTransition(callback) {
    // Create overlay for transition
    const overlay = document.createElement("div")
    overlay.className = "spectacular-transition-overlay"
    document.body.appendChild(overlay)

    // Create animated elements inside overlay
    for (let i = 0; i < 10; i++) {
      const bar = document.createElement("div")
      bar.className = "spectacular-transition-bar"
      bar.style.top = `${i * 10}vh`
      overlay.appendChild(bar)

      // Add floating particles for extra visual impact
      for (let j = 0; j < 5; j++) {
        const particle = document.createElement("div")
        particle.className = "transition-particle"
        particle.style.left = `${Math.random() * 100}%`
        particle.style.animationDelay = `${Math.random() * 0.5}s`
        particle.style.animationDuration = `${0.5 + Math.random() * 1}s`
        bar.appendChild(particle)
      }
    }

    // Add 3D rotating law scales symbol
    const symbol = document.createElement("div")
    symbol.className = "law-symbol"
    symbol.innerHTML = '<i class="fas fa-balance-scale"></i>'
    overlay.appendChild(symbol)

    // Animate the overlay with advanced timing
    setTimeout(() => {
      overlay.classList.add("active")
      symbol.classList.add("active")

      // Execute callback after animation completes
      setTimeout(() => {
        if (callback) callback()
      }, 1200)
    }, 50)
  }

  // Create mini transition for in-page navigation
  function createMiniTransition(callback) {
    const flash = document.createElement("div")
    flash.className = "navigation-flash"
    document.body.appendChild(flash)

    setTimeout(() => {
      flash.classList.add("active")
      setTimeout(() => {
        if (callback) callback()
        setTimeout(() => {
          document.body.removeChild(flash)
        }, 500)
      }, 300)
    }, 10)
  }
})
