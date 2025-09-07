import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Button from '../Button/Button';
import './Cart.css';

export const Cart = () => {
  const {
    cart,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  } = useContext(CartContext);

  // Handle both local and online image URLs, and imported image modules
  const getImageSrc = (imagePath) => {
    // If it's an imported image module (has default property)
    if (imagePath && typeof imagePath === 'object' && imagePath.default) {
      return imagePath.default;
    }
    
    // If it's a string that contains '/src/assets/' (imported image converted to string)
    if (typeof imagePath === 'string' && imagePath.includes('/src/assets/')) {
      return imagePath;
    }
    
    // If it's an online URL
    if (typeof imagePath === 'string' && (imagePath.startsWith('http://') || imagePath.startsWith('https://'))) {
      return imagePath;
    }
    
    // If it's a local file path (just filename)
    if (typeof imagePath === 'string') {
      return `/images/products/${imagePath}`;
    }
    
    // Fallback
    return 'https://via.placeholder.com/100x80?text=Image+Not+Found';
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-empty-content">
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added any products to your cart yet.</p>
          <Link to="/products">
            <Button variant="primary" size="large">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <p className="cart-summary">
          {cartCount} {cartCount === 1 ? 'item' : 'items'} • ₹{cartTotal.toLocaleString()}
        </p>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img 
                  src={getImageSrc(item.image)} 
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/100x80?text=Image+Not+Found';
                  }}
                />
              </div>
              
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-price">₹{item.price.toLocaleString()}</p>
              </div>
              
              <div className="item-quantity">
                <Button 
                  variant="outline" 
                  size="small"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </Button>
                <span className="quantity-display">{item.quantity}</span>
                <Button 
                  variant="outline" 
                  size="small"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </Button>
              </div>
              
              <div className="item-total">
                <p>₹{(item.price * item.quantity).toLocaleString()}</p>
              </div>
              
              <div className="item-actions">
                <Button 
                  variant="outline" 
                  size="small"
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cart-summary-sidebar">
          <div className="summary-card">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal ({cartCount} items):</span>
              <span>₹{cartTotal.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>₹{cartTotal.toLocaleString()}</span>
            </div>
            
            <div className="cart-actions">
              <Button variant="primary" size="large" className="checkout-btn">
                Proceed to Checkout
              </Button>
              <Button 
                variant="outline" 
                size="medium" 
                onClick={clearCart}
                className="clear-cart-btn"
              >
                Clear Cart
              </Button>
            </div>
            
            <Link to="/products" className="continue-shopping">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};