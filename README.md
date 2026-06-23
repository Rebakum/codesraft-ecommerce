# Brew & Bean - Premium Coffee E-Commerce

A fully responsive, dark-mode-enabled e-commerce homepage for a premium artisan coffee brand. Built with React 18, Tailwind CSS, and modern frontend tooling as part of the **CodesRaft Frontend Developer Internship Assessment**.

---

## Live Demo

🔗 **[View Live Demo](https://your-deployed-link.vercel.app)** *(update after deployment)*

---

## GitHub Repository

📦 **[GitHub Repo](https://github.com/your-username/brew-and-bean)** *(update after push)*

---

## Project Overview

Brew & Bean is a single-page React application delivering a premium coffee shopping experience. It features a complete homepage with hero slider, product catalog, product detail pages, shopping cart, wishlist, checkout flow, and supporting pages like About, FAQ, Contact, and policy pages — all wrapped in a cohesive dark/light theme system.

> **No backend** — all data is static. Login/Register pages are placeholders. Forms are UI-only.

---

## Key Features

### Core E-Commerce
- **Product Catalog** — 10 products across 6 categories with images, pricing, ratings, and discount badges
- **Product Details Page** — Dynamic route (`/product/:id`) with image gallery, description tabs, features, and related products
- **Shopping Cart** — Add, remove, increase/decrease quantities, clear cart, dynamic total calculation
- **Wishlist System** — Toggle wishlist from product cards or detail page, move items to cart
- **Checkout Flow** — Billing info form, payment method selector (Credit Card / PayPal / COD), order summary

### Homepage Sections
- **Hero Slider** — 3-slide Swiper carousel with autoplay, fade transitions, and overlay text
- **Promotional Cards** — Side promo banners alongside the hero
- **Featured Categories** — 6-card grid for coffee categories
- **Popular Products** — Bestselling products grid with quick-add actions
- **Special Offers** — 3 promotional banner cards
- **New Arrivals** — Latest product highlights
- **Why Choose Us** — 6-feature icon grid (Free Shipping, Fresh Beans, etc.)
- **Testimonials** — Customer reviews fetched from JSON data
- **Blog** — 3 blog post cards with dates and excerpts
- **Newsletter** — Email subscription form

### UI/UX
- **Dark Mode / Light Mode** — Full theme system with localStorage persistence, system preference detection, and FOUC prevention
- **Responsive Design** — Mobile-first layout with hamburger menu, sidebar drawer, and fluid grids
- **Smooth Animations** — Framer Motion: fade-up on scroll, staggered reveals, hover effects, page transitions
- **Search Bar** — Desktop pill input + mobile slide-down overlay, navigates to shop with query param
- **Sticky Navbar** — Top promo bar auto-hides on scroll, shadow deepens, search and icons always accessible
- **Tooltips** — Action tooltips on product cards
- **Toast Notifications** — "Added to cart!" feedback
- **Breadcrumbs** — Dynamic breadcrumb banners on all inner pages

### Supporting Pages
- **About** — Story, mission, team carousel, statistics, testimonials
- **FAQ** — 6 animated accordion items
- **Contact** — Contact form, info cards, Google Maps embed
- **Dashboard** — Role-based sidebar (user/manager/admin), profile, order history
- **Policy Pages** — Shipping, Privacy Policy, Terms & Conditions, Return & Refund Policy
- **404 Error Page** — Animated fallback with "Back to Home" link

---

## Technologies Used

| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI library with hooks |
| **React Router v6** | Client-side routing (`createBrowserRouter`) |
| **Tailwind CSS 3** | Utility-first styling with `darkMode: 'class'` |
| **DaisyUI** | Tailwind component library (buttons, tables, menus) |
| **Vite 5** | Build tool and dev server |
| **Framer Motion** | Scroll animations, hover effects, page transitions |
| **Swiper** | Hero slider and team carousel |
| **React Icons** | Icon library (FontAwesome, Heroicons, Remix Icons) |
| **React Tabs** | Tabbed UI on product detail pages |
| **React Tooltip** | Tooltips on product action buttons |
| **React Range** | Price range slider filter |
| **React Rating** | Star rating display |
| **Headless UI** | Accessible disclosure/accordion components |
| **Leaflet + React Leaflet** | Map component (alternative to Google Maps) |
| **React Hook Form** | Form handling (available, ready for integration) |

---

## Pages Implemented

| Route | Page | Description |
|---|---|---|
| `/` | Home | Full homepage with all sections |
| `/shop` | Shop | Product listing with filters and sort |
| `/product/:id` | Product Details | Dynamic product page with gallery and tabs |
| `/wishList` | Wishlist | Saved products table with move-to-cart |
| `/shopping-cart` | Shopping Cart | Cart with quantities, coupon, order summary |
| `/billing-info` | Checkout | Billing form, payment method, order review |
| `/about` | About | Brand story, team, mission, stats |
| `/faq` | FAQ | Animated FAQ accordion |
| `/contact` | Contact | Contact form, info cards, map |
| `/login` | Login | Placeholder (coming soon) |
| `/register` | Register | Placeholder (coming soon) |
| `/dashboard` | Dashboard | User profile, order history, settings |
| `/shipping` | Shipping | Shipping & delivery information |
| `/privacy-policy` | Privacy Policy | Data collection and cookies policy |
| `/terms` | Terms & Conditions | Orders, payments, returns, liability |
| `/refund-policy` | Refund Policy | 7-day returns, refund process, exchanges |
| `*` | 404 Error | Animated not-found page |

---

## Folder Structure

```
codesraft-ecommerce-01/
├── index.html                         # Entry HTML with FOUC prevention script
├── package.json                       # Dependencies and scripts
├── vite.config.js                     # Vite configuration
├── tailwind.config.js                 # Tailwind + custom coffee/cream/amber colors
├── postcss.config.js                  # PostCSS config
├── public/
│   ├── testimonial.json               # Customer testimonial data
│   └── team.json                      # Team member data
└── src/
    ├── main.jsx                       # App entry (providers + router)
    ├── index.css                      # Global styles, theme CSS vars, Tailwind
    ├── assets/                        # Images (about, home, icons)
    ├── Context/
    │   └── ThemeContext.jsx           # Dark/light mode with localStorage
    ├── Cart/
    │   └── CartContext.jsx            # Cart state with localStorage
    ├── Wishlist/
    │   └── WishlistContext.jsx        # Wishlist state with localStorage
    ├── data/
    │   └── products.js                # 10 products with full metadata
    ├── Layout/
    │   └── MainLayout.jsx            # Navbar + Outlet + Footer shell
    ├── Router/
    │   └── Router.jsx                # All route definitions
    └── pages/
        ├── Home/
        │   └── Home.jsx              # Homepage layout
        ├── HomeComponent/            # 11 homepage section components
        ├── Shop/
        │   ├── Shop.jsx
        │   └── components/           # Card, Details, ShopLeft, ShopRight, Pagination
        ├── ProductDetails/
        │   ├── ProductDetails.jsx
        │   └── components/           # Tabs, Related Products
        ├── ShoppingCart/
        │   └── ShoppingCart.jsx
        ├── BillingInfo/
        │   ├── BillingInfo.jsx
        │   └── components/           # PaymentMethod, OrderSummary
        ├── WishList/
        │   └── WishList.jsx
        ├── About/
        ├── FAQ/
        ├── ContactPage/
        ├── Dashboard/
        ├── Shipping/
        ├── Privacy/
        ├── Terms/
        ├── Refund/
        ├── LogIn/
        ├── Register/
        ├── Error/
        └── Shared/                    # Navbar, Footer, Nav_Banner, CoffeeBanner
```

---

## Installation Guide

### Prerequisites
- **Node.js** >= 16.x
- **npm** or **yarn** or **pnpm**

### Setup

```bash
# Clone the repository
git clone https://github.com/your-username/brew-and-bean.git

# Navigate to the project
cd codesraft-ecommerce-01

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite development server |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint for code quality checks |

---

## Assessment Requirements Covered

| Requirement | Status | Notes |
|---|---|---|
| React Router Navigation | Done | 17 routes with nested layouts |
| Hero Slider | Done | Swiper with autoplay + fade transitions |
| Featured Products | Done | Homepage product grid |
| Product Details Page | Done | Dynamic route with gallery + tabs |
| Wishlist System | Done | Context + localStorage + toggle |
| Shopping Cart | Done | Context + localStorage + quantity management |
| Dynamic Quantity Update | Done | Increase/decrease with min=1 guard |
| Dynamic Total Price | Done | Auto-calculated using offer prices |
| Checkout Page | Done | Billing form + payment method + order summary |
| Order Summary | Done | Cart totals in checkout sidebar |
| Product Gallery | Done | Thumbnail selector on product detail |
| FAQ Page | Done | Animated accordion with Framer Motion |
| Contact Page | Done | Form + info cards + Google Maps |
| About Page | Done | Full brand story with team + stats |
| Responsive Design | Done | Mobile-first with breakpoints at sm/md/lg/xl |
| Dark Mode / Light Mode | Done | Context + localStorage + FOUC prevention + system pref |
| Context API | Done | 3 contexts: Theme, Cart, Wishlist |

---

## Future Improvements

- **Backend Integration** — Connect to a real API for products, orders, and user auth
- **Authentication** — Implement login/register with JWT and protected routes
- **Product Filtering** — Wire sidebar filters to actually filter the product grid
- **Product Sorting** — Connect sort dropdown to reorder products by price/rating
- **Search Results** — Display filtered products on the shop page from search query
- **Payment Gateway** — Integrate Stripe or PayPal for real payments
- **User Accounts** — Profile management, order history, saved addresses
- **Blog Pages** — Individual blog post routes with full content
- **Admin Dashboard** — Product CRUD, order management, user management
- **Performance** — Code splitting with `React.lazy` and `Suspense` for route-based chunking
- **SEO** — Add React Helmet for meta tags and Open Graph data
- **Testing** — Unit tests with Vitest, component tests with React Testing Library
- **Accessibility** — ARIA labels, keyboard navigation audit, screen reader testing

---

## Developer

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your Name](https://linkedin.com/in/your-name)
- Email: your.email@example.com

---

*Built as part of the CodesRaft Frontend Developer Internship Assessment*
