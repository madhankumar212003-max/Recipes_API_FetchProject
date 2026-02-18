import React from "react";
import "./Productlist.css";

function SelectedProduct({ setSelectedProduct, selectedProduct, Recipes, onSave }) {
  return (
    <div className="selected_Product">
      <div>
        <img src={selectedProduct.image} alt={selectedProduct.name} />
      </div>
      <div className="selectedproductdiscription">
        <button className="close_btn" onClick={() => setSelectedProduct(null)}>x</button>
        <h2>{selectedProduct.name}</h2>
        <div className="selectedproductdetails">
          <p>MealType:<span>{selectedProduct.mealType}</span></p>
          {selectedProduct.cuisine && <p>Cuisine:<span>{selectedProduct.cuisine}</span></p>} 
          <p>Difficulty:<span>{selectedProduct.difficulty}</span></p>
        </div>
        <h3>Ingredients</h3>
        <ul>
          {selectedProduct.ingredients.map((ingredients, index) => (
            <li key={index}>{ingredients}</li>
          ))}
        </ul>
         <h3>Instructions:</h3>
        <ul>
          {selectedProduct.instructions.map((inst, index) => (
            <li key={index}>{inst}</li>
          ))}
        </ul>
        <button onClick={() => onSave(selectedProduct)}> Save</button>
      </div>
    </div>
  );
}

export default SelectedProduct;
