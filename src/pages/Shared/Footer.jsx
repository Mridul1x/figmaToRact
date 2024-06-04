import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-subscribe">
        <div>
          <h3>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h3>
        </div>
        <div className="footer-input">
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe to Newsletter</button>
        </div>
      </div>
      <div className="footer-info">
        <div className="footer-about">
          <h4 className="shop-name">SHOP.CO</h4>
          <p>
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <h4>COMPANY</h4>
            <ul>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Works</a>
              </li>
              <li>
                <a href="/">Career</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>HELP</h4>
            <ul>
              <li>
                <a href="/">Customer Support</a>
              </li>
              <li>
                <a href="/">Delivery Details</a>
              </li>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h4>FAQ</h4>
            <ul>
              <li>
                <a href="/">Account</a>
              </li>
              <li>
                <a href="/">Manage Deliveries</a>
              </li>
              <li>
                <a href="/">Orders</a>
              </li>
              <li>
                <a href="/">Payment</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>RESOURCES</h4>
            <ul>
              <li>
                <a href="/">Free eBook</a>
              </li>
              <li>
                <a href="/">Development Tutorial</a>
              </li>
              <li>
                <a href="/">How-to Blog</a>
              </li>
              <li>
                <a href="/">YouTube Playlist</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="footer-payment">
          <img src="/visa.png" alt="Visa" />
          <img src="/mastercard.png" alt="Mastercard" />
          <img src="/paypal.png" alt="Paypal" />
          <img src="/applepay.png" alt="Apple Pay" />
          <img src="/gpay.png" alt="google Pay" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
