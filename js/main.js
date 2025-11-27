// ====================================
// Porch Light Mail - Enhanced JavaScript
// ====================================

// Categories Data
const categories = [
    { name: "Roofing", available: true },
    { name: "HVAC", available: true },
    { name: "Plumbing", available: true },
    { name: "Electrical", available: false },
    { name: "Landscaping/Lawn Care", available: true },
    { name: "Chiropractor", available: false },
    { name: "Dentist", available: true },
    { name: "House Cleaning", available: true },
    { name: "Window Cleaning", available: true },
    { name: "Real Estate", available: false },
    { name: "Insurance", available: true },
    { name: "Auto Repair", available: true },
    { name: "Pet Services", available: true },
    { name: "Restaurant/Cafe", available: false },
    { name: "Gym/Fitness", available: true },
    { name: "Home Remodeling", available: true }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize categories
    populateCategories();
    populateCategoryDropdown();

    // Initialize smooth scrolling
    initSmoothScroll();

    // Initialize form handling
    initFormHandling();

    // Initialize number counting animations
    initNumberCounters();

    // Initialize scroll animations
    initScrollAnimations();

    // Initialize mobile menu
    initMobileMenu();
});

// Populate Categories Grid
function populateCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');

    if (!categoriesGrid) return;

    // Sort categories: available first, then taken
    const sortedCategories = [...categories].sort((a, b) => {
        if (a.available === b.available) return 0;
        return a.available ? -1 : 1;
    });

    sortedCategories.forEach(category => {
        const categoryItem = document.createElement('div');
        categoryItem.className = 'category-item';

        const categoryName = document.createElement('span');
        categoryName.className = 'category-name';
        categoryName.textContent = category.name;

        const categoryBadge = document.createElement('span');
        categoryBadge.className = `category-badge ${category.available ? 'badge-available' : 'badge-taken'}`;
        categoryBadge.textContent = category.available ? 'Available' : 'Taken';

        categoryItem.appendChild(categoryName);
        categoryItem.appendChild(categoryBadge);

        categoriesGrid.appendChild(categoryItem);
    });
}

// Populate Category Dropdown in Form
function populateCategoryDropdown() {
    const categorySelect = document.getElementById('category');

    if (!categorySelect) return;

    // Add available categories to dropdown
    const availableCategories = categories.filter(cat => cat.available);

    availableCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.name;
        option.textContent = category.name;
        categorySelect.appendChild(option);
    });

    // Add a separator and show taken categories as disabled
    const takenCategories = categories.filter(cat => !cat.available);

    if (takenCategories.length > 0) {
        const separator = document.createElement('option');
        separator.disabled = true;
        separator.textContent = '--- Already Taken ---';
        categorySelect.appendChild(separator);

        takenCategories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.name;
            option.textContent = `${category.name} (Taken)`;
            option.disabled = true;
            categorySelect.appendChild(option);
        });
    }
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Don't prevent default if it's just "#"
            if (href === '#') return;

            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Number Counter Animation
function animateCounter(element, start, end, duration) {
    let startTime = null;
    const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (end - start) * easeOutQuart);

        element.textContent = current.toLocaleString();

        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            element.textContent = end.toLocaleString();
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize Number Counters with Intersection Observer
function initNumberCounters() {
    const numberElements = document.querySelectorAll('[data-count]');

    if (!numberElements.length) return;

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const target = entry.target;
                const finalValue = parseInt(target.getAttribute('data-count'));

                // Mark as counted so we don't animate again
                target.classList.add('counted');

                // Animate from 0 to final value over 2 seconds
                animateCounter(target, 0, finalValue, 2000);

                // Stop observing this element
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    numberElements.forEach(element => {
        observer.observe(element);
    });
}

// Form Handling
function initFormHandling() {
    const form = document.getElementById('signupForm');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            businessName: document.getElementById('businessName').value,
            contactName: document.getElementById('contactName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            category: document.getElementById('category').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };

        // Validate form
        if (!validateForm(formData)) {
            return;
        }

        // Process form submission
        handleFormSubmission(formData);
    });
}

