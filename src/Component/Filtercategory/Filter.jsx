import React, { useState } from "react";
import "./Filter.css";

function Filter({
  categories,
  selectedCategories,
  setSelectedCategories,
  mealTypes,
  selectedMealTypes,
  setSelectedMealTypes
}) {

  const [showCuisine, setShowCuisine] = useState(false);
  const [showMealType, setShowMealType] = useState(false);

  const handleCuisineChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleMealTypeChange = (type) => {
    if (selectedMealTypes.includes(type)) {
      setSelectedMealTypes(selectedMealTypes.filter((t) => t !== type));
    } else {
      setSelectedMealTypes([...selectedMealTypes, type]);
    }
  };

  return (
    <div className="filterBox">

      {/* Cuisine Section */}
      <div className="filterSection">
        <div 
          className="filterHeader"
          onClick={() => setShowCuisine(!showCuisine)}
        >
          <h3>Filter by Cuisine</h3>
          <span className="filter_arrow">{showCuisine ? "^" : ">"}</span>
        </div>

        {showCuisine && (
          <div className="filterContent">
            {categories.map((cat) => (
              <label key={cat} className="checkboxItem">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => handleCuisineChange(cat)}
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Meal Type Section */}
      <div className="filterSection">
        <div 
          className="filterHeader"
          onClick={() => setShowMealType(!showMealType)}
        >
          <h3>Filter by Meal Type</h3>
          <span className="filter_arrow">{showMealType ? "^" : ">"}</span>
        </div>

        {showMealType && (
          <div className="filterContent">
            {mealTypes.map((type) => (
              <label key={type} className="checkboxItem">
                <input
                  type="checkbox"
                  checked={selectedMealTypes.includes(type)}
                  onChange={() => handleMealTypeChange(type)}
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default Filter;
