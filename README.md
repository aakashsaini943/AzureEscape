React 18

React Router DOM 18

Tailwind CSS

Axios (for future API)

React Icons

Daisy UI --pending

LocalStorage (wishlist)


========== folder structure ===========



travel-frontend/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── hero/
│   │   │   ├── destinations/
│   │   │   └── packages/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── PageWrapper.jsx
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── Modal.jsx
│   │   │
│   │   ├── cards/
│   │   │   ├── DestinationCard.jsx
│   │   │   ├── PackageCard.jsx
│   │   │   └── HotelCard.jsx
│   │   │
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── PopularDestinations.jsx
│   │       ├── TopPackages.jsx
│   │       ├── WhyChooseUs.jsx
│   │       ├── Testimonials.jsx
│   │       └── CTA.jsx
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── Destinations/
│   │   │   ├── Destinations.jsx
│   │   │   ├── DestinationDetails.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── Packages/
│   │   │   ├── Packages.jsx
│   │   │   ├── PackageDetails.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── Hotels/
│   │   │   ├── Hotels.jsx
│   │   │   ├── HotelDetails.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── Wishlist/
│   │   │   ├── Wishlist.jsx
│   │   │   └── index.js
│   │   │
│   │   └── Static/
│   │       ├── About.jsx
│   │       ├── Contact.jsx
│   │       ├── FAQ.jsx
│   │       └── PrivacyPolicy.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── context/
│   │   ├── WishlistContext.jsx
│   │   └── AuthContext.jsx
│   │
│   ├── hooks/
│   │   ├── useWishlist.js
│   │   └── useAuth.js
│   │
│   ├── services/
│   │   └── api.js        // axios config (future)
│   │
│   ├── data/
│   │   ├── destinations.js
│   │   ├── packages.js
│   │   └── hotels.js
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   └── helpers.js
│   │
│   ├── styles/
│   │   ├── index.css
│   │   └── tailwind.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
