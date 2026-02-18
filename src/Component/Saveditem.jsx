import React from "react";
import "./Productlist.css";

function Saveditem({ 
  savedItems, 
  removeItem, 
  setviewSaveditems,
  setSelectedProduct
}) {

  const handleOpenProduct = (item) => {
    setSelectedProduct(item);
    setviewSaveditems(false);
  };

  return (
    <div className="saveditems_container">
      <h2>Saved Recipes</h2>

      <div className="saveditemtop">
        {/* Back Button */}
        <button 
          className="back_btn" 
          onClick={() => setviewSaveditems(false)}
        >
          ← Back to Recipes
        </button>
      </div>

      <div className="saved_container">
        {savedItems.length === 0 ? (
          <p>No saved recipes yet</p>
        ) : (
          savedItems.map((item) => (
            <div
              key={item.id}
              className="saved_card"
              onClick={() => handleOpenProduct(item)}
            >
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>

              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent card click
                  removeItem(item.id);
                }}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Saveditem;
