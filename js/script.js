/* ============================================
   MAHESWARI INDUSTRIES - JavaScript
   ============================================ */

// Storage Keys
const PRODUCTS_KEY = 'mi_products_v2';
const MESSAGES_KEY = 'mi_messages_v2';
const USERS_KEY = 'mi_users_v2';
const SESSION_KEY = 'mi_session_v2';
const WISHLIST_KEY = 'mi_wishlist_v2';
const CART_KEY = 'mi_cart_v2';
const GALLERY_KEY = 'mi_gallery_v2';

// Helper Functions
const save = (key, val) => localStorage.setItem(key, JSON.stringify(val));
const load = (key) => {
  try { return JSON.parse(localStorage.getItem(key)); } catch (e) { return null; }
};
const setSession = (obj) => save(SESSION_KEY, obj);
const getSession = () => load(SESSION_KEY);
const clearSession = () => localStorage.removeItem(SESSION_KEY);
const nextId = (list) => list?.length ? Math.max(...list.map(i => i.id || 0)) + 1 : 1;
const formatDateTime = (value) => {
  if (!value) return '';
  const date = new Date(value);
  return date.toLocaleString('en-IN', {
    year: 'numeric', month: 'short', day: '2-digit',
    hour: '2-digit', minute: '2-digit'
  });
};