// Validate Form
function validateForm(formData) {
    // Check required fields
    if (!formData.businessName || !formData.contactName || !formData.email || !formData.phone || !formData.category) {
        alert('Please fill in all required fields.');
        return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate phone format (basic)
    const phoneRegex = /^[\d\s\-\(\)]+$/;
    if (!phoneRegex.test(formData.phone)) {
        alert('Please enter a valid phone number.');
        return false;
    }

    return true;
}

// Handle Form Submission
async function handleFormSubmission(formData) {
    const webhookUrl = 'https://flows.nwaboost.com/webhook-test/b863f11b-63f7-4cf3-8e8e-643bb54d6b6a';

    console.log('Form Submission:', formData);

    // Store in localStorage as a backup
    try {
        const existingSubmissions = JSON.parse(localStorage.getItem('porchLightSubmissions') || '[]');
        existingSubmissions.push(formData);
        localStorage.setItem('porchLightSubmissions', JSON.stringify(existingSubmissions));
    } catch (error) {
        console.error('Error storing form data:', error);
    }

    // Send data to webhook
    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error(`Webhook request failed: ${response.status}`);
        }

        console.log('Webhook call successful');
    } catch (error) {
        console.error('Error sending to webhook:', error);
        // Continue to show success message even if webhook fails
    }

    // Hide form and show success message with animation
    const formElement = document.getElementById('signupForm');
    const successElement = document.getElementById('formSuccess');

    formElement.style.opacity = '0';
    formElement.style.transform = 'translateY(-20px)';
    formElement.style.transition = 'all 0.5s ease-out';

    setTimeout(() => {
        formElement.style.display = 'none';
        successElement.style.display = 'block';
        successElement.style.opacity = '0';
        successElement.style.transform = 'translateY(20px)';

        // Trigger reflow
        successElement.offsetHeight;

        successElement.style.transition = 'all 0.5s ease-out';
        successElement.style.opacity = '1';
        successElement.style.transform = 'translateY(0)';

        // Scroll to success message
        setTimeout(() => {
            successElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }, 500);
}

// Create mailto link (optional fallback for form submission)
function createMailtoLink(formData) {
    const subject = encodeURIComponent(`New Porch Light Mail Reservation: ${formData.category}`);
    const body = encodeURIComponent(`
Business Name: ${formData.businessName}
Contact Name: ${formData.contactName}
Email: ${formData.email}
Phone: ${formData.phone}
Desired Category: ${formData.category}
Message: ${formData.message || 'N/A'}

Submitted: ${new Date(formData.timestamp).toLocaleString()}
    `.trim());

    return `mailto:hello@porchlightmail.com?subject=${subject}&body=${body}`;
}

// Scroll Animations (Intersection Observer)
function initScrollAnimations() {
    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
        return;
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections
    const animatedElements = document.querySelectorAll('.problem-card, .solution-card, .step-card, .gallery-item, .category-item');

    animatedElements.forEach((element, index) => {
        // Add staggered delay
        element.style.animationDelay = `${index * 0.1}s`;
        observer.observe(element);
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (!hamburger || !navLinks) return;

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a nav link
    const navLinkElements = navLinks.querySelectorAll('.nav-link, .btn');
    navLinkElements.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// Utility: Format Phone Number (optional enhancement)
function formatPhoneNumber(input) {
    // Remove all non-numeric characters
    const phoneNumber = input.replace(/\D/g, '');

    // Format as (XXX) XXX-XXXX if it's a 10-digit US number
    if (phoneNumber.length === 10) {
        return `(${phoneNumber.substring(0, 3)}) ${phoneNumber.substring(3, 6)}-${phoneNumber.substring(6)}`;
    }

    return input;
}

// Add phone formatting on blur
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');

    if (phoneInput) {
        phoneInput.addEventListener('blur', function() {
            this.value = formatPhoneNumber(this.value);
        });
    }
});

// Parallax Effect on Hero (subtle)
window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.3;

    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${rate}px)`;
    }
});

// ====================================
// Integration Helper for FormSubmit/Formspree
// ====================================

/*
To integrate with FormSubmit.co or Formspree:

1. FormSubmit.co (Free, no registration needed):
   - Change form action to: https://formsubmit.co/your@email.com
   - Remove preventDefault() from form submit handler
   - Or keep current JS and use fetch API:

   async function handleFormSubmission(formData) {
       const response = await fetch('https://formsubmit.co/ajax/your@email.com', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(formData)
       });

       if (response.ok) {
           // Show success message
       }
   }

2. Formspree.io (Free tier available):
   - Sign up and get a form endpoint
   - Update form action or use fetch API similar to above
   - endpoint: https://formspree.io/f/YOUR_FORM_ID

3. Netlify Forms (if hosting on Netlify):
   - Add netlify attribute to form tag
   - Add hidden input: <input type="hidden" name="form-name" value="signup" />
   - Netlify will handle submissions automatically
*/

// ====================================
// Export functions for testing (optional)
// ====================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        categories,
        validateForm,
        formatPhoneNumber,
        animateCounter
    };
}
