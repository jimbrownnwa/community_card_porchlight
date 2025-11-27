# Image Assets Needed

This directory should contain the following images for the Porch Light Mail landing page:

## Required Images

### Logo
- **logo.svg** or **logo.png**
  - Transparent background preferred
  - Recommended size: 200x200px minimum
  - Should work well at small sizes (navbar)
  - Consider a porch light icon/illustration

### Hero Section
- **hero-postcard.jpg** or **hero-postcard.png**
  - High-quality photo of the actual 12" x 6.5" postcard
  - Show the full postcard with all 16 business spaces
  - Recommended size: 1200x800px minimum
  - Should demonstrate the size, quality, and glossy finish

### Gallery Section (3 images needed)
1. **postcard-front.jpg**
   - Full front view of the postcard
   - Show all 16 business advertisements
   - High resolution: 1600x1200px minimum

2. **postcard-detail.jpg**
   - Close-up shot showing print quality
   - Focus on 2-3 business spaces to show detail
   - Demonstrate the glossy, professional finish

3. **postcard-lifestyle.jpg**
   - Lifestyle shot: postcard on refrigerator with magnet
   - Or: on kitchen counter, in homeowner's hand
   - Shows the "refrigerator real estate" concept
   - Makes the use case tangible and relatable

## Optional Images

### Background Elements
- **nwa-landmark.jpg** - Northwest Arkansas scenic photo
  - Could be used in Location section
  - Bentonville square, Crystal Bridges, etc.

### Icons (if not using emoji)
- Can replace emoji icons with custom SVG icons
- Porch light icon
- Mailbox icon
- Home icon
- Checkmark icon

## Image Optimization Tips

1. **Compress images** before uploading
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: < 200KB for photos, < 50KB for graphics

2. **Use WebP format** with JPG/PNG fallbacks
   - Better compression, faster loading
   - Most modern browsers support it

3. **Provide 2x versions** for retina displays
   - Example: hero-postcard.jpg (1200px) and hero-postcard@2x.jpg (2400px)

4. **Add alt text** in HTML for accessibility
   - Currently using placeholders in code
   - Update alt attributes when adding real images

## Current Placeholders

The landing page currently uses CSS-styled placeholder boxes with icons.
Replace these with actual images by:

1. Adding images to this directory
2. Updating the HTML in `index.html`:

```html
<!-- Replace this: -->
<div class="placeholder-image hero-placeholder">
    <p>📬</p>
    <span>12" × 6.5" Postcard Mockup</span>
</div>

<!-- With this: -->
<img src="images/hero-postcard.jpg" alt="Porch Light Mail 12x6.5 inch postcard featuring 16 local Northwest Arkansas businesses">
```

## Need Photos?

If you don't have professional photos yet:

1. **Postcard mockups**: Use Canva, Photoshop, or hire on Fiverr
2. **Lifestyle photos**: Take with smartphone (good lighting!)
3. **Stock photos**: Unsplash/Pexels for generic home/mailbox shots
4. **Professional photography**: Consider for final launch

Let me know when you have images ready, and I can help integrate them!
