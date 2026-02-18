import React from "react";
import "./Footer.css";

function Footer({ setSelectedProduct, setviewSaveditems }) {
  const year = new Date().getFullYear();// Get the current year

  return (
    <footer className="footer">
      <div className="footerContainer">

        {/* Brand Section */}
        <div className="footerSection">
          <h2 className="footerLogo">RecipeFinder 🍲</h2>
          <p className="footerText">
            Discover delicious recipes from around the world.
            Filter by cuisine, meal type, and save your favorites.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footerSection">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => {
              setSelectedProduct(null);
              setviewSaveditems(false);
            }}>
              Home
            </li>
            <li onClick={() => {
              setSelectedProduct(null);
              setviewSaveditems(true);
            }}>
              Saved Items
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footerSection">
          <h3>About</h3>
          <p className="footerText">
            Built using React & DummyJSON API.
          </p>
        </div>

      </div>

      <div className="footerBottom">
        © {year} RecipeFinder. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
