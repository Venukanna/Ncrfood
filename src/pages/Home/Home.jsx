 
// // src/pages/Home/Home.jsx
// // import React, { useContext, useState } from 'react';
// // import { Helmet } from 'react-helmet-async';
// // import { useNavigate } from 'react-router-dom';
// // import { CartContext } from '../../context/CartContext';
// // import ProductCard from '../../components/ProductCard/ProductCard';
// // import ProductModal from '../../components/Modal/ProductModal';
// // import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
// // import Testimonials from '../../components/Testimonials/Testimonials';



// import './Home.css';

// const Home = () => {
//   const { addToCart } = useContext(CartContext);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [successMessage, setSuccessMessage] = useState(null); // ✅ added
//   const navigate = useNavigate();

//   const products = [
//     {
//       id: 1,
//       name: 'Protein Cookies (Pack of 12)',
//       price: 24.99,
//       originalPrice: 29.99,
//       image: proteinCookiesImg,
//       category: 'bars',
//       description: 'Delicious protein-packed cookies...',
//       features: ['15g protein per serving', 'Low sugar content', 'Gluten-free options available', 'Contains 7 nuts blend'],
//       rating: 4.8,
//       reviewCount: 142
//     },
//     {
//       id: 2,
//       name: 'Chickpea Protein Snack',
//       price: 24.99,
//       originalPrice: 29.99,
//       image: chickpeaSnackImg,
//       category: 'snacks',
//       description: 'Crunchy roasted chickpeas...',
//       features: ['12g plant protein', 'Vegan', '3 flavors', 'No preservatives'],
//       rating: 4.6,
//       reviewCount: 89
//     },
//     {
//       id: 3,
//       name: 'Fruity Energy Bar (Box of 6)',
//       price: 49.99,
//       originalPrice: 69.99,
//       image: fruityBarImg,
//       category: 'bars',
//       description: 'Energy bar packed with fruits and nuts...',
//       features: ['All-natural', 'No sugars', 'Rich in antioxidants', 'Sustained energy'],
//       rating: 4.9,
//       reviewCount: 210
//     },
//     {
//       id: 4,
//       name: 'Nut & Seed Protein Bar',
//       price: 19.99,
//       originalPrice: 29.99,
//       image: nutSeedBarImg,
//       category: 'bars',
//       description: 'Blend of almonds, walnuts, chia and flaxseeds...',
//       features: ['20g protein', 'Omega-3', 'Keto-friendly', 'Non-GMO'],
//       rating: 4.7,
//       reviewCount: 156
//     },
//     {
//       id: 5,
//       name: 'Plant-Based Protein Powder',
//       price: 39.99,
//       image: veganProteinImg,
//       category: 'powders',
//       description: 'Vegan blend with pea, rice, and hemp protein...',
//       features: ['25g protein', 'Digestive enzymes', 'Unflavored & chocolate', 'No sweeteners'],
//       rating: 4.8,
//       reviewCount: 187
//     },
//     {
//       id: 6,
//       name: 'Energy Nut Mix',
//       price: 12.99,
//       image: energyMixImg,
//       category: 'snacks',
//       description: 'Almonds, cashews, walnuts, pumpkin seeds...',
//       features: ['Portion packs', 'Healthy fats', 'Magnesium', 'No oils'],
//       rating: 4.5,
//       reviewCount: 73
//     }
//   ];

//   const categories = ['all', 'bars', 'snacks', 'powders'];

//   const filteredProducts = selectedCategory === 'all'
//     ? products
//     : products.filter(p => p.category === selectedCategory);

//   const handleQuickView = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleAddToCart = (product) => {
//     addToCart(product, 1);
//     setSuccessMessage(`${product.name} added to cart!`);
//     setTimeout(() => setSuccessMessage(null), 2000);
//   };

//   const handleShopNow = () => {
//     navigate('/products');
//   };

//   const handleViewAllProducts = () => {
//     navigate('/products');
//   };

//   return (
//     <>
//       <Helmet>
//         <title>NCR Healthy Energy | Premium Natural Protein Bars & Supplements</title>
//         <meta name="description" content="Discover our premium selection..." />
//         <meta name="keywords" content="protein bars, supplements, snacks, vegan" />
//       </Helmet>

//       {/* ✅ Success Toast */}
//       {successMessage && (
//         <div className="cart-toast">
//           {successMessage}
//         </div>
//       )}

