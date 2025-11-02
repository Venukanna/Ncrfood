


// // src/components/ProductCard/ProductCard.jsx
// import React from 'react';
// import Button from '../Button/Button';
// import './ProductCard.css';

// const ProductCard = ({ product, onQuickView, onAddToCart, showRating = false }) => {
//   // Handle both local and online image URLs, and imported image modules
//   const getImageSrc = (imagePath) => {
//     // If it's an imported image module (has default property)
//     if (imagePath && typeof imagePath === 'object' && imagePath.default) {
//       return imagePath.default;
//     }
    
//     // If it's a string that contains '/src/assets/' (imported image converted to string)
//     if (typeof imagePath === 'string' && imagePath.includes('/src/assets/')) {
//       return imagePath;
//     }
    
//     // If it's an online URL
//     if (typeof imagePath === 'string' && (imagePath.startsWith('http://') || imagePath.startsWith('https://'))) {
//       return imagePath;
//     }
    
//     // If it's a local file path (just filename)
//     if (typeof imagePath === 'string') {
//       return `/images/${imagePath}`;
//     }
    
//     // Fallback
//     return '/images/not-found.png';
//   };

//   const imageSrc = getImageSrc(product.image);

//   // Render star ratings
//   const renderRatingStars = () => {
//     if (!showRating || !product.rating) return null;
    
//     const fullStars = Math.floor(product.rating);
//     const hasHalfStar = product.rating % 1 >= 0.5;
//     const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

//     return (
//       <div className="product-rating">
//         <div className="stars">
//           {[...Array(fullStars)].map((_, i) => (
//             <span key={`full-${i}`} className="star filled">★</span>
//           ))}
//           {hasHalfStar && <span className="star half-filled">★</span>}
//           {[...Array(emptyStars)].map((_, i) => (
//             <span key={`empty-${i}`} className="star">★</span>
//           ))}
//         </div>
//         {product.reviewCount && (
//           <span className="review-count">({product.reviewCount})</span>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="product-card">
//       <div className="product-image-container">
//         <img 
//           src={imageSrc} 
//           alt={product.name} 
//           className="product-image"
//           loading="lazy"
//           onClick={onQuickView}
//           style={{ cursor: 'pointer' }}
//           onError={(e) => {
//             e.target.src = 'not-found.png';
//           }}
//         />
//         <div className="quick-view-overlay">
//           <Button 
//             variant="outline" 
//             size="small"
//             onClick={onQuickView}
//             className="quick-view-btn"
//           >
//             Quick View
//           </Button>
//         </div>
//       </div>
      
//       <div className="product-info">
//         <h3 className="product-name">{product.name}</h3>
        
//         {/* Show discount if originalPrice exists */}
//         {product.originalPrice && (
//           <div className="price-container">
//             <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
//             <span className="current-price">₹{product.price.toLocaleString()}</span>
//             <span className="discount-percent">
//               {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
//             </span>
//           </div>
//         )}
        
//         {/* Regular price display if no originalPrice */}
//         {!product.originalPrice && (
//           <p className="product-price">₹{product.price.toLocaleString()}</p>
//         )}
        
//         {/* Rating display */}
//         {renderRatingStars()}
        
//         <Button 
//           variant="primary" 
//           size="medium"
//           onClick={onAddToCart}
//           className="add-to-cart-btn"
//         >
//           Add to Cart
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// src/components/ProductCard/ProductCard.jsx
import React from 'react';
import Button from '../Button/Button';
import './ProductCard.css';

const ProductCard = ({ product, onQuickView, onAddToCart, showRating = false }) => {

  // Handle different image path types
  const getImageSrc = (imagePath) => {
    if (imagePath && typeof imagePath === 'object' && imagePath.default) {
      return imagePath.default; // imported image module
    }

    if (typeof imagePath === 'string' && imagePath.includes('/src/assets/')) {
      return imagePath; // Vite asset path
    }

    if (typeof imagePath === 'string' && (imagePath.startsWith('http://') || imagePath.startsWith('https://'))) {
      return imagePath; // online image
    }

    if (typeof imagePath === 'string') {
      return `/images/${imagePath}`; // local images in public folder
    }

    return '/images/not-found.png'; // fallback
  };

  const imageSrc = getImageSrc(product.image);

  // Prevent infinite loop for fallback image
  const handleImageError = (e) => {
    if (!e.target.src.includes('not-found.png')) {
      e.target.src = '/images/not-found.png';
    }
  };

  // Render rating stars
  const renderRatingStars = () => {
    if (!showRating || !product.rating) return null;

    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="product-rating">
        <div className="stars">
          {[...Array(fullStars)].map((_, i) => (
            <span key={`full-${i}`} className="star filled">★</span>
          ))}
          {hasHalfStar && <span className="star half-filled">★</span>}
          {[...Array(emptyStars)].map((_, i) => (
            <span key={`empty-${i}`} className="star">★</span>
          ))}
        </div>
        {product.reviewCount && (
          <span className="review-count">({product.reviewCount})</span>
        )}
      </div>
    );
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={imageSrc}
          alt={product.name}
          className="product-image"
          loading="lazy"
          onClick={onQuickView}
          style={{ cursor: 'pointer' }}
          onError={handleImageError}
        />
        <div className="quick-view-overlay">
          <Button
            variant="outline"
            size="small"
            onClick={onQuickView}
            className="quick-view-btn"
          >
            Quick View
          </Button>
        </div>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>

        {product.originalPrice ? (
          <div className="price-container">
            <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
            <span className="current-price">₹{product.price.toLocaleString()}</span>
            <span className="discount-percent">
              {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
            </span>
          </div>
        ) : (
          <p className="product-price">₹{product.price.toLocaleString()}</p>
        )}

        {renderRatingStars()}

        <Button
          variant="primary"
          size="medium"
          onClick={onAddToCart}
          className="add-to-cart-btn"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