// Seed Data
(function initData() {
  if (!load(PRODUCTS_KEY)) {
    const products = [
      { id: 1, title: 'Sheesham Wood 3-Seater Sofa', category: 'Living', price: 35999, originalPrice: 59999, img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=60', desc: 'Premium Sheesham wood sofa with plush cushions.', rating: 4.5, reviews: 128, isNew: false, isSale: true },
      { id: 2, title: 'King Size Solid Wood Bed', category: 'Bedroom', price: 45999, originalPrice: 69999, img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60', desc: 'Luxurious king size bed with storage.', rating: 4.8, reviews: 256, isNew: true, isSale: true },
      { id: 3, title: '6-Seater Dining Table Set', category: 'Dining', price: 55999, originalPrice: 89999, img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=60', desc: 'Elegant dining set for family gatherings.', rating: 4.7, reviews: 89, isNew: false, isSale: true },
      { id: 4, title: 'Executive Office Desk', category: 'Study', price: 24999, originalPrice: 34999, img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=60', desc: 'Spacious office desk with cable management.', rating: 4.6, reviews: 102, isNew: true, isSale: true },
      { id: 5, title: 'Ergonomic Office Chair', category: 'Study', price: 18999, originalPrice: 27999, img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60', desc: 'Ergonomic chair for long work sessions.', rating: 4.7, reviews: 145, isNew: false, isSale: true },
      { id: 6, title: 'Modular Office Storage', category: 'Storage', price: 21999, originalPrice: 32999, img: 'https://images.unsplash.com/photo-1523419400520-223f0e55b7b5?auto=format&fit=crop&w=800&q=60', desc: 'Modular storage units for offices.', rating: 4.4, reviews: 88, isNew: true, isSale: false },
      { id: 7, title: 'Library Study Table Set', category: 'Study', price: 18999, originalPrice: 26999, img: 'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?auto=format&fit=crop&w=800&q=60', desc: 'Durable study tables for classrooms.', rating: 4.5, reviews: 74, isNew: false, isSale: true },
      { id: 8, title: 'Auditorium Seating', category: 'Seating', price: 65999, originalPrice: 99999, img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60', desc: 'Comfortable fixed seating for halls.', rating: 4.9, reviews: 203, isNew: true, isSale: true },
      { id: 9, title: 'Science Lab Stools', category: 'Seating', price: 9999, originalPrice: 14999, img: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=800&q=60', desc: 'Durable lab stools for institutions.', rating: 4.4, reviews: 56, isNew: false, isSale: true },
      { id: 10, title: 'Hospital Bed with Storage', category: 'Bedroom', price: 32999, originalPrice: 44999, img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=60', desc: 'Ergonomic hospital bed with storage.', rating: 4.5, reviews: 134, isNew: false, isSale: true },
      { id: 11, title: 'Patient Recliner Chair', category: 'Seating', price: 21999, originalPrice: 31999, img: 'https://images.unsplash.com/photo-1582719478250-cc0a1b3778c8?auto=format&fit=crop&w=800&q=60', desc: 'Comfortable recliner for patient rooms.', rating: 4.7, reviews: 89, isNew: false, isSale: true },
      { id: 12, title: 'Nurse Station Desk', category: 'Storage', price: 24999, originalPrice: 34999, img: 'https://images.unsplash.com/photo-1523419400520-223f0e55b7b5?auto=format&fit=crop&w=800&q=60', desc: 'Efficient workstations for nurse stations.', rating: 4.3, reviews: 67, isNew: true, isSale: false },
    ];
    save(PRODUCTS_KEY, products);
  }
  
  if (!load(USERS_KEY)) {
    const users = [
      { id: 1, username: 'admin', email: 'admin@maheswari.com', password: 'Admin123', name: 'Administrator', phone: '9999999999', city: 'Coimbatore', isAdmin: true, createdAt: new Date().toISOString() },
      { id: 2, username: 'user', email: 'user@example.com', password: 'User123', name: 'Demo User', phone: '9876543210', city: 'Chennai', isAdmin: false, createdAt: new Date().toISOString() }
    ];
    save(USERS_KEY, users);
  }
  
  if (!load(MESSAGES_KEY)) save(MESSAGES_KEY, []);
  if (!load(WISHLIST_KEY)) save(WISHLIST_KEY, []);
  if (!load(CART_KEY)) save(CART_KEY, []);
  if (!load(GALLERY_KEY)) save(GALLERY_KEY, []);
})();

// ============================================
// ADMIN PRODUCT MANAGEMENT
// ============================================
function addProduct(e) {
  e.preventDefault();
  
  const title = document.getElementById('prodTitle').value.trim();
  const category = document.getElementById('prodCat').value;
  const fileInput = document.getElementById('prodImg');
  
  if (!title || !category) {
    showNotification('Please fill all required fields', 'error');
    return;
  }
  
  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onload = (event) => {
      const products = load(PRODUCTS_KEY) || [];
      const newProduct = {
        id: nextId(products),
        title,
        category,
        img: event.target.result,
        desc: title,
        rating: 4.5,
        reviews: 0,
        isNew: true,
        isSale: true,
        createdAt: new Date().toISOString()
      };
      
      products.push(newProduct);
      save(PRODUCTS_KEY, products);
      
      // Reset form
      document.getElementById('addProductForm')?.reset();
      closeAddProductModal();
      
      showNotification('Product added successfully!');
      
      // Refresh admin dashboard if function exists
      if (typeof renderAdminDashboard === 'function') {
        renderAdminDashboard();
      }
    };
    
    reader.readAsDataURL(file);
  } else {
    showNotification('Please select an image', 'error');
  }
}

function deleteProduct(id) {
  if (confirm('Are you sure you want to delete this product?')) {
    let products = load(PRODUCTS_KEY) || [];
    products = products.filter(p => p.id !== id);
    save(PRODUCTS_KEY, products);
    
    // Also remove from cart if present
    let cart = load(CART_KEY) || [];
    cart = cart.filter(item => item.id !== id);
    save(CART_KEY, cart);
    
    // Also remove from wishlist if present
    let wishlist = load(WISHLIST_KEY) || [];
    wishlist = wishlist.filter(itemId => itemId !== id);
    save(WISHLIST_KEY, wishlist);
    
    showNotification('Product deleted successfully!');
    
    // Refresh displays
    if (typeof renderAdminDashboard === 'function') {
      renderAdminDashboard();
    }
    renderProducts();
    updateCartCount();
    updateWishlistCount();
  }
}

function deleteMessage(id) {
  if (confirm('Are you sure you want to delete this message?')) {
    let messages = load(MESSAGES_KEY) || [];
    messages = messages.filter(m => m.id !== id);
    save(MESSAGES_KEY, messages);
    
    showNotification('Message deleted successfully!');
    
    if (typeof renderAdminDashboard === 'function') {
      renderAdminDashboard();
    }
  }
}

function updateMessageStatus(id, status) {
  let messages = load(MESSAGES_KEY) || [];
  const message = messages.find(m => m.id === id);
  
  if (message) {
    message.status = status;
    save(MESSAGES_KEY, messages);
    showNotification(`Message marked as ${status}`);
    
    if (typeof renderAdminMessages === 'function') {
      renderAdminMessages();
    }
  }
}

// ============================================
// HERO SLIDER
// ============================================
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');

function goToSlide(index) {
  slides[currentSlide]?.classList.remove('active');
  dots[currentSlide]?.classList.remove('active');
  
  currentSlide = index;
  if (currentSlide >= slides.length) currentSlide = 0;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  
  slides[currentSlide]?.classList.add('active');
  dots[currentSlide]?.classList.add('active');
}

function changeSlide(direction) {
  goToSlide(currentSlide + direction);
}

// Auto slide
setInterval(() => changeSlide(1), 5000);

// ============================================
// PRODUCTS
// ============================================
let currentCategory = '';

function renderProducts(category = '', searchText = '') {
  const products = load(PRODUCTS_KEY) || [];
  const container = document.getElementById('productGrid');
  if (!container) return;
  
  container.innerHTML = '';
  
  const filtered = products.filter(p => {
    const matchesCat = category ? p.category.toLowerCase().includes(category.toLowerCase()) : true;
    const matchesSearch = searchText ? 
      p.title.toLowerCase().includes(searchText.toLowerCase()) || 
      p.desc.toLowerCase().includes(searchText.toLowerCase()) : true;
    return matchesCat && matchesSearch;
  });
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="cart-empty" style="grid-column: 1/-1;">
        <i class="fas fa-search"></i>
        <h3>No products found</h3>
        <p>Try a different category or search term</p>
      </div>
    `;
    return;
  }
  
  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-image">
        <img src="${p.img}" alt="${p.title}" onerror="this.src='https://via.placeholder.com/300x250?text=No+Image'">
        <div class="product-badges">
          ${p.isSale ? `<span class="badge badge-sale">SALE</span>` : ''}
          ${p.isNew ? `<span class="badge badge-new">NEW</span>` : ''}
        </div>
        <div class="product-actions">
          <button class="action-btn" onclick="addToWishlist(${p.id})" title="Add to Wishlist">
            <i class="fas fa-heart"></i>
          </button>
          <button class="action-btn" onclick="openEnquireModal(${p.id})" title="Enquire">
            <i class="fas fa-envelope"></i>
          </button>
        </div>
        <button class="quick-add" onclick="addToCart(${p.id})">
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
      <div class="product-info">
        <span class="product-category">${p.category}</span>
        <h3 class="product-title"><a href="#">${p.title}</a></h3>
        <div class="product-rating">
          <div class="stars">
            ${generateStars(p.rating)}
          </div>
          <span>(${p.reviews} Reviews)</span>
        </div>
        <div class="product-price" style="color: var(--muted); font-weight: 600;">Price on request</div>
      </div>
    `;
    container.appendChild(card);
  });
}

function generateStars(rating) {
  let stars = '';
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>';
  }
  if (hasHalf) {
    stars += '<i class="fas fa-star-half-alt"></i>';
  }
  for (let i = fullStars + (hasHalf ? 1 : 0); i < 5; i++) {
    stars += '<i class="far fa-star"></i>';
  }
  return stars;
}

function filterProducts(category) {
  currentCategory = category;
  
  // Update active tab
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
  
  renderProducts(category);
}

function filterByCategory(category) {
  currentCategory = category;
  
  // Scroll to products
  document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
  
  // Update tabs and render
  setTimeout(() => {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === category);
    });
    renderProducts(category);
  }, 500);
}

// ============================================
// CART
// ============================================
function addToCart(id) {
  let cart = load(CART_KEY) || [];
  const existing = cart.find(item => item.id === id);
  
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  
  save(CART_KEY, cart);
  updateCartCount();
  openCart();
  showNotification('Product added to cart!');
}

function updateCartCount() {
  const cart = load(CART_KEY) || [];
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cartCount');
  if (badge) badge.textContent = count;
}

function renderCart() {
  const cart = load(CART_KEY) || [];
  const products = load(PRODUCTS_KEY) || [];
  const container = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  
  if (!container) return;
  container.innerHTML = '';
  
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-cart"></i>
        <h3>Your cart is empty</h3>
        <p>Add some products to get started</p>
      </div>
    `;
  } else {
    cart.forEach(item => {
      const p = products.find(x => x.id === item.id);
      if (!p) return;
      
      const el = document.createElement('div');
      el.className = 'cart-item';
      el.innerHTML = `
        <img src="${p.img}" alt="${p.title}">
        <div class="cart-item-details">
          <div class="cart-item-title">${p.title}</div>
          <div class="cart-item-price" style="color: var(--muted);">Price on request</div>
          <div class="cart-controls">
            <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)"><i class="fas fa-minus"></i></button>
            <span>${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)"><i class="fas fa-plus"></i></button>
            <button class="qty-btn" onclick="removeFromCart(${item.id})" style="margin-left: auto; color: #e74c3c;">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      `;
      container.appendChild(el);
    });
  }
  
  if (totalEl) totalEl.textContent = 'Contact for pricing';
}

function updateCartQty(id, change) {
  let cart = load(CART_KEY) || [];
  const item = cart.find(x => x.id === id);
  
  if (item) {
    item.qty += change;
    if (item.qty <= 0) {
      cart = cart.filter(x => x.id !== id);
    }
    save(CART_KEY, cart);
    renderCart();
    updateCartCount();
  }
}

function removeFromCart(id) {
  let cart = load(CART_KEY) || [];
  cart = cart.filter(x => x.id !== id);
  save(CART_KEY, cart);
  renderCart();
  updateCartCount();
  showNotification('Item removed from cart');
}

function openCart() {
  renderCart();
  document.getElementById('cartDrawer')?.classList.add('open');
  document.getElementById('cartOverlay')?.classList.add('open');
}

function closeCart() {
  document.getElementById('cartDrawer')?.classList.remove('open');
  document.getElementById('cartOverlay')?.classList.remove('open');
}

// ============================================
// WISHLIST
// ============================================
function addToWishlist(id) {
  let wishlist = load(WISHLIST_KEY) || [];
  
  if (!wishlist.includes(id)) {
    wishlist.push(id);
    save(WISHLIST_KEY, wishlist);
    showNotification('Added to wishlist!');
  } else {
    wishlist = wishlist.filter(x => x !== id);
    save(WISHLIST_KEY, wishlist);
    showNotification('Removed from wishlist');
  }
  
  updateWishlistCount();
}

function updateWishlistCount() {
  const wishlist = load(WISHLIST_KEY) || [];
  const badge = document.getElementById('wishlistCount');
  if (badge) badge.textContent = wishlist.length;
}

function toggleWishlist() {
  showNotification('Wishlist feature coming soon!');
}

// ============================================
// MODALS
// ============================================
function openEnquireModal(id) {
  const product = (load(PRODUCTS_KEY) || []).find(x => x.id === id);
  if (!product) return;
  
  document.getElementById('enquireProductId').value = id;
  document.getElementById('enquireProductName').textContent = product.title;
  document.getElementById('enquireModal')?.classList.add('open');
}

function closeEnquireModal() {
  document.getElementById('enquireModal')?.classList.remove('open');
  document.getElementById('enquireForm')?.reset();
}

function submitEnquiry(e) {
  e.preventDefault();
  
  const productId = parseInt(document.getElementById('enquireProductId').value);
  const name = document.getElementById('enquireName').value;
  const email = document.getElementById('enquireEmail').value;
  const phone = document.getElementById('enquirePhone').value;
  const message = document.getElementById('enquireMessage').value;
  
  const messages = load(MESSAGES_KEY) || [];
  messages.push({
    id: nextId(messages),
    productId,
    name,
    email,
    phone,
    body: message,
    date: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    status: 'pending'
  });
  
  save(MESSAGES_KEY, messages);
  closeEnquireModal();
  showNotification('Enquiry sent! We will contact you soon.');
}

// ============================================
// AUTH
// ============================================
function openAuth(mode = 'login') {
  document.getElementById('authMode').value = mode;
  switchAuthTab(mode);
  document.getElementById('authModal')?.classList.add('open');
}

function closeAuth() {
  document.getElementById('authModal')?.classList.remove('open');
  document.getElementById('authForm')?.reset();
  clearAuthErrors();
}

function switchAuthTab(mode) {
  document.getElementById('authMode').value = mode;
  document.getElementById('authForm')?.reset();
  
  // Update tabs
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.classList.toggle('active', tab.textContent.toLowerCase().includes(mode));
  });
  
  // Toggle fields
  const loginFields = document.getElementById('loginFields');
  const registerFields = document.getElementById('registerFields');
  const submitBtn = document.getElementById('authSubmit');
  
  if (mode === 'register') {
    loginFields?.classList.add('hidden');
    registerFields?.classList.remove('hidden');
    if (submitBtn) submitBtn.textContent = 'Create Account';
  } else {
    loginFields?.classList.remove('hidden');
    registerFields?.classList.add('hidden');
    if (submitBtn) submitBtn.textContent = 'Sign In';
  }
  
  clearAuthErrors();
}

function clearAuthErrors() {
  document.querySelectorAll('.error-text').forEach(el => {
    el.style.display = 'none';
    el.textContent = '';
  });
}

function handleAuth(e) {
  e.preventDefault();
  clearAuthErrors();
  
  const mode = document.getElementById('authMode').value;
  const users = load(USERS_KEY) || [];
  
  // Validate required fields based on mode
  if (mode === 'register') {
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    const city = document.getElementById('regCity').value.trim();
    const pass = document.getElementById('regPass').value;
    
    if (!name || !email || !phone || !city || !pass) {
      showNotification('Please fill all required fields', 'error');
      return;
    }
  } else {
    const userInput = document.getElementById('loginUser').value.trim();
    const pass = document.getElementById('loginPass').value;
    
    if (!userInput || !pass) {
      showNotification('Please fill all required fields', 'error');
      return;
    }
  }
  
  if (mode === 'login') {
    const userInput = document.getElementById('loginUser').value.trim();
    const pass = document.getElementById('loginPass').value;
    
    const found = users.find(u => (u.username === userInput || u.email === userInput) && u.password === pass);
    
    if (found) {
      setSession(found);
      closeAuth();
      checkSession();
      showNotification(`Welcome back, ${found.name}!`);
    } else {
      document.getElementById('loginPassError').textContent = 'Invalid credentials';
      document.getElementById('loginPassError').style.display = 'block';
    }
  } else {
    // Register validation
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    const city = document.getElementById('regCity').value.trim();
    const pass = document.getElementById('regPass').value;
    const passConfirm = document.getElementById('regPassConfirm').value;
    
    let hasError = false;
    
    if (!name || name.length < 3) {
      document.getElementById('regNameError').textContent = 'Name must be at least 3 characters';
      document.getElementById('regNameError').style.display = 'block';
      hasError = true;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('regEmailError').textContent = 'Please enter a valid email';
      document.getElementById('regEmailError').style.display = 'block';
      hasError = true;
    } else if (users.find(u => u.email === email)) {
      document.getElementById('regEmailError').textContent = 'Email already registered';
      document.getElementById('regEmailError').style.display = 'block';
      hasError = true;
    }
    
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      document.getElementById('regPhoneError').textContent = 'Enter valid 10-digit number';
      document.getElementById('regPhoneError').style.display = 'block';
      hasError = true;
    }
    
    if (!city || city.length < 2) {
      document.getElementById('regCityError').textContent = 'Please enter a valid city';
      document.getElementById('regCityError').style.display = 'block';
      hasError = true;
    }
    
    if (pass.length < 6) {
      document.getElementById('regPassError').textContent = 'Password must be at least 6 characters';
      document.getElementById('regPassError').style.display = 'block';
      hasError = true;
    }
    
    if (pass !== passConfirm) {
      document.getElementById('regPassConfirmError').textContent = 'Passwords do not match';
      document.getElementById('regPassConfirmError').style.display = 'block';
      hasError = true;
    }
    
    if (hasError) return;
    
    const newUser = {
      id: nextId(users),
      username: email.split('@')[0],
      email,
      password: pass,
      name,
      phone,
      city,
      isAdmin: false,
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    save(USERS_KEY, users);
    setSession(newUser);
    closeAuth();
    checkSession();
    renderProducts();
    showNotification(`Welcome ${name}! Account created successfully!`);
  }
}

// Admin Auth
function openAdminAuth() {
  document.getElementById('adminAuthModal')?.classList.add('open');
}

function closeAdminAuth() {
  document.getElementById('adminAuthModal')?.classList.remove('open');
  document.getElementById('adminAuthForm')?.reset();
}

function handleAdminAuth(e) {
  e.preventDefault();
  
  const user = document.getElementById('adminUser').value.trim();
  const pass = document.getElementById('adminPass').value;
  const users = load(USERS_KEY) || [];
  
  const found = users.find(u => (u.username === user || u.email === user) && u.password === pass && u.isAdmin);
  
  if (found) {
    setSession(found);
    closeAdminAuth();
    checkSession();
    showNotification(`Welcome Admin, ${found.name}!`);
  } else {
    showNotification('Invalid admin credentials', 'error');
  }
}

function checkSession() {
  const sess = getSession();
  const userDisplay = document.getElementById('userDisplayName');
  const adminLink = document.getElementById('adminDashboardLink');
  
  if (sess) {
    if (userDisplay) userDisplay.textContent = sess.name.split(' ')[0];
    if (sess.isAdmin && adminLink) adminLink.classList.remove('hidden');
  } else {
    if (userDisplay) userDisplay.textContent = 'Account';
    if (adminLink) adminLink.classList.add('hidden');
  }
}

// ============================================
// MOBILE NAV
// ============================================
function openMobileNav() {
  document.getElementById('mobileNav')?.classList.add('active');
  document.getElementById('mobileNavOverlay')?.classList.add('active');
}

function closeMobileNav() {
  document.getElementById('mobileNav')?.classList.remove('active');
  document.getElementById('mobileNavOverlay')?.classList.remove('active');
}

// ============================================
// NOTIFICATIONS
// ============================================
function showNotification(message, type = 'success') {
  // Remove existing
  document.querySelectorAll('.notification').forEach(n => n.remove());
  
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
    <span>${message}</span>
  `;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === 'success' ? '#27AE60' : '#E74C3C'};
    color: white;
    padding: 15px 25px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 9999;
    animation: slideIn 0.3s ease;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);

