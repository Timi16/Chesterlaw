document.addEventListener("DOMContentLoaded", () => {
  // Custom cursor
  const cursor = document.querySelector(".cursor")
  const cursorFollower = document.querySelector(".cursor-follower")

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"

    setTimeout(() => {
      cursorFollower.style.left = e.clientX + "px"
      cursorFollower.style.top = e.clientY + "px"
    }, 100)
  })

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const mobileMenu = document.querySelector(".mobile-menu")

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active")
      mobileMenu.classList.toggle("active")
      document.body.classList.toggle("menu-open")
    })
  }

  // Animate elements on scroll
  const animateElements = document.querySelectorAll(".animate-in")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1
          entry.target.style.transform = "translateY(0)"
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
    },
  )

  animateElements.forEach((element) => {
    observer.observe(element)
  })

  // Search and filter functionality
  const searchInput = document.getElementById("search-input")
  const practiceFilter = document.getElementById("practice-filter")
  const teamCards = document.querySelectorAll(".team-card")

  // Search functionality
  if (searchInput) {
    searchInput.addEventListener("input", filterTeam)
  }

  // Filter functionality
  if (practiceFilter) {
    practiceFilter.addEventListener("change", filterTeam)
  }

  function filterTeam() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : ""
    const filterValue = practiceFilter ? practiceFilter.value.toLowerCase() : ""

    teamCards.forEach((card) => {
      const specialty = card.querySelector(".team-specialty").textContent.toLowerCase()
      const name = card.querySelector("h3").textContent.toLowerCase()
      const position = card.querySelector(".team-position").textContent.toLowerCase()
      const expertise = card.getAttribute("data-expertise").toLowerCase()

      const matchesSearch =
        searchTerm === "" ||
        specialty.includes(searchTerm) ||
        name.includes(searchTerm) ||
        position.includes(searchTerm)

      const matchesFilter = filterValue === "" || expertise.includes(filterValue)

      if (matchesSearch && matchesFilter) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    })
  }

  // Add staggered animation to team cards
  teamCards.forEach((card, index) => {
    card.style.transitionDelay = `${0.1 * index}s`
  })

  // Add transition effects to team card links
  teamCards.forEach((card) => {
    card.addEventListener("click", function (e) {
      e.preventDefault()

      const href = this.getAttribute("href")

      // Create transition effect
      const overlay = document.createElement("div")
      overlay.className = "spectacular-transition-overlay"
      document.body.appendChild(overlay)

      // Create bars for transition
      for (let i = 0; i < 10; i++) {
        const bar = document.createElement("div")
        bar.className = "spectacular-transition-bar"
        bar.style.top = `${i * 10}vh`
        overlay.appendChild(bar)
      }

      // Add law symbol
      const lawSymbol = document.createElement("div")
      lawSymbol.className = "law-symbol"
      lawSymbol.innerHTML = '<i class="fas fa-balance-scale"></i>'
      overlay.appendChild(lawSymbol)

      // Add particles
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement("div")
        particle.className = "transition-particle"
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`
        particle.style.animationDelay = `${Math.random() * 0.5}s`
        overlay.appendChild(particle)
      }

      setTimeout(() => {
        overlay.classList.add("active")
        lawSymbol.classList.add("active")

        setTimeout(() => {
          window.location.href = href
        }, 800)
      }, 50)
    })
  })
})