//       <main className="home-container">
//         {/* Hero */}
//         <section className="hero-banner" style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${homeBannerImg}) center/cover no-repeat` }}>
//           <div className="hero-content">
//             <h1>Fuel Your Active Lifestyle</h1>
//             <p className="hero-text">Premium nutrition for your busy life...</p>
//             <div className="hero-cta">
//               <button className="shop-now-btn primary-btn" onClick={handleShopNow}>Shop Now</button>
//               <button className="secondary-btn" onClick={() => navigate('/about')}>Learn More</button>
//             </div>
//           </div>
//         </section>

//         {/* Health Benefits */}
//         <section className="health-benefits">
//           <div className="benefits-content">
//             <h2>Why Nutrition Matters</h2>
//             <p>Proper nutrition fuels your body...</p>
//             <ul className="benefits-list">
//               <li>Sustained energy without crashes</li>
//               <li>High-quality plant and nut-based proteins</li>
//               <li>Essential vitamins and minerals</li>
//               <li>Clean ingredients</li>
//               <li>Delicious flavors</li>
//             </ul>
//           </div>
//           <div className="benefits-image">
//             <img src={healthBenefitsImg} alt="Health benefits" />
//           </div>
//         </section>

//         {/* Featured Products */}
//         <section className="featured-products">
//           <div className="section-header">
//             <h2>Our Bestselling Products</h2>
//             <p className="section-subtitle">Crafted with premium ingredients...</p>
//           </div>

//           <div className="category-filter">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
//                 onClick={() => setSelectedCategory(cat)}
//               >
//                 {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
//               </button>
//             ))}
//           </div>

//           <div className="products-grid">
//             {filteredProducts.slice(0, 4).map((product) => (
//               <ProductCard
//                 key={product.id}
//                 product={product}
//                 onQuickView={() => handleQuickView(product)}
//                 onAddToCart={() => handleAddToCart(product)}
//                 showRating={true}
//               />
//             ))}
//           </div>

//           <div className="view-all-container">
//             <button className="view-all-btn" onClick={handleViewAllProducts}>
//               View All Products
//             </button>
//           </div>
//         </section>

//         {/* Expert Advice */}
//         <section className="expert-advice">
//           <div className="expert-image">
//             <img src={nutritionExpertImg} alt="Nutrition expert" />
//           </div>
//           <div className="expert-content">
//             <h2>Expertly Formulated</h2>
//             <p>"Our products are developed in collaboration with nutritionists..."</p>
//             <p className="expert-name">- Dr. Sarah Johnson</p>
//             <button className="learn-more-btn" onClick={() => navigate('/about')}>
//               Our Nutrition Philosophy
//             </button>
//           </div>
//         </section>

//         <WhyChooseUs />
//         <Testimonials />

//         {/* Promo */}
//         <section className="promo-banner">
//           <h3>Limited Time Offer</h3>
//           <p>Get 20% off with code <strong>HEALTHY20</strong></p>
//           <button className="shop-now-btn" onClick={handleShopNow}>Claim Your Discount</button>
//         </section>
//       </main>

//       {selectedProduct && (
//         <ProductModal
//           product={selectedProduct}
//           onClose={() => setSelectedProduct(null)}
//           onAddToCart={handleAddToCart}
//         />
//       )}
//     </>
//   );
// };

// export default Home;

