import React, { useState } from "react";
import RecipeListPage from "./pages/RecipeListPage";
import RecipePage from "./pages/RecipePage";
import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleGoBack = () => {
    setSelectedRecipe(null);
  };

  return (
    <ChakraProvider>
      <h1 style={{

        fontSize: "30px",
        textAlign: "center", marginTop: "20px"
      }}>Recipe App</h1>

      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} onGoBack={handleGoBack} />
      ) : (
        <RecipeListPage onSelectRecipe={handleRecipeSelect} />
      )}
    </ChakraProvider>
  );
}

