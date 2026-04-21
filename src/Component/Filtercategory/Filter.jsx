import React, { useState } from "react";
import "./Filter.css";

function Filter({
  categories,
  selectedCategories,
  setSelectedCategories,
  mealTypes,
  selectedMealTypes,
  setSelectedMealTypes,
  difficulty,
  selectedDifficulty,
  setSelectedDifficulty,
  ratings,
  selectedRatings,
  setSelectedRatings,
  cookTimeMinutes,
  selectedCookTimeMinutes,
  setSelectedCookTimeMinutes
}) {

  const [showCuisine, setShowCuisine] = useState(false);
  const [showMealType, setShowMealType] = useState(false);
  const [showDifficulty, setShowDifficulty] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [showCookTime, setShowCookTime] = useState(false);

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
  const handleDifficultyChange = (level) => {
    if (selectedDifficulty.includes(level)) {
      setSelectedDifficulty(selectedDifficulty.filter((d) => d !== level));
    } else {
      setSelectedDifficulty([...selectedDifficulty, level]);
    }
  };

  const handleRatingChange = (rating) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter((r) => r !== rating));
    } else {
      setSelectedRatings([...selectedRatings, rating]);
    }
  };

  const handleCookTimeChange = (cookTime) => {
    if (selectedCookTimeMinutes.includes(cookTime)) {
      setSelectedCookTimeMinutes(selectedCookTimeMinutes.filter((c) => c !== cookTime));
    } else {
      setSelectedCookTimeMinutes([...selectedCookTimeMinutes, cookTime]);
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
      <div className="filterSection">
        <div 
          className="filterHeader"
          onClick={() => setShowDifficulty(!showDifficulty)}
        >
          <h3>Filter by Difficulty</h3>
          <span className="filter_arrow">{showDifficulty ? "^" : ">"}</span>
        </div>

        {showDifficulty && (
          <div className="filterContent">
            {difficulty.map((level) => (
              <label key={level} className="checkboxItem">
                <input
                  type="checkbox"
                  checked={selectedDifficulty.includes(level)}
                  onChange={() => handleDifficultyChange(level)}
                />
                <span>{level}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating Section */}
      <div className="filterSection">
        <div 
          className="filterHeader"
          onClick={() => setShowRating(!showRating)}
        >
          <h3>Filter by Rating</h3>
          <span className="filter_arrow">{showRating ? "^" : ">"}</span>
        </div>

        {showRating && (
          <div className="filterContent">
            {ratings.map((rating) => (
              <label key={rating} className="checkboxItem">
                <input
                  type="checkbox"
                  checked={selectedRatings.includes(rating)}
                  onChange={() => handleRatingChange(rating)}
                />
                <span>{rating} Stars</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Cook Time Section */}
      <div className="filterSection">
        <div 
          className="filterHeader"
          onClick={() => setShowCookTime(!showCookTime)}
        >
          <h3>Filter by Cook Time</h3>
          <span className="filter_arrow">{showCookTime ? "^" : ">"}</span>
        </div>

        {showCookTime && (
          <div className="filterContent">
            {cookTimeMinutes.map((cookTime) => (
              <label key={cookTime} className="checkboxItem">
                <input
                  type="checkbox"
                  checked={selectedCookTimeMinutes.includes(cookTime)}
                  onChange={() => handleCookTimeChange(cookTime)}
                />
                <span>{cookTime} minutes</span>
              </label>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default Filter;