import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductModal from '../../components/Modal/ProductModal';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import Testimonials from '../../components/Testimonials/Testimonials';
import './Home.css';

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  // ✅ Use images directly from /public/images
  const products = [
    {
      id: 1,
      name: 'Protein Cookies (Pack of 12)',
      price: 24.99,
      originalPrice: 29.99,
      image: 'Protein Cookies.png',
      category: 'bars',
      description: 'Delicious protein-packed cookies...',
      features: ['15g protein per serving', 'Low sugar content', 'Gluten-free options available', 'Contains 7 nuts blend'],
      rating: 4.8,
      reviewCount: 142
    },
    {
      id: 2,
      name: 'Chickpea Protein Snack',
      price: 24.99,
      originalPrice: 29.99,
      image: 'Chickpea Protein Snack.png',
      category: 'snacks',
      description: 'Crunchy roasted chickpeas...',
      features: ['12g plant protein', 'Vegan', '3 flavors', 'No preservatives'],
      rating: 4.6,
      reviewCount: 89
    },
    {
      id: 3,
      name: 'Fruity Energy Bar (Box of 6)',
      price: 49.99,
      originalPrice: 69.99,
      image: 'Fruity Energy Bar.png',
      category: 'bars',
      description: 'Energy bar packed with fruits and nuts...',
      features: ['All-natural', 'No sugars', 'Rich in antioxidants', 'Sustained energy'],
      rating: 4.9,
      reviewCount: 210
    },
    {
      id: 4,
      name: 'Nut & Seed Protein Bar',
      price: 19.99,
      originalPrice: 29.99,
      image: 'Nut & Seed Bar.png',
      category: 'bars',
      description: 'Blend of almonds, walnuts, chia and flaxseeds...',
      features: ['20g protein', 'Omega-3', 'Keto-friendly', 'Non-GMO'],
      rating: 4.7,
      reviewCount: 156
    },
    {
      id: 5,
      name: 'Plant-Based Protein Powder',
      price: 39.99,
      image: 'Vegan Energy Supplement.png',
      category: 'powders',
      description: 'Vegan blend with pea, rice, and hemp protein...',
      features: ['25g protein', 'Digestive enzymes', 'Unflavored & chocolate', 'No sweeteners'],
      rating: 4.8,
      reviewCount: 187
    },
    {
      id: 6,
      name: 'Energy Nut Mix',
      price: 12.99,
      image: 'Nut & Seed Bar.png',
      category: 'snacks',
      description: 'Almonds, cashews, walnuts, pumpkin seeds...',
      features: ['Portion packs', 'Healthy fats', 'Magnesium', 'No oils'],
      rating: 4.5,
      reviewCount: 73
    }
  ];

  const categories = ['all', 'bars', 'snacks', 'powders'];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleQuickView = (product) => setSelectedProduct(product);

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    setSuccessMessage(`${product.name} added to cart!`);
    setTimeout(() => setSuccessMessage(null), 2000);
  };

  const handleShopNow = () => navigate('/products');
  const handleViewAllProducts = () => navigate('/products');

  return (
    <>
      <Helmet>
        <title>NCR Healthy Energy | Premium Natural Protein Bars & Supplements</title>
        <meta name="description" content="Discover our premium selection..." />
        <meta name="keywords" content="protein bars, supplements, snacks, vegan" />
      </Helmet>

      {successMessage && (
        <div className="cart-toast">{successMessage}</div>
      )}

      <main className="home-container">
        {/* ✅ Hero Banner */}
        <section
          className="hero-banner"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/home-banner.jpg') center/cover no-repeat`
          }}
        >
          <div className="hero-content">
            <h1>Fuel Your Active Lifestyle</h1>
            <p className="hero-text">Premium nutrition for your busy life...</p>
            <div className="hero-cta">
              <button className="shop-now-btn primary-btn" onClick={handleShopNow}>Shop Now</button>
              <button className="secondary-btn" onClick={() => navigate('/about')}>Learn More</button>
            </div>
          </div>
        </section>

        {/* ✅ Health Benefits */}
        <section className="health-benefits">
          <div className="benefits-content">
            <h2>Why Nutrition Matters</h2>
            <p>Proper nutrition fuels your body...</p>
            <ul className="benefits-list">
              <li>Sustained energy without crashes</li>
              <li>High-quality plant and nut-based proteins</li>
              <li>Essential vitamins and minerals</li>
              <li>Clean ingredients</li>
              <li>Delicious flavors</li>
            </ul>
          </div>
          <div className="benefits-image">
            <img src="/images/health-benefits.jpg" alt="Health benefits" />
          </div>
        </section>

        {/* ✅ Featured Products */}
        <section className="featured-products">
          <div className="section-header">
            <h2>Our Bestselling Products</h2>
            <p className="section-subtitle">Crafted with premium ingredients...</p>
          </div>

          <div className="category-filter">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filteredProducts.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={() => handleQuickView(product)}
                onAddToCart={() => handleAddToCart(product)}
                showRating={true}
              />
            ))}
          </div>

          <div className="view-all-container">
            <button className="view-all-btn" onClick={handleViewAllProducts}>
              View All Products
            </button>
          </div>
        </section>

        {/* ✅ Expert Advice */}
        <section className="expert-advice">
          <div className="expert-image">
            <img src="/images/health-benefits.jpg" alt="Nutrition expert" />
          </div>
          <div className="expert-content">
            <h2>Expertly Formulated</h2>
            <p>"Our products are developed in collaboration with nutritionists..."</p>
            <p className="expert-name">- Dr. Sarah Johnson</p>
            <button className="learn-more-btn" onClick={() => navigate('/about')}>
              Our Nutrition Philosophy
            </button>
          </div>
        </section>

        <WhyChooseUs />
        <Testimonials />

        {/* ✅ Promo Section */}
        <section className="promo-banner">
          <h3>Limited Time Offer</h3>
          <p>Get 20% off with code <strong>HEALTHY20</strong></p>
          <button className="shop-now-btn" onClick={handleShopNow}>Claim Your Discount</button>
        </section>
      </main>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  );
};

export default Home;
