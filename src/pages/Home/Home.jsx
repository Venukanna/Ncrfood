// // src/pages/Home/Home.jsx
// import React, { useContext, useState } from 'react';
// import { Helmet } from 'react-helmet-async';

// import { useNavigate } from 'react-router-dom';
// import { CartContext } from '../../context/CartContext';
// import ProductCard from '../../components/ProductCard/ProductCard';
// import ProductModal from '../../components/Modal/ProductModal';
// import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';

// import homeBannerImg from '../../assets/images/home-banner.jpg';

// // ✅ Import local product images
// import proteinCookiesImg from '../../assets/images/Protein Cookies.png';
// import chickpeaSnackImg from '../../assets/images/Chickpea Protein Snack.png';
// import fruityBarImg from '../../assets/images/Fruity Energy Bar.png';
// import nutSeedBarImg from '../../assets/images/Nut & Seed Bar.png';

// import './Home.css';

// const Home = () => {
//   const { addToCart } = useContext(CartContext);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const navigate = useNavigate();

//   // ✅ Product list with static image references
//   const products = [
//     {
//       id: 1,
//       name: 'Protein Cookies',
//       price: 6,
//       image: proteinCookiesImg,
//       description: 'Delicious protein-packed cookies made with natural ingredients.',
//     },
//     {
//       id: 2,
//       name: 'Chickpea Protein Snack',
//       price: 25,
//       image: chickpeaSnackImg,
//       description: 'Crunchy roasted chickpeas with a perfect blend of spices.',
//     },
//     {
//       id: 3,
//       name: 'Fruity Energy Bar',
//       price: 59,
//       image: fruityBarImg,
//       description: 'Energy bar packed with dried fruits and nuts for a natural boost.',
//     },
//     {
//       id: 4,
//       name: 'Nut & Seed Bar',
//       price: 46,
//       image: nutSeedBarImg,
//       description: 'A satisfying blend of nuts and seeds for sustained energy.',
//     }
//   ];

//   const handleQuickView = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleAddToCart = (product) => {
//     addToCart(product, 1);
//     alert(`${product.name} added to cart!`);
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
//         <title>NCR Healthy Energy | Natural Protein Bars & Supplements</title>
//         <meta
//           name="description"
//           content="Fuel your body right with our delicious 7 nuts natural protein bars and high-quality protein supplements. Perfect for your active lifestyle."
//         />
//         <meta
//           name="keywords"
//           content="protein bars, natural supplements, healthy snacks, energy bars, vegan protein"
//         />
//       </Helmet>

//       <main className="home-container">
//         <section
//           className="hero-banner"
//           style={{
//             background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${homeBannerImg}) center/cover no-repeat`,
//           }}
//         >
//           <div className="hero-content">
//             <h1>Fuel Your Body Right</h1>
//             <p>
//               Welcome to our store, where we specialize in delicious 7 nuts natural protein bars
//               and high-quality protein supplements. Our products are designed to fuel your body
//               with the nutrients it needs to thrive.
//             </p>
//             <button className="shop-now-btn" onClick={handleShopNow}>
//               Shop Now
//             </button>
//           </div>
//         </section>

//         <section className="featured-products">
//           <h2>Our Products</h2>
//           <p className="section-subtitle">
//             We are dedicated to providing convenient and nutritious options for a healthy and active life.
//           </p>

//           <div className="products-grid">
//             {products.map((product) => (
//               <ProductCard
//                 key={product.id}
//                 product={product}
//                 onQuickView={() => handleQuickView(product)}
//                 onAddToCart={() => handleAddToCart(product)}
//               />
//             ))}
//           </div>

//           <div className="view-all-container">
//             <button className="view-all-btn" onClick={handleViewAllProducts}>
//               View All Products
//             </button>
//           </div>
//         </section>

//         <WhyChooseUs />
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

// // src/pages/Home/Home.jsx
// import React, { useContext, useState } from 'react';
// import { Helmet } from 'react-helmet-async';

