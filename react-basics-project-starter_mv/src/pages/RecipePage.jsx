import React from "react";

import {
    Box,
    Heading,
    Image,
    Badge,
    Stack,
    Text,
    VStack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';

const RecipePage = ({ recipe, onGoBack }) => {
    const {
        label,
        image,
        mealType,
        dishType,
        totalTime,
        dietLabels,
        healthLabels,
        cautions,
        ingredientLines,
        servings,
        totalNutrients,
    } = recipe;

    const nutrients = {
        Energy: totalNutrients.ENERC_KCAL.quantity,
        Protein: totalNutrients.PROCNT.quantity,
        Fat: totalNutrients.FAT.quantity,
        Carbs: totalNutrients.CHOCDF.quantity,
        Cholesterol: totalNutrients.CHOLE.quantity,
        Sodium: totalNutrients.NA.quantity,
    };

    return (
        <Box p={4}>
            <Button
                mb={4}
                onClick={onGoBack}
                color={useColorModeValue('gray.600', 'gray.300')}
            >
                Go Back
            </Button>

            <VStack spacing={4} align="start">
                <Image src={image} alt={label} w="100%" h="300px" objectFit="cover" />

                <Stack spacing={2}>
                    <Heading>{label}</Heading>

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

                    <Stack direction="row" spacing={2}>
                        {healthLabels.includes('Vegan') && (
                            <Badge variant="solid" colorScheme="green">
                                Vegan
                            </Badge>
                        )}

                        {healthLabels.includes('Vegetarian') && (
                            <Badge variant="solid" colorScheme="green">
                                Vegetarian
                            </Badge>
                        )}
                    </Stack>

                    <Text>
                        <strong>Total Cooking Time:</strong> {totalTime} minutes
                    </Text>

                    <Text>
                        <strong>Servings:</strong> {servings}
                    </Text>

                    <Stack spacing={2}>
                        <Text fontWeight="bold">Ingredients:</Text>
                        {ingredientLines.map((ingredient, index) => (
                            <Text key={index}>{ingredient}</Text>
                        ))}
                    </Stack>

                    <Stack spacing={2}>
                        <Text fontWeight="bold">Total Nutrients:</Text>
                        {Object.entries(nutrients).map(([key, value]) => (
                            <Text key={key}>
                                {key}: {value} {totalNutrients[key]?.unit}
                            </Text>
                        ))}

                    </Stack>
                </Stack>
            </VStack>
        </Box>
    );
};

export default RecipePage;
