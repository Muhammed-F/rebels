# RRΞBΣLZ - Premium Streetwear Website

A modern, dark-themed static e-commerce website built with **pure HTML, CSS, and JavaScript**.

## 🚀 Features

- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Dark Theme** - Sleek dark background with bold red accents
- **Interactive Navigation** - Smooth scrolling and mobile-friendly menu
- **Product Filtering** - Filter products by category (All, Hoodies, T-Shirts, Pants)
- **Contact Form** - Client-side validation for user inquiries
- **Animations** - Smooth scroll effects and hover interactions
- **SEO Optimized** - Meta tags for better search engine visibility

## 📁 Project Structure

```
public/
├── index.html          # Main HTML file with all sections
├── css/
│   └── style.css       # All styling (dark theme, responsive design)
├── js/
│   └── script.js       # JavaScript for interactivity
├── server.py           # Python server script (optional)
└── README.md           # This file
```

## 🌐 How to Run the Website

### Option 1: Python Server (Recommended for Local Testing)

If you have Python installed:

```bash
# Navigate to the public folder
cd public

# Run the Python server
python3 server.py
```

Then open your browser and go to: `http://localhost:8000`

### Option 2: Direct File Opening

Simply double-click `index.html` to open it in your web browser.

**Note:** Some features (like images) may not work correctly due to browser security restrictions. Use a server for best results.

### Option 3: Any Static Hosting Service

Upload the entire `public` folder to any static hosting service:

- **GitHub Pages** - Free hosting for static sites
- **Netlify** - Drag & drop deployment
- **Vercel** - Fast global CDN
- **AWS S3** - Scalable cloud hosting
- **Traditional Web Hosting** - Any hosting service with FTP access

## 🎨 Customization

### Changing Colors

Edit `css/style.css` and modify the CSS variables in the `:root` section:

```css
:root {
    --primary: hsl(0, 70%, 48%);        /* Red accent color */
    --background: hsl(0, 0%, 8%);       /* Dark background */
    --foreground: hsl(0, 0%, 95%);      /* Text color */
    /* ... more variables ... */
}
```

### Adding Products

Edit `js/script.js` and modify the `products` array:

```javascript
const products = [
    {
        id: '1',
        name: 'Your Product Name',
        price: 99.99,
        image: 'path/to/image.png',
        category: 'hoodies' // or 't-shirts' or 'pants'
    },
    // Add more products...
];
```

### Updating Content

- **Hero Section**: Edit text in `index.html` under `<section id="home">`
- **About Section**: Modify paragraphs in `<section id="about">`
- **Contact Form**: Customize form fields in `<section id="contact">`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🛠 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript (ES6)** - Vanilla JS for all interactions
- **Font Awesome** - Icon library
- **Google Fonts** - Poppins & Bebas Neue typography

## ✨ Key Features Explained

### Navigation
- Fixed navbar that becomes opaque on scroll
- Mobile hamburger menu for small screens
- Smooth scroll to sections when clicking links

### Product Filtering
- Click category buttons to filter products
- Automatically shows/hides products based on selection
- "All" button displays entire collection

### Form Validation
- Real-time validation as you type
- Email format checking with regex
- Clear error messages for required fields
- Success alert on valid submission

### Animations
- Fade-in effects on scroll for sections
- Scale-up hover effect on product images
- Bounce animation on scroll indicator
- Smooth transitions throughout

## 📝 Hosting Instructions

### For GitHub Pages:
1. Create a new repository on GitHub
2. Upload all files from the `public` folder
3. Go to Settings > Pages
4. Select main branch and `/root` folder
5. Your site will be live at `https://yourusername.github.io/repository-name`

### For Netlify:
1. Visit netlify.com
2. Drag and drop the `public` folder
3. Your site goes live instantly with a custom URL

### For Traditional Hosting:
1. Connect via FTP to your hosting service
2. Upload all files to the `public_html` or `www` directory
3. Access via your domain name

## 🎯 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This is a custom project for RRΞBΣLZ brand. All rights reserved.

---

**RRΞBΣLZ** - Premium streetwear for rebels and visionaries. Defy the ordinary.
