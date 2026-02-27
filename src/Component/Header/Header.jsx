import React from "react";
import "./Header.css";

function Header({
  setSelectedProduct,
  setviewSaveditems,
  savedItems,
  searchTerm,
  setSearchTerm,
  viewProfile,
  setViewProfile
}) {

  const handleProfileClick = () => {
    setViewProfile(!viewProfile); // toggle logic
    setviewSaveditems(false);
    setSelectedProduct(null);
  };

  return (
    <div className="Header">
      <div className="header_container">
        <h1
          className="logo"
          onClick={() => {
            setviewSaveditems(false);
            setViewProfile(false);
          }}
        >
          LOGO
        </h1>

        <div className="search_bar">
          <input
            type="text"
            placeholder="Enter the Recipes name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>🔎︎</button>
        </div>

        <button
          onClick={() => {
            setSelectedProduct(null);
            setviewSaveditems(true);
            setViewProfile(false);
          }}
        >
          Saved Items ({savedItems.length})
        </button>

        <button onClick={handleProfileClick}>
          {viewProfile ? "Close Profile" : "Profile"}
        </button>
      </div>
    </div>
  );
}

export default Header;