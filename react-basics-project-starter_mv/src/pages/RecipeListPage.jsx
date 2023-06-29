import React, { useState } from "react";
import RecipeCard from "../pages/RecipeCard";
import { Flex, Grid, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { data } from "../utils/data";

export default function RecipeListPage({ onSelectRecipe }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRecipes = data.hits.filter(
    (recipe) =>
      recipe.recipe.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.recipe.healthLabels.some((label) =>
        label.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <Flex direction="column" align="center" p={4}>
      <InputGroup w="50%" mb={4}>
        <Input
          type="text"
          placeholder="Search recipes"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </InputGroup>

      {filteredRecipes.length === 0 ? (
        <p>Item is not in the data.js file.</p>
      ) : (
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4} w="100%">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.recipe.label}
              recipe={recipe.recipe}
              onSelectRecipe={onSelectRecipe}
            />
          ))}
        </Grid>
      )}
    </Flex>
  );
}