// import { useNavigate } from 'react-router-dom';
// import { CartContext } from '../../context/CartContext';
// import ProductCard from '../../components/ProductCard/ProductCard';
// import ProductModal from '../../components/Modal/ProductModal';
// import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
// import Testimonials from '../../components/Testimonials/Testimonials';
// // import Newsletter from '../../components/Newsletter/Newsletter';

// import homeBannerImg from '../../assets/images/home-banner.jpg';
// import healthBenefitsImg from '../../assets/images/health-benefits.jpg';
// import nutritionExpertImg from '../../assets/images/nutrition-expert.jpg';

// // Import local product images
// import proteinCookiesImg from '../../assets/images/Protein Cookies.png';
// import chickpeaSnackImg from '../../assets/images/Chickpea Protein Snack.png';
// import fruityBarImg from '../../assets/images/Fruity Energy Bar.png';
// import nutSeedBarImg from '../../assets/images/Nut & Seed Bar.png';
// import veganProteinImg from '../../assets/images/vegan-protein.png';
// import energyMixImg from '../../assets/images/energy-mix.png';

// import './Home.css';

// const Home = () => {
//   const { addToCart } = useContext(CartContext);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const navigate = useNavigate();

//   // Enhanced product list with more items and detailed information
//   const products = [
//     {
//       id: 1,
//       name: 'Protein Cookies (Pack of 12)',
//       price: 24.99,
//       originalPrice: 29.99,
//       image: proteinCookiesImg,
//       description: 'Delicious protein-packed cookies made with natural ingredients, almond flour, and whey protein. Perfect for post-workout recovery or a healthy snack.',
//       features: [
//         '15g protein per serving',
//         'Low sugar content',
//         'Gluten-free options available',
//         'Contains 7 nuts blend'
//       ],
//       rating: 4.8,
//       reviewCount: 142
//     },
//     {
//       id: 2,
//       name: 'Chickpea Protein Snack',
//       price: 24.99,
//       originalPrice: 29.99,
//       image: chickpeaSnackImg,
//       description: 'Crunchy roasted chickpeas with a perfect blend of spices. High in fiber and plant-based protein to keep you full and energized.',
//       features: [
//         '12g plant protein per serving',
//         'Vegan & gluten-free',
//         '3 delicious flavors',
//         'No artificial preservatives'
//       ],
//       rating: 4.6,
//       reviewCount: 89
//     },
//     {
//       id: 3,
//       name: 'Fruity Energy Bar (Box of 10)',
//       price: 29.99,
//       originalPrice: 34.99,
//       image: fruityBarImg,
//       description: 'Energy bar packed with dried fruits, nuts, and superfoods for a natural boost. Ideal for hiking, workouts, or busy days.',
//       features: [
//         'All-natural ingredients',
//         'No added sugars',
//         'Rich in antioxidants',
//         'Sustained energy release'
//       ],
//       rating: 4.9,
//       reviewCount: 210
//     },
//     {
//       id: 4,
//       name: 'Nut & Seed Protein Bar',
//       price: 19.99,
//       originalPrice: 29.99,
//       image: nutSeedBarImg,
//       description: 'A satisfying blend of almonds, walnuts, chia seeds, and flaxseeds for sustained energy and optimal nutrition.',
//       features: [
//         '20g protein per bar',
//         'Omega-3 fatty acids',
//         'Keto-friendly',
//         'Non-GMO'
//       ],
//       rating: 4.7,
//       reviewCount: 156 
//     },
//     {
//       id: 5,
//       name: 'Plant-Based Protein Powder',
//       price: 39.99,
//       image: veganProteinImg,
//       description: 'Premium vegan protein blend with pea, rice, and hemp proteins for complete amino acid profile. Perfect for smoothies and baking.',
//       features: [
//         '25g protein per serving',
//         'Digestive enzymes included',
//         'Unflavored & chocolate options',
//         'No artificial sweeteners'
//       ],
//       rating: 4.8,
//       reviewCount: 187
//     },
//     {
//       id: 6,
//       name: 'Energy Nut Mix',
//       price: 12.99,
//       image: energyMixImg,
//       description: 'Custom blend of almonds, cashews, walnuts, and pumpkin seeds with a touch of sea salt for the perfect energy boost.',
//       features: [
//         'Portion-controlled packs',
//         'High in healthy fats',
//         'Source of magnesium',
//         'No added oils'
//       ],
//       rating: 4.5,
//       reviewCount: 73
//     }
//   ];

