import React from "react";
import { FiChevronRight } from "react-icons/fi";

import {
    Box,
    Image,
    Badge,
    Text,
    Stack,
    Flex,
    IconButton,
    useColorModeValue,
    Icon,
} from "@chakra-ui/react";

const RecipeCard = ({ recipe, onSelectRecipe }) => {
    const {
        label,
        image,
        dietLabels,
        cautions,
        mealType,
        dishType,
        healthLabels,
    } = recipe;

    const handleClick = () => {
        onSelectRecipe(recipe);
    };

    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            cursor="pointer"
            transition="all 0.3s ease"
            _hover={{ transform: "scale(1.02)" }}
            onClick={handleClick}
            width="300px" // Set a fixed width for the card
            height="400px" // Set a fixed height for the card
        >
            <Image
                src={image}
                alt={label}
                w="100%"
                h="200px"
                objectFit="cover"
            />

            <Box p="4">
                <Stack spacing={2}>
                    <Text fontWeight="bold" fontSize="xl">
                        {label}
                    </Text>

                    <Flex justifyContent="space-between">
                        <Stack direction="row" spacing={2}>
                            {dietLabels.length > 0 && (
                                <Badge variant="outline" colorScheme="teal">
                                    {dietLabels[0]}
                                </Badge>
                            )}

                            {cautions.length > 0 && (
                                <Badge variant="outline" colorScheme="red">
                                    {cautions[0]}
                                </Badge>
                            )}

                            <Badge variant="outline" colorScheme="blue">
                                {mealType}
                            </Badge>

                            <Badge variant="outline" colorScheme="purple">
                                {dishType}
                            </Badge>
                        </Stack>
                        <Icon
                            variant="ghost"
                            aria-label="View Recipe"
                            onClick={handleClick}
                            as={FiChevronRight}
                        />
                    </Flex>

                    <Stack direction="row" spacing={2}>
                        {healthLabels.includes("Vegan") && (
                            <Badge variant="solid" colorScheme="green">
                                Vegan
                            </Badge>
                        )}

                        {healthLabels.includes("Vegetarian") && (
                            <Badge variant="solid" colorScheme="green">
                                Vegetarian
                            </Badge>
                        )}
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
};

export default RecipeCard;