// ============================================
// BACK TO TOP
// ============================================
function handleScroll() {
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.classList.toggle('visible', window.scrollY > 500);
  }
}

// ============================================
// SALE TIMER
// ============================================
function updateSaleTimer() {
  const timer = document.getElementById('saleTimer');
  if (!timer) return;
  
  // Set sale end date (2 days from now for demo)
  const now = new Date();
  const endDate = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000);
  
  const diff = endDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);
  
  timer.textContent = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// ============================================
// SEARCH
// ============================================
function initSearch() {
  const headerSearch = document.getElementById('headerSearch');
  if (headerSearch) {
    headerSearch.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => renderProducts(currentCategory, e.target.value), 500);
      }
    });
  }
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const messages = load(MESSAGES_KEY) || [];
      messages.push({
        id: nextId(messages),
        name: form.querySelector('input[type="text"]').value,
        email: form.querySelector('input[type="email"]').value,
        phone: form.querySelector('input[type="tel"]')?.value || '',
        body: form.querySelector('textarea').value,
        date: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        status: 'pending'
      });
      
      save(MESSAGES_KEY, messages);
      form.reset();
      showNotification('Message sent! We will get back to you soon.');
    });
  }
}

// ============================================
// NEWSLETTER
// ============================================
function initNewsletter() {
  const form = document.querySelector('.newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value;
      form.reset();
      showNotification('Thank you for subscribing! Use code WELCOME10 for 10% off.');
    });
  }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Render products
  renderProducts();
  
  // Update counts
  updateCartCount();
  updateWishlistCount();
  
  // Check session
  checkSession();
  
  // Init features
  initSearch();
  initContactForm();
  initNewsletter();
  
  // Cart drawer
  document.getElementById('closeCartBtn')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
  
  // Mobile nav
  document.getElementById('hamburger')?.addEventListener('click', openMobileNav);
  document.getElementById('mobileNavOverlay')?.addEventListener('click', closeMobileNav);
  
  // Back to top
  window.addEventListener('scroll', handleScroll);
  
  // Sale timer
  updateSaleTimer();
  setInterval(updateSaleTimer, 1000);
  
  // Close modals on background click
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  });
});