//   const handleQuickView = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleAddToCart = (product) => {
//     addToCart(product, 1);
//     alert(`${product.name} added to cart!`);
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
//         <meta
//           name="description"
//           content="Discover our premium selection of natural protein bars, plant-based supplements, and healthy snacks. Fuel your active lifestyle with clean, nutritious ingredients."
//         />
//         <meta
//           name="keywords"
//           content="protein bars, natural supplements, healthy snacks, energy bars, vegan protein, workout nutrition, gluten-free snacks"
//         />
//       </Helmet>

//       <main className="home-container">
//         <section
//           className="hero-banner"
//           style={{
//             background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${homeBannerImg}) center/cover no-repeat`,
//           }}
//         >
//           <div className="hero-content">
//             <h1>Fuel Your Active Lifestyle</h1>
//             <p className="hero-text">
//               Premium nutrition for your busy life. Our 100% natural protein bars and supplements 
//               are crafted with care to deliver clean energy, optimal recovery, and delicious taste. 
//               Made with real ingredients you can trust.
//             </p>
//             <div className="hero-cta">
//               <button className="shop-now-btn primary-btn" onClick={handleShopNow}>
//                 Shop Now
//               </button>
//               <button className="secondary-btn" onClick={() => navigate('/about')}>
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </section>

//         <section className="health-benefits">
//           <div className="benefits-content">
//             <h2>Why Nutrition Matters</h2>
//             <p>
//               Proper nutrition fuels your body, enhances performance, and supports overall wellbeing. 
//               Our products are designed to provide:
//             </p>
//             <ul className="benefits-list">
//               <li>Sustained energy without crashes</li>
//               <li>High-quality plant and nut-based proteins</li>
//               <li>Essential vitamins and minerals</li>
//               <li>Clean ingredients with no artificial additives</li>
//               <li>Delicious flavors that satisfy cravings</li>
//             </ul>
//           </div>
//           <div className="benefits-image">
//             <img src={healthBenefitsImg} alt="Health benefits of proper nutrition" />
//           </div>
//         </section>

//         <section className="featured-products">
//           <div className="section-header">
//             <h2>Our Bestselling Products</h2>
//             <p className="section-subtitle">
//               Carefully crafted with premium ingredients to support your health goals
//             </p>
//           </div>

//           <div className="products-grid">
//             {products.slice(0, 4).map((product) => (
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

//         <section className="expert-advice">
//           <div className="expert-image">
//             <img src={nutritionExpertImg} alt="Nutrition expert" />
//           </div>
//           <div className="expert-content">
//             <h2>Expertly Formulated</h2>
//             <p>
//               "Our products are developed in collaboration with nutritionists and dietitians to ensure 
//               they meet the highest standards of quality and efficacy. We believe in transparent labeling 
//               and science-backed formulations."
//             </p>
//             <p className="expert-name">- Dr. Sarah Johnson, Chief Nutrition Officer</p>
//             <button className="learn-more-btn" onClick={() => navigate('/about')}>
//               Our Nutrition Philosophy
//             </button>
//           </div>
//         </section>

//         <WhyChooseUs />

//         <Testimonials />

//         <section className="promo-banner">
//           <h3>Limited Time Offer</h3>
//           <p>Get 20% off your first order with code <strong>HEALTHY20</strong></p>
//           <button className="shop-now-btn" onClick={handleShopNow}>
//             Claim Your Discount
//           </button>
//         </section>

//         {/* <Newsletter /> */}
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



// // src/pages/Home/Home.jsx
// import React, { useContext, useState } from 'react';
// import { Helmet } from 'react-helmet-async';
// import { useNavigate } from 'react-router-dom';
// import { CartContext } from '../../context/CartContext';
// import ProductCard from '../../components/ProductCard/ProductCard';
// import ProductModal from '../../components/Modal/ProductModal';
// import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
// import Testimonials from '../../components/Testimonials/Testimonials';

