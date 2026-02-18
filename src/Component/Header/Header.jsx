import React from "react";
import "./Header.css";

function Header({ setSelectedProduct, setviewSaveditems, savedItems,searchTerm, setSearchTerm }) {
  return (
    <div className="Header">
      <div className="header_container">
        <h1 className="logo" onClick={() => setviewSaveditems(false)}>LOGO</h1>

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
          }}
        >
          Saved Items ({savedItems.length})
        </button>
      </div>
    </div>
  );
}

export default Header;
