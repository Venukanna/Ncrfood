// // 

// // src/pages/Products/Products.jsx
// import React, { useState, useContext } from 'react';
// import { Helmet } from 'react-helmet-async';

// import ProductCard from '../../components/ProductCard/ProductCard';
// import ProductModal from '../../components/Modal/ProductModal';
// import { CartContext } from '../../context/CartContext';
// import './Products.css';



// const Products = () => {
//   const { addToCart } = useContext(CartContext);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [filter, setFilter] = useState('all');
//   const [successMessage, setSuccessMessage] = useState(null); // ✅ toast state

  

//   const products = [
  
//       {
//     id: 1,
//     name: "Protein Cookies (Pack of 6)",
//     price: 6,
//     originalPrice: 9.99,
//    image: "/images/Protein Cookies.png",
//     category: "snacks",
//     description: "Delicious protein-packed cookies made with natural ingredients.",
//     features: ['High Protein', 'Gluten-Free', 'No Preservatives', 'Made with Oats'],
//     rating: 4.7,
//     reviewCount: 142
//   },
//     {
//       id: 2,
//       name: "Chickpea Protein Snack (200g)",
//       price: 25,
//       originalPrice: 29.99,
//       image: "/images/Chickpea Protein Snack.png",
//       category: "snacks",
//       description: "Crunchy roasted chickpeas with a perfect blend of spices.",
//       features: ['High Fiber', 'Spicy & Crunchy', 'Vegan Friendly', 'Non-GMO'],
//       rating: 4.6,
//       reviewCount: 187
//     },
//     {
//       id: 3,
//       name: "Fruity Energy Bar (Box of 10)",
//       price: 59,
//       originalPrice: 69.99,
//       image: "/images/Fruity Energy Bar.png",
//       category: "bars",
//       description: "Energy bar packed with dried fruits and nuts for a natural boost.",
//       features: ['All-natural', 'No sugars', 'Rich in antioxidants', 'Sustained energy'],
//       rating: 4.9,
//       reviewCount: 210
//     },
//     {
//       id: 4,
//       name: "Nut & Seed Bar (Box of 6)",
//       price: 46,
//       originalPrice: 52.99,
//       image: "/images/Nut & Seed Bar.png",
//       category: "bars",
//       description: "A satisfying blend of nuts and seeds for sustained energy.",
//       features: ['No Artificial Flavors', 'Omega-3 Rich', 'Keto Friendly', 'Crunchy Texture'],
//       rating: 4.8,
//       reviewCount: 176
//     },
//     {
//       id: 5,
//       name: "Vegan Energy Supplement (300g)",
//       price: 119,
//       originalPrice: 139.99,
//       image: "/images/Vegan Energy Supplement.png",
//       category: "supplements",
//       description: "Plant-based energy supplement with no artificial additives.",
//       features: ['Vegan', 'No Added Sugar', 'Natural Caffeine', 'Boosts Immunity'],
//       rating: 4.5,
//       reviewCount: 132
//     },
//     {
//       id: 6,
//       name: "Natural Energy Bar (Pack of 5)",
//       price: 56,
//       originalPrice: 62.99,
//       image: "/images/naturalEnergyBarImg",
//       category: "bars",
//       description: "Simple ingredients for clean energy without the crash.",
//       features: ['Organic Ingredients', 'Low GI', 'No Preservatives', 'Quick Snack'],
//       rating: 4.6,
//       reviewCount: 150
//     },
//     {
//       id: 7,
//       name: "Protein Powder Blend (500g)",
//       price: 149,
//       originalPrice: 169.99,
//       image: "/images/proteinPowderImg",
//       category: "supplements",
//       description: "Premium protein powder with complete amino acid profile.",
//       features: ['Complete Protein', 'Digestive Enzymes', 'Soy-Free', 'No Artificial Colors'],
//       rating: 4.7,
//       reviewCount: 198
//     }
//   ];
  

//   const filteredProducts = filter === 'all' 
//     ? products 
//     : products.filter(product => product.category === filter);

//   const handleQuickView = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleAddToCart = (product) => {
//     addToCart(product, 1);
//     setSuccessMessage(`${product.name} added to cart!`);
//     setTimeout(() => setSuccessMessage(null), 2000);
//   };

//   return (
//     <>
//       <Helmet>
//         <title>NCR Products | Healthy Energy Bars & Supplements</title>
//         <meta 
//           name="description" 
//           content="Browse our premium collection of natural protein bars, energy supplements, and healthy snacks for your active lifestyle." 
//         />
//       </Helmet>

//       {successMessage && (
//         <div className="cart-toast">
//           {successMessage}
//         </div>
//       )}

//       <main className="products-page">
//         <section className="products-header">
//           <h1>Our Products</h1>
//           <p>Fuel your body with tasty options that keep you energized!</p>
          
//           <div className="filter-controls">
//             <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Products</button>
//             <button className={`filter-btn ${filter === 'bars' ? 'active' : ''}`} onClick={() => setFilter('bars')}>Energy Bars</button>
//             <button className={`filter-btn ${filter === 'snacks' ? 'active' : ''}`} onClick={() => setFilter('snacks')}>Protein Snacks</button>
//             <button className={`filter-btn ${filter === 'supplements' ? 'active' : ''}`} onClick={() => setFilter('supplements')}>Supplements</button>
//           </div>
//         </section>

