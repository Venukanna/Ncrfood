// // src/components/Header/Header.jsx
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../../context/CartContext';
// import logoImg from '../../assets/images/logo-img.png';
// import './Header.css';

// const Header = () => {
//   const { cartCount } = useContext(CartContext);

//   return (
//     <header className="header-container">
//       <div className="logo-wrapper">
//         <Link to="/" className="logo-link">
//           <img 
//             src={logoImg} 
//             alt="NCR Healthy Energy Logo" 
//             className="logo-img"
//           />
//           <span className="logo-text">NCR Healthy Energy</span>
//         </Link>
//       </div>
      
//       <nav className="main-nav">
//         <ul className="nav-list">
//           <li className="nav-item">
//             <Link to="/" className="nav-link">Home</Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/products" className="nav-link">Products</Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/about" className="nav-link">About</Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/contact" className="nav-link">Contact</Link>
//           </li>
//         </ul>
//       </nav>
      
//       <div className="cart-icon">
//         <Link to="/cart" className="cart-link">
//           <svg className="cart-svg" viewBox="0 0 24 24">
//             <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
//           </svg>
//           <span className="cart-count">{cartCount}</span>
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../../context/CartContext';
// import logoImg from '../../assets/images/logo-img.png';
// import './Header.css';

// const Header = () => {
//   const { cartCount } = useContext(CartContext);
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="header-container">
//       <div className="logo-wrapper">
//         <Link to="/" className="logo-link">
//           <img 
//             src={logoImg} 
//             alt="NCR Healthy Energy Logo" 
//             className="logo-img"
//           />
//           <span className="logo-text">NCR Healthy Energy</span>
//         </Link>

//         {/* Hamburger toggle - visible only in mobile */}
//         <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//           ☰
//         </button>
//       </div>

//       <nav className={`main-nav ${menuOpen ? 'mobile-open' : ''}`}>
//         <ul className="nav-list">
//           <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
//           <li className="nav-item"><Link to="/products" className="nav-link">Products</Link></li>
//           <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
//           <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
//         </ul>
//       </nav>

//       <div className="cart-icon">
//         <Link to="/cart" className="cart-link">
//           <svg className="cart-svg" viewBox="0 0 24 24">
//           <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
//           </svg>
//           <span className="cart-count">{cartCount}</span>
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;

// 
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import logoImg from '../../assets/images/logo-img.png';
import './Header.css';

const Header = () => {
  const { cartCount } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="header-container">
      <div className="logo-wrapper">
        <Link to="/" className="logo-link">
          <img src={logoImg} alt="NCR Healthy Energy Logo" className="logo-img" />
          <span className="logo-text">NCR Healthy Energy</span>
        </Link>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      <nav className={`main-nav ${menuOpen ? 'mobile-open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/products" className="nav-link">Products</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>

          {/* Show login button inside menu in mobile */}
          <li className="nav-item mobile-login-btn">
            <button className="login-btn" onClick={handleLoginLogout}>
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>
          </li>
        </ul>
      </nav>

      <div className="header-actions">
        <div className="cart-icon">
          <Link to="/cart" className="cart-link">
            <svg className="cart-svg" viewBox="0 0 24 24">
              <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
            </svg>
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>

        {/* Show login button only on desktop */}
        <button className="login-btn desktop-login-btn" onClick={handleLoginLogout}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    </header>
  );
};

export default Header;