// import homeBannerImg from '../../assets/images/home-banner.jpg';
// import healthBenefitsImg from '../../assets/images/health-benefits.jpg';
// import nutritionExpertImg from '../../assets/images/nutrition-expert.jpg';

// import proteinCookiesImg from '../../assets/images/Protein Cookies.png';
// import chickpeaSnackImg from '../../assets/images/Chickpea Protein Snack.png';
// import fruityBarImg from '../../assets/images/Fruity Energy Bar.png';
// import nutSeedBarImg from '../../assets/images/Nut & Seed Bar.png';
// import veganProteinImg from '../../assets/images/vegan-protein.png';
// import energyMixImg from '../../assets/images/energy-mix.png';

// import './Home.css';

// const Home = () => {
//   const { addToCart } = useContext(CartContext);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('all');
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
//       name: 'Fruity Energy Bar (Box of 10)',
//       price: 29.99,
//       originalPrice: 34.99,
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
//     alert(`${product.name} added to cart!`);
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

//         {/* Featured Products + Filter */}
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


// src/pages/Home/Home.jsx
import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductModal from '../../components/Modal/ProductModal';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import Testimonials from '../../components/Testimonials/Testimonials';

import homeBannerImg from '../../assets/images/home-banner.jpg';
import healthBenefitsImg from '../../assets/images/health-benefits.jpg';
import nutritionExpertImg from '../../assets/images/nutrition-expert.jpg';

import proteinCookiesImg from '../../assets/images/Protein Cookies.png';
import chickpeaSnackImg from '../../assets/images/Chickpea Protein Snack.png';
import fruityBarImg from '../../assets/images/Fruity Energy Bar.png';
import nutSeedBarImg from '../../assets/images/Nut & Seed Bar.png';
import veganProteinImg from '../../assets/images/vegan-protein.png';
import energyMixImg from '../../assets/images/energy-mix.png';

import './Home.css';

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [successMessage, setSuccessMessage] = useState(null); // ✅ added
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Protein Cookies (Pack of 12)',
      price: 24.99,
      originalPrice: 29.99,
      image: proteinCookiesImg,
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
      image: chickpeaSnackImg,
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
      image: fruityBarImg,
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
      image: nutSeedBarImg,
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
      image: veganProteinImg,
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
      image: energyMixImg,
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

  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    setSuccessMessage(`${product.name} added to cart!`);
    setTimeout(() => setSuccessMessage(null), 2000);
  };

  const handleShopNow = () => {
    navigate('/products');
  };

  const handleViewAllProducts = () => {
    navigate('/products');
  };

  return (
    <>
      <Helmet>
        <title>NCR Healthy Energy | Premium Natural Protein Bars & Supplements</title>
        <meta name="description" content="Discover our premium selection..." />
        <meta name="keywords" content="protein bars, supplements, snacks, vegan" />
      </Helmet>

      {/* ✅ Success Toast */}
      {successMessage && (
        <div className="cart-toast">
          {successMessage}
        </div>
      )}

      <main className="home-container">
        {/* Hero */}
        <section className="hero-banner" style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${homeBannerImg}) center/cover no-repeat` }}>
          <div className="hero-content">
            <h1>Fuel Your Active Lifestyle</h1>
            <p className="hero-text">Premium nutrition for your busy life...</p>
            <div className="hero-cta">
              <button className="shop-now-btn primary-btn" onClick={handleShopNow}>Shop Now</button>
              <button className="secondary-btn" onClick={() => navigate('/about')}>Learn More</button>
            </div>
          </div>
        </section>

        {/* Health Benefits */}
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
            <img src={healthBenefitsImg} alt="Health benefits" />
          </div>
        </section>

        {/* Featured Products */}
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

        {/* Expert Advice */}
        <section className="expert-advice">
          <div className="expert-image">
            <img src={nutritionExpertImg} alt="Nutrition expert" />
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

        {/* Promo */}
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
