import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Header.css';

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

  const images = [
    'header_img.jpg',      // First Image
    'second_image.png',    // Second Image
    'third_image.jpg',     // Third Image
  ];

  // Automatically change slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, [images.length]);

  return (
    <div className="header">
      <div
        className="slider"
        style={{ backgroundImage: `url(${images[currentSlide]})` }}
      >
        <div className="header-contents">
          <h2>
            {currentSlide === 0
              ? 'Order Your Favorite Drinks With Us'
              : currentSlide === 1
              ? 'Discover New Flavors Every Day!'
              : 'Savor Every Sip With Excellence'}
          </h2>
          <p>
            {currentSlide === 0
              ? 'Discover the best beverages for any occasion!'
              : currentSlide === 1
              ? 'Taste the magic of our handpicked selection!'
              : 'Experience the joy of curated drinks made for you!'}
          </p>
          <button onClick={() => navigate('/all-products')}>View Drinks</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
