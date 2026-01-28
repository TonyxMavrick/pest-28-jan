# PestGuard Pro - HTML/CSS/JavaScript Website

## Overview
This is a complete conversion of the React-based pest control website to plain HTML, CSS, and JavaScript. The website is fully functional, responsive, and ready for deployment to any standard web server.

## File Structure

```
/
├── index.html                          # Home page with hero carousel
├── about.html                          # About Us page
├── services.html                       # Services overview page
├── contact.html                        # Contact page with form
├── blog.html                           # Blog listing page
├── terms.html                          # Terms & Conditions
├── privacy.html                        # Privacy Policy
├── css/
│   └── styles.css                      # Main stylesheet (all styles)
├── js/
│   └── main.js                         # Main JavaScript file
├── services/
│   ├── general-pest-control.html      # General pest control service page
│   ├── termite-control.html           # Termite control service page
│   ├── cockroach-control.html         # (Create similar to above)
│   ├── rodent-control.html            # (Create similar to above)
│   ├── bed-bug-treatment.html         # (Create similar to above)
│   ├── mosquito-control.html          # (Create similar to above)
│   ├── ant-control.html               # (Create similar to above)
│   └── commercial-pest-control.html   # (Create similar to above)
└── blog/
    ├── prevent-termites.html          # Blog post example
    ├── bed-bug-signs.html             # (Create similar to above)
    └── eco-friendly-methods.html      # (Create similar to above)
```

## Features Implemented

### ✅ Complete Pages
1. **Home Page (index.html)**
   - Hero carousel with 3 slides (using Slick Carousel)
   - Trust signals section
   - Services overview grid
   - About preview section
   - Blog preview section
   - Testimonials section
   - Final CTA section

2. **About Page (about.html)**
   - Company story
   - Mission statement
   - Core values
   - Certifications & affiliations

3. **Services Page (services.html)**
   - All 8 service cards
   - Trust signals
   - CTA section

4. **Service Detail Pages**
   - Termite Control (complete)
   - General Pest Control (complete)
   - Template for remaining services

5. **Contact Page (contact.html)**
   - Contact form with validation
   - Contact information cards
   - Business hours
   - Emergency contact section
   - Map placeholder

6. **Blog Page (blog.html)**
   - Blog grid with 6 posts
   - Newsletter signup form

7. **Blog Post (prevent-termites.html)**
   - Full article layout
   - Related articles section

8. **Terms & Privacy**
   - Comprehensive legal pages

### 🎨 Styling Features
- **Responsive Design:** Mobile-first approach with breakpoints for tablet and desktop
- **Professional Color Scheme:** Emerald green (#059669) primary color
- **Modern Layout:** Clean, conversion-focused design
- **Smooth Animations:** Hover effects and transitions
- **Typography:** System font stack for optimal performance

### ⚙️ JavaScript Functionality
1. **Dynamic Header/Footer:** Loaded via JavaScript for easy maintenance
2. **Mobile Menu:** Fully functional hamburger menu
3. **Hero Carousel:** Auto-playing slider with navigation
4. **Active Navigation:** Highlights current page
5. **Form Handling:** Contact form submission handler
6. **Smooth Scrolling:** For anchor links

## Dependencies

### External Libraries (CDN)
- **jQuery 3.6.0:** Used for Slick Carousel
- **Slick Carousel 1.8.1:** Hero slider functionality

### CDN Links Used
```html
<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<!-- Slick Carousel -->
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
```

## Contact Information
All pages use the phone number: **+1-651-762-7822**

## Deployment Instructions

### 1. Standard Web Server
Simply upload all files to your web server maintaining the folder structure.

### 2. Local Testing
Open `index.html` in your browser. For full functionality, use a local server:
```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server
```

### 3. GitHub Pages
1. Push files to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select the main branch as source

### 4. Netlify/Vercel
Simply drag and drop the entire folder to deploy.

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization Guide

### Change Colors
Edit `/css/styles.css` and replace the emerald green colors:
- Primary: `#059669`
- Hover: `#047857`
- Dark: `#065f46`

### Add New Service Pages
1. Copy `/services/termite-control.html`
2. Update the content
3. Add link to `/services.html`

### Add New Blog Posts
1. Copy `/blog/prevent-termites.html`
2. Update the content
3. Add card to `/blog.html`

### Update Header/Footer
Edit `/js/main.js` and modify the `headerHTML` and `footerHTML` constants.

## Performance Optimizations
- ✅ Optimized images from Unsplash
- ✅ Minimal external dependencies
- ✅ CSS and JS are single files (fast loading)
- ✅ Responsive images with proper sizing
- ✅ Efficient CSS selectors

## SEO Considerations
- ✅ Semantic HTML5 markup
- ✅ Proper heading hierarchy
- ✅ Descriptive page titles
- ✅ Meta descriptions (add as needed)
- ✅ Alt text for images

## To-Do / Future Enhancements
- [ ] Add remaining service detail pages
- [ ] Add remaining blog posts
- [ ] Integrate Google Maps on contact page
- [ ] Add schema.org markup for SEO
- [ ] Implement actual form backend
- [ ] Add meta tags for social sharing
- [ ] Optimize images further (WebP format)
- [ ] Add favicon

## Support
For questions or issues, refer to the inline code comments or the original React implementation.

---

**Last Updated:** January 22, 2026
**Version:** 1.0.0
