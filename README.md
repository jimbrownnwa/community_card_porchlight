# Porch Light Mail - Landing Page

A modern, conversion-focused landing page for Porch Light Mail, a direct mail business specializing in exclusive co-op postcards for local businesses in Northwest Arkansas.

## Overview

**Porch Light Mail** sends large (12" x 6.5"), full-color, glossy postcards to 2,500 high-quality homes in Northwest Arkansas. Each postcard features 16 local businesses, with only one business per category—ensuring exclusive positioning.

**Key Value Proposition**: Be "the one they call" when homeowners need your service. Your business gets refrigerator real estate in 2,500 homes for just $150.

## Features

- **Modern, Responsive Design**: Mobile-first design that works on all devices
- **Clear Value Proposition**: Emphasizes exclusivity and scarcity
- **Category Availability Display**: Shows which categories are available vs. taken
- **Business Signup Form**: Capture leads with validation and success messaging
- **Smooth Scrolling**: Professional navigation experience
- **No Dependencies**: Pure HTML/CSS/JavaScript—fast loading, easy hosting

## Tech Stack

- **HTML5** - Semantic, accessible markup
- **CSS3** - Modern styling with CSS Variables, Grid, and Flexbox
- **Vanilla JavaScript** - Form handling, smooth scroll, animations
- **No Build Tools** - Deploy anywhere instantly

## Brand Identity

### Color Palette
- **Primary**: Warm amber/gold (#F59E0B) - evokes porch light glow
- **Secondary**: Deep navy (#1E293B) - professional and trustworthy
- **Accent**: Coral/orange (#FB923C) - calls to action
- **Success**: Green (#10B981) - available categories
- **Danger**: Red (#EF4444) - taken categories

### Typography
- **Font**: Inter (loaded from Google Fonts)
- Professional, modern, highly readable

## Project Structure

```
porch-light-mail/
├── index.html              # Main landing page
├── css/
│   └── styles.css          # Complete styling
├── js/
│   └── main.js            # Interactivity & form handling
├── images/
│   └── README.md          # Image requirements documentation
├── reference/
│   └── story.md           # Brand messaging & positioning
└── README.md              # This file
```

## Getting Started

### Local Development

1. **Clone or download this repository**

2. **Open in browser**:
   - Simply open `index.html` in any modern browser
   - Or use a local server (recommended):
     ```bash
     # Python 3
     python -m http.server 8000

     # Node.js (using npx)
     npx http-server

     # VS Code Live Server extension
     # Right-click index.html → "Open with Live Server"
     ```

3. **View in browser**: Navigate to `http://localhost:8000`

### Customization

#### Update Categories
Edit the `categories` array in `js/main.js`:

```javascript
const categories = [
    { name: "Roofing", available: true },
    { name: "HVAC", available: false },
    // Add or modify categories here
];
```

#### Update Contact Information
Edit footer section in `index.html`:

```html
<p>Email: <a href="mailto:your@email.com">your@email.com</a></p>
<p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
```

#### Add Real Images
See `images/README.md` for detailed requirements. Replace placeholder divs with:

```html
<img src="images/your-image.jpg" alt="Description">
```

## Form Integration

The form currently stores data in localStorage (demo mode). For production, integrate with:

### Option 1: FormSubmit.co (Easiest, Free)

```javascript
// In handleFormSubmission() function in main.js
async function handleFormSubmission(formData) {
    const response = await fetch('https://formsubmit.co/ajax/your@email.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });

    if (response.ok) {
        // Show success message (existing code)
    }
}
```

### Option 2: Formspree.io

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your endpoint
3. Update the form action or use fetch API (similar to FormSubmit)

### Option 3: Netlify Forms

If hosting on Netlify, add to `<form>` tag:

```html
<form id="signupForm" class="signup-form" netlify>
    <input type="hidden" name="form-name" value="signup" />
    <!-- rest of form -->
</form>
```

## Deployment

### Netlify (Recommended)

1. Push code to GitHub
2. Connect repository to Netlify
3. Deploy (automatic)
4. Configure custom domain

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts

### Traditional Hosting

Upload all files via FTP to any web host. The site is 100% static.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lighthouse Score Target**: 90+ across all metrics
- **Load Time**: < 2 seconds on 3G
- **File Sizes**:
  - HTML: ~15KB
  - CSS: ~12KB
  - JS: ~5KB
  - Images: Optimize to < 200KB each

## SEO Checklist

- [x] Semantic HTML
- [x] Meta descriptions
- [x] Open Graph tags
- [ ] Add favicon
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Set up Google Analytics
- [ ] Add schema.org structured data (Local Business)

## Next Steps

1. **Add Real Images**
   - Professional postcard photos
   - Lifestyle shots
   - Logo design

2. **Set Up Form Backend**
   - Choose and integrate form service
   - Test form submissions

3. **Register Domain**
   - Suggestions: porchlightmail.com, porchlightmail.co

4. **Analytics & Tracking**
   - Google Analytics or Plausible
   - Conversion tracking

5. **A/B Testing** (Future)
   - Test different headlines
   - Test different CTAs
   - Track conversion rates

## Content Strategy

The page follows a strategic narrative based on `reference/story.md`:

1. **Hero**: Lead with transformation ("Be the One They Call")
2. **Problem**: Establish pain points (expensive, forgettable, cluttered)
3. **Solution**: Present alternative (big, curated, precise, exclusive)
4. **Exclusivity**: Drive urgency (one per category)
5. **Proof**: Show the product (gallery)
6. **Scarcity**: Display availability (categories grid)
7. **Math**: Make ROI simple (just 1 customer = profit)
8. **How**: Remove friction (3 easy steps)
9. **Action**: Capture lead (signup form)

## Support

For questions or issues:
- Email: [Your email]
- Reference the original positioning document in `reference/story.md`

## License

All rights reserved. © 2025 Porch Light Mail

---

**Tagline**: *Locally Famous in 2,500 Homes. One Category at a Time.*
