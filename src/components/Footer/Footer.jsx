import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className="logo" />
          <p>
            Enjoy delicious meals delivered right to your doorstep with fast and
            reliable service, anytime you crave.
          </p>
          <div className="footer-social-icons">
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
            <img src={assets.facebook_icon} alt="Facebook" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>foodie</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>567-456-236</li>
            <li>foodie@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr />

      <p className="footer-copyright">
      &#169; Foodie 2024 All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