//         <section className="products-grid-container">
//           <div className="products-grid">
//             {filteredProducts.map(product => (
//               <ProductCard 
//                 key={product.id} 
//                 product={product} 
//                 onQuickView={() => handleQuickView(product)}
//                 onAddToCart={() => handleAddToCart(product)}
//               />
//             ))}
//           </div>
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

// export default Products;

// src/pages/Products/Products.jsx
import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';

import ProductCard from '../../components/ProductCard/ProductCard';
import ProductModal from '../../components/Modal/ProductModal';
import { CartContext } from '../../context/CartContext';
import './Products.css';

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState('all');
  const [successMessage, setSuccessMessage] = useState(null);

  const products = [
    {
      id: 1,
      name: "Protein Cookies (Pack of 6)",
      price: 6,
      originalPrice: 9.99,
      image: "Protein Cookies.png",
      category: "snacks",
      description: "Delicious protein-packed cookies made with natural ingredients.",
      features: ['High Protein', 'Gluten-Free', 'No Preservatives', 'Made with Oats'],
      rating: 4.7,
      reviewCount: 142
    },
    {
      id: 2,
      name: "Chickpea Protein Snack (200g)",
      price: 25,
      originalPrice: 29.99,
      image: "Chickpea Protein Snack.png",
      category: "snacks",
      description: "Crunchy roasted chickpeas with a perfect blend of spices.",
      features: ['High Fiber', 'Spicy & Crunchy', 'Vegan Friendly', 'Non-GMO'],
      rating: 4.6,
      reviewCount: 187
    },
    {
      id: 3,
      name: "Fruity Energy Bar (Box of 10)",
      price: 59,
      originalPrice: 69.99,
      image: "Fruity Energy Bar.png",
      category: "bars",
      description: "Energy bar packed with dried fruits and nuts for a natural boost.",
      features: ['All-natural', 'No sugars', 'Rich in antioxidants', 'Sustained energy'],
      rating: 4.9,
      reviewCount: 210
    },
    {
      id: 4,
      name: "Nut & Seed Bar (Box of 6)",
      price: 46,
      originalPrice: 52.99,
      image: "Nut & Seed Bar.png",
      category: "bars",
      description: "A satisfying blend of nuts and seeds for sustained energy.",
      features: ['No Artificial Flavors', 'Omega-3 Rich', 'Keto Friendly', 'Crunchy Texture'],
      rating: 4.8,
      reviewCount: 176
    },
    {
      id: 5,
      name: "Vegan Energy Supplement (300g)",
      price: 119,
      originalPrice: 139.99,
      image: "Vegan Energy Supplement.png",
      category: "supplements",
      description: "Plant-based energy supplement with no artificial additives.",
      features: ['Vegan', 'No Added Sugar', 'Natural Caffeine', 'Boosts Immunity'],
      rating: 4.5,
      reviewCount: 132
    },
    {
      id: 6,
      name: "Natural Energy Bar (Pack of 5)",
      price: 56,
      originalPrice: 62.99,
      image: "Natural Energy Bar.png",
      category: "bars",
      description: "Simple ingredients for clean energy without the crash.",
      features: ['Organic Ingredients', 'Low GI', 'No Preservatives', 'Quick Snack'],
      rating: 4.6,
      reviewCount: 150
    },
    {
      id: 7,
      name: "Protein Powder Blend (500g)",
      price: 149,
      originalPrice: 169.99,
      image: "Protein Powder Blend.png",
      category: "supplements",
      description: "Premium protein powder with complete amino acid profile.",
      features: ['Complete Protein', 'Digestive Enzymes', 'Soy-Free', 'No Artificial Colors'],
      rating: 4.7,
      reviewCount: 198
    }
  ];

  const filteredProducts =
    filter === 'all' ? products : products.filter(product => product.category === filter);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    setSuccessMessage(`${product.name} added to cart!`);
    setTimeout(() => setSuccessMessage(null), 2000);
  };

  return (
    <>
      <Helmet>
        <title>NCR Products | Healthy Energy Bars & Supplements</title>
        <meta
          name="description"
          content="Browse our premium collection of natural protein bars, energy supplements, and healthy snacks for your active lifestyle."
        />
      </Helmet>

      {successMessage && (
        <div className="cart-toast">
          {successMessage}
        </div>
      )}

      <main className="products-page">
        <section className="products-header">
          <h1>Our Products</h1>
          <p>Fuel your body with tasty options that keep you energized!</p>

          <div className="filter-controls">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Products
            </button>
            <button
              className={`filter-btn ${filter === 'bars' ? 'active' : ''}`}
              onClick={() => setFilter('bars')}
            >
              Energy Bars
            </button>
            <button
              className={`filter-btn ${filter === 'snacks' ? 'active' : ''}`}
              onClick={() => setFilter('snacks')}
            >
              Protein Snacks
            </button>
            <button
              className={`filter-btn ${filter === 'supplements' ? 'active' : ''}`}
              onClick={() => setFilter('supplements')}
            >
              Supplements
            </button>
          </div>
        </section>

        <section className="products-grid-container">
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={() => handleQuickView(product)}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
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

export default Products;
