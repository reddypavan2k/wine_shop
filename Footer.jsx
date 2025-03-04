import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        {/* Left Section */}
        <div className='footer-content-left'>
          <img src={assets.logo} alt="" />
          <p>Thank You</p>
          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.facebook_icon} alt="" />
          </div>
        </div>

        {/* Center Section */}
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className='footer-content-right'>
          <h2>About Us</h2>
          <ul>
            <li>+1 6143321793</li>
            <li>beachdiscountbeverages@gmail.com</li>
          </ul>
          <h3>Address</h3> {/* Added Address Section */}
          <ul>
            <li>2204 North Kings Hwy.</li>
            <li>Myrtle Beach, SC 29577</li>
          </ul>
          <h3>Opening Hours</h3> {/* Added Opening Hours */}
          <ul>
            <li>Mon-Sat: 9am-7pm</li>
            <li>Closed Sundays</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className='footer-copyright'>
        © 2025 Beach Discount Beverages. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
