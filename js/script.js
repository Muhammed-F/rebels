// RRΞBΣLZ - Premium Streetwear Website JavaScript

// Sample Products Data
const products = [
  {
    id: "1",
    name: "Rebel Oversized Hoodie",
    price: 89.99,
    image: "/black-oversized-hoodie-streetwear.jpg",
    category: "hoodies",
  },
  {
    id: "2",
    name: "Urban Seal T-Shirt",
    price: 39.99,
    image: "/black-graphic-tee-streetwear.png",
    category: "t-shirts",
  },
  {
    id: "3",
    name: "Tactical Cargo Pants",
    price: 79.99,
    image: "/black-cargo-pants-streetwear.png",
    category: "pants",
  },
  {
    id: "4",
    name: "Defiance Zip Hoodie",
    price: 94.99,
    image: "/black-zip-hoodie-streetwear.jpg",
    category: "hoodies",
  },
  {
    id: "5",
    name: "Rebellion Logo Tee",
    price: 34.99,
    image: "/black-logo-t-shirt-streetwear.jpg",
    category: "t-shirts",
  },
  {
    id: "6",
    name: "Street Joggers",
    price: 69.99,
    image: "/black-jogger-pants-streetwear.jpg",
    category: "pants",
  },
]

// DOM Elements
const navbar = document.getElementById("navbar")
const menuToggle = document.getElementById("menuToggle")
const mobileMenu = document.getElementById("mobileMenu")
const productsGrid = document.getElementById("productsGrid")
const filterButtons = document.querySelectorAll(".filter-btn")
const contactForm = document.getElementById("contactForm")

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initNavbar()
  initMobileMenu()
  renderProducts("all")
  initProductFilters()
  initContactForm()
  setCurrentYear()
})

// Navbar Scroll Effect
function initNavbar() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })
}

// Mobile Menu Toggle
function initMobileMenu() {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
    const icon = menuToggle.querySelector("i")
    icon.classList.toggle("fa-bars")
    icon.classList.toggle("fa-times")
  })

  // Close mobile menu when clicking a link
  const mobileLinks = mobileMenu.querySelectorAll("a")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
      const icon = menuToggle.querySelector("i")
      icon.classList.add("fa-bars")
      icon.classList.remove("fa-times")
    })
  })
}

// Render Products
function renderProducts(category) {
  const filteredProducts = category === "all" ? products : products.filter((product) => product.category === category)

  productsGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <div class="product-card" data-category="${product.category}">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        </div>
    `,
    )
    .join("")
}

// Product Filters
function initProductFilters() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")

      // Filter products
      const filter = button.getAttribute("data-filter")
      renderProducts(filter)
    })
  })
}

// Contact Form Validation
function initContactForm() {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Clear previous errors
    clearErrors()

    // Get form values
    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const message = document.getElementById("message").value.trim()

    let isValid = true

    // Validate name
    if (name === "") {
      showError("nameError", "Name is required")
      isValid = false
    }

    // Validate email
    if (email === "") {
      showError("emailError", "Email is required")
      isValid = false
    } else if (!isValidEmail(email)) {
      showError("emailError", "Please enter a valid email")
      isValid = false
    }

    // Validate message
    if (message === "") {
      showError("messageError", "Message is required")
      isValid = false
    } else if (message.length < 10) {
      showError("messageError", "Message must be at least 10 characters")
      isValid = false
    }

    // If valid, submit (in a real app, this would send to a server)
    if (isValid) {
      alert("Thank you for your message! We'll get back to you soon.")
      contactForm.reset()
    }
  })
}

// Helper Functions
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId)
  errorElement.textContent = message
}

function clearErrors() {
  const errorElements = document.querySelectorAll(".error-message")
  errorElements.forEach((element) => {
    element.textContent = ""
  })
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function setCurrentYear() {
  const yearElement = document.getElementById("currentYear")
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear()
  }
}

// Smooth Scroll Function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

// Make scrollToSection available globally for onclick handlers
window.scrollToSection = scrollToSection
