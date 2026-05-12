# Maheswari Industries - Premium Furniture Website

A modern, fully responsive, and feature-rich e-commerce website for premium handcrafted furniture.

## 🚀 Features

### User Features
- ✨ **Attractive Hero Section** with animated welcome text and gradient effects
- 🛍️ **Product Catalog** with search and category filtering
- 📷 **Furniture Gallery** - Browse beautiful furniture images
- 💬 **Product Enquiry System** - Ask questions about specific products
- 🛒 **Shopping Cart** - Add products and manage quantities
- 📝 **User Authentication** - Register and login
- 📧 **Newsletter Subscription**
- 📞 **Contact Form** - Send messages to admin

### Admin Features
- 🔐 **Secure Admin Dashboard** - Accessible via the profile dropdown or directly at `frontend/admin.html`
- ➕ **Add Products** - Upload products with local image uploads
- 🖼️ **Gallery Management** - Upload and manage furniture gallery images
- 📧 **Message Management** - View and respond to customer enquiries
- 👥 **User Management** - View registered users
- 📊 **Dashboard Overview** - See statistics and overview

### Technical Features
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile
- 🎨 **Modern Design** - Beautiful gradients, animations, and transitions
- 💾 **Database & Local Storage** - Uses MongoDB for persistence with local storage fallbacks
- ⚡ **Modern Stack** - Node.js/Express backend, Vanilla JS frontend with **Outfit** typography
- 🔒 **Secure Authentication** - Simple but effective user authentication

## 📂 File Structure

```
Maheswari Industries/
├── frontend/             # All client-side files
│   ├── index.html        # Main home page
│   ├── admin.html        # Admin dashboard
│   ├── cart.html         # Shopping cart page
│   ├── orders.html       # Order tracking page
│   ├── product-detail.html # Single product view
│   ├── css/              # Stylesheets
│   ├── js/               # Frontend logic
│   └── img/              # static assets (Logo, etc)
└── backend/              # Node.js Express server & Database models
```

## 🔑 Default Login Credentials

### Regular User
- **Username:** user
- **Password:** user123

### Admin User
- **Username:** admin
- **Password:** admin123

## 📖 How to Use

### For Customers
1. **Browse Products:**
   - Visit the home page and explore products in the collections
   - Use the search bar to find specific items
   - Filter by category

2. **View Gallery:**
   - Scroll down to see the furniture gallery
   - Click on images to see them better

3. **Enquire About Products:**
   - Click the "Enquire" button on any product
   - Fill in your details and message
   - Admin will respond to your enquiry

4. **Shopping Cart:**
   - Click cart icon to view items
   - Adjust quantities
   - Proceed to checkout

5. **Register/Login:**
   - Click "Sign Up" to create new account
   - Click "Login" to access existing account

### For Admin

#### Accessing Admin Dashboard
1. Click the lock icon in header (or click "Admin" button)
2. Use admin credentials: `admin` / `admin123`
3. You'll be redirected to the admin dashboard

#### Managing Products
1. Go to "Products" tab in admin dashboard
2. Click "Add Product" button
3. Fill in product details
4. **Upload image from your computer** (not internet URL)
5. Click Save to add product to store

#### Managing Gallery
1. Go to "Gallery" tab in admin dashboard
2. Click "Upload Image" button
3. Add image title
4. Select image from computer
5. Images will be displayed in the public gallery

#### Viewing & Responding to Messages
1. Go to "Messages" tab in admin dashboard
2. View all customer enquiries and contact messages
3. Mark messages as:
   - ✅ **Accepted** - Confirmed the enquiry
   - 💬 **Responded** - Already replied to customer
   - ❌ **Declined** - Not interested/relevant
4. Admin can see customer phone numbers and emails

#### Viewing User Details
1. Go to "Users" tab in admin dashboard
2. See all registered users with their information

## 🎨 Customization

### Change Business Details
Edit footer in `index.html` and `frontend/admin.html` to update:
- Contact information
- Business address
- Phone numbers
- Email address
- Social media links

### Change Colors
Edit CSS variables in `frontend/css/style.css`:
```css
:root {
    --primary: #8B4513;           /* Saddle Brown */
    --accent: #D4A574;            /* Tan Accent */
    --font-main: 'Outfit', sans-serif;
```

### Add More Product Categories
1. Update the category dropdown in:
   - `index.html` (product filters)
   - `admin.html` (add product form)

## 📱 Responsive Breakpoints

- **Desktop:** 1024px and above
- **Tablet:** 768px to 1023px
- **Mobile:** below 768px
- **Small Mobile:** below 480px

## 🔒 Security Notes

- This is a demo/local application using browser localStorage
- Passwords are stored in plain text (only for demo purposes)
- In production, use proper backend with encrypted storage
- Never store sensitive data in client-side localStorage
- Implement proper server-side authentication and authorization

## 💡 Tips for Best Experience

1. **Upload High-Quality Images** for products and gallery
2. **Keep Product Descriptions Clear** for better customer experience
3. **Respond to Messages Promptly** to maintain customer satisfaction
4. **Use Descriptive Titles** for gallery images
5. **Update Contact Information** regularly

## 🐛 Troubleshooting

### Images not showing
- Make sure image file format is supported (JPG, PNG, GIF, WebP)
- Check browser console for errors (F12 key)
- Try refreshing the page

### Data not saving
- Check browser storage (might be full)
- Clear browser cache and try again
- Use incognito/private window for fresh start

### Can't login to admin
- Verify credentials: `admin` / `admin123`
- Check if cookies/storage is enabled
- Try different browser if issue persists

## 📞 Support

For local modifications and customizations:
1. Edit the HTML, CSS, or JavaScript files
2. Refresh the browser to see changes
3. Data persists in browser storage

## 📄 License

This website is created for Maheswari Industries and can be freely modified as needed.

---

**Version:** 2.0  
**Last Updated:** March 2026  
**Built with:** Node.js, Express, MongoDB, Vanilla JS, Outfit Font
