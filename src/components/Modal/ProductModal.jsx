// // src/components/Modal/ProductModal.jsx
// import React from 'react';
// import './ProductModal.css';
// import Button from '../Button/Button';

// const ProductModal = ({ product, onClose, onAddToCart }) => {
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
//       return `/images/products/${imagePath}`;
//     }
    
//     // Fallback
//     return 'https://via.placeholder.com/400x300?text=Image+Not+Found';
//   };

//   return (
//     <div className="product-modal-overlay">
//       <div className="product-modal-container">
//         <button className="close-btn" onClick={onClose} aria-label="Close modal">
//           &times;
//         </button>
        
//         <div className="product-modal-content">
//           <div className="product-image-container">
//             <img 
//               src={getImageSrc(product.image)} 
//               alt={product.name}
//               className="product-image" 
//               loading="lazy"
//               onError={(e) => {
//                 e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
//               }}
//             />
//           </div>
          
//           <div className="product-details">
//             <h2 className="product-name">{product.name}</h2>
//             <p className="product-price">₹{product.price.toLocaleString()}</p>
            
//             <div className="product-description">
//               <h3>Description</h3>
//               <p>{product.description || "Premium quality ingredients for optimal nutrition."}</p>
//             </div>
            
//             <div className="nutrition-facts">
//               <h3>Nutrition Facts</h3>
//               <ul className="nutrition-list">
//                 <li>High in Protein</li>
//                 <li>Natural Ingredients</li>
//                 <li>No Artificial Preservatives</li>
//               </ul>
//             </div>
            
//             <div className="action-buttons">
//               <Button 
//                 variant="primary" 
//                 size="large"
//                 onClick={() => {
//                   onAddToCart(product);
//                   onClose();
//                 }}
//               >
//                 Add to Cart
//               </Button>
//               <Button 
//                 variant="outline" 
//                 size="large"
//                 onClick={onClose}
//               >
//                 Continue Shopping
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductModal;



// src/components/Modal/ProductModal.jsx
import React from 'react';
import './ProductModal.css';
import Button from '../Button/Button';

// ✅ Public fallback image (place inside /public/images/)
const FALLBACK_IMAGE = "/images/not-found.png";

const ProductModal = ({ product, onClose, onAddToCart }) => {
  const getImageSrc = (image) => {
    if (!image) return FALLBACK_IMAGE;

    // 1️⃣ If it's an imported image module
    if (typeof image === "object" && image.default) {
      return image.default;
    }

    // 2️⃣ If it's an online URL
    if (typeof image === "string" && (image.startsWith("http://") || image.startsWith("https://"))) {
      return image;
    }

    // 3️⃣ If it's a filename (stored in public/images/products/)
    return `/images/products/${image}`;
  };

  return (
    <div className="product-modal-overlay">
      <div className="product-modal-container">
        <button className="close-btn" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <div className="product-modal-content">
          <div className="product-image-container">
            <img
              src={getImageSrc(product.image)}
              alt={product.name}
              className="product-image"
              loading="lazy"
              onError={(e) => {
                e.target.src = FALLBACK_IMAGE;
              }}
            />
          </div>

          <div className="product-details">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">₹{product.price.toLocaleString()}</p>

            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description || "Premium quality ingredients for optimal nutrition."}</p>
            </div>

            <div className="nutrition-facts">
              <h3>Nutrition Facts</h3>
              <ul className="nutrition-list">
                <li>High in Protein</li>
                <li>Natural Ingredients</li>
                <li>No Artificial Preservatives</li>
              </ul>
            </div>

            <div className="action-buttons">
              <Button
                variant="primary"
                size="large"
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
              >
                Add to Cart
              </Button>

              <Button
                variant="outline"
                size="large"
                onClick={onClose}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
