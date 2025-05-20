document.addEventListener("DOMContentLoaded", () => {
  // Custom cursor
  const cursor = document.querySelector(".cursor")
  const cursorFollower = document.querySelector(".cursor-follower")

  if (cursor && cursorFollower) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"

      setTimeout(() => {
        cursorFollower.style.left = e.clientX + "px"
        cursorFollower.style.top = e.clientY + "px"
      }, 100)
    })

    // Add special cursor effects for links and buttons
    const links = document.querySelectorAll("a, button, .btn")

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-hover")
        cursorFollower.classList.add("cursor-hover")
      })

      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-hover")
        cursorFollower.classList.remove("cursor-hover")
      })
    })
  }

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const mobileMenu = document.querySelector(".mobile-menu")

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active")
      mobileMenu.classList.toggle("active")
      document.body.classList.toggle("menu-open")

      if (mobileMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden"

        // Animate mobile menu items
        const menuItems = document.querySelectorAll(".mobile-nav-links li")
        menuItems.forEach((item, index) => {
          item.style.animation = `slideInRight 0.5s forwards ${0.1 * index}s`
        })
      } else {
        document.body.style.overflow = ""
      }
    })
  }

  // Animate elements on scroll
  const animateElements = document.querySelectorAll(".animate-in")

  if (animateElements.length > 0) {
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
  }

  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])')

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        // Close mobile menu if open
        if (mobileMenu && mobileMenu.classList.contains("active")) {
          menuToggle.click()
        }

        // Create mini flash transition
        const flash = document.createElement("div")
        flash.className = "navigation-flash"
        document.body.appendChild(flash)

        setTimeout(() => {
          flash.classList.add("active")

          setTimeout(() => {
            // Scroll to target
            window.scrollTo({
              top: targetElement.offsetTop - 100,
              behavior: "smooth",
            })

            setTimeout(() => {
              document.body.removeChild(flash)
            }, 300)
          }, 300)
        }, 10)
      }
    })
  })
})
