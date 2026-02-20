import React, { useState, useEffect } from "react";
import "./App.css";
import Productlist from "./Component/Productlist";
import SelectedProduct from "./Component/SelectedProduct";
import Saveditem from "./Component/Saveditem";
import Header from "./Component/Header/Header";
import Filter from "./Component/Filtercategory/Filter";
import Footer from "./Component/Footer/Footer";

function App() {
  const [Recipes, setRecipes] = useState([]); // State to hold all recipes
  const [selectedProduct, setSelectedProduct] = useState(null); // State to hold the currently selected recipe
  const [savedItems, setSavedItems] = useState([]); // State to hold saved recipes
  const [viewSaveditems, setviewSaveditems] = useState(false); // State to toggle between recipe list and saved items view
  const [categories, setCategories] = useState([]); // State to hold unique cuisine categories
  const [selectedCategories, setSelectedCategories] = useState([]); // State to hold selected cuisine filters
  const [mealTypes, setMealTypes] = useState([]); // State to hold unique meal types
  const [selectedMealTypes, setSelectedMealTypes] = useState([]); // State to hold selected meal type filters
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the current search term

  useEffect(() => {
    const fetchusers = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        setRecipes(data.recipes);
        console.log(data.recipes);

        // Extract unique cuisines
        const uniqueCategories = [
          // Use a Set to get unique values
          ...new Set(data.recipes.map((item) => item.cuisine)),
        ];
        setCategories(uniqueCategories);
        // Extract unique meal types
        const uniqueMealTypes = [
          // Use a Set to get unique values from all mealType arrays
          ...new Set(data.recipes.flatMap((item) => item.mealType || [])), // Handle cases where mealType might be undefined
        ];
        setMealTypes(uniqueMealTypes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchusers();
  }, []);

  const handleClick = (product) => {
    // Set the selected product and switch to the product details view
    setSelectedProduct(product);
    setviewSaveditems(false);
  };
  // Check if the product is already saved to avoid duplicates
  const handleSave = (product) => {
    const exists = savedItems.find((item) => item.id === product.id);
    if (!exists) {
      setSavedItems([...savedItems, product]);
    }
  };
  // Remove item from saved items based on id
  const removeItem = (id) => {
    setSavedItems(savedItems.filter((item) => item.id !== id));
  };
  // Filter recipes based on selected categories, meal types, and search term
  const filteredRecipes = Recipes.filter((recipe) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(recipe.cuisine);

    const matchesMealType =
      selectedMealTypes.length === 0 ||
      recipe.mealType?.some((type) => selectedMealTypes.includes(type));

    const matchesSearch = recipe.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesMealType && matchesSearch;// Return true if the recipe matches all filters and search term
  });
  const handleMealTypeChange = (type) => {
    // Toggle meal type selection
    if (selectedMealTypes.includes(type)) {
      setSelectedMealTypes(selectedMealTypes.filter((t) => t !== type));
    } else {
      setSelectedMealTypes([...selectedMealTypes, type]);
    }
  };

  return (
    <div>
      <Header
        setSelectedProduct={setSelectedProduct}
        setviewSaveditems={setviewSaveditems}
        savedItems={savedItems}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {selectedProduct ? (
        <SelectedProduct
          setSelectedProduct={setSelectedProduct}
          selectedProduct={selectedProduct}
          Recipes={Recipes}
          onSave={handleSave}
        />
      ) : viewSaveditems ? (
        <Saveditem
          savedItems={savedItems}
          removeItem={removeItem}
          setviewSaveditems={setviewSaveditems}
          setSelectedProduct={setSelectedProduct}
        />
      ) : (
        <div className="mainContainer">
          <aside>
            <Filter
              categories={categories}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              mealTypes={mealTypes}
              selectedMealTypes={selectedMealTypes}
              setSelectedMealTypes={setSelectedMealTypes}
              handleMealTypeChange={handleMealTypeChange}
            />
          </aside>

          <Productlist
            Recipes={filteredRecipes}
            handleClick={handleClick}
            onSave={handleSave}
          />
        </div>
      )}
      <Footer
        setSelectedProduct={setSelectedProduct}
        setviewSaveditems={setviewSaveditems}
      />
    </div>
  );
}

export default App;
