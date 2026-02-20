import React from "react";
import "./Productlist.css";

function Productlist({ Recipes, handleClick, onSave }) {
  return (
    <div className="mainproductcontainer">
      {Recipes.length === 0 ? (
        <div className="no_match">
          <h2>No Recipes Found </h2>
        </div>
      ) : (
        <div className="product_container">
          {Recipes.map((r) => (
            <div
              key={r.id}
              className="Product_card"
              onClick={() => handleClick(r)}
            >
              <img src={r.image} alt={r.name} />
              <h2>{r.name}</h2>
              <h3>MealType:{r.mealType}</h3>
              {r.cuisine && <h3>Cuisine:{r.cuisine}</h3>}
              <p>
                {r.rating} <span>{r.reviewCount}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Productlist;
