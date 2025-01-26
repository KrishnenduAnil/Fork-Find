const form = document.getElementById('ingredient-form');
const ingredientsInput = document.getElementById('ingredients');
const recipeResultsDiv = document.getElementById('recipe-results');
const loadingMessageDiv = document.getElementById('loading-message');
const tree = document.querySelector('.tree');  // Tree growing element
const ingredientSelectionDiv = document.getElementById('ingredient-selection');

// To store selected ingredients
let selectedIngredients = [];

// Event listener for ingredient selection
const ingredientImages = document.querySelectorAll('.ingredient');
ingredientImages.forEach(image => {
    image.addEventListener('click', function() {
        const ingredient = this.getAttribute('data-name');

        // Toggle ingredient selection
        if (selectedIngredients.includes(ingredient)) {
            selectedIngredients = selectedIngredients.filter(item => item !== ingredient);
            this.classList.remove('selected');
        } else {
            selectedIngredients.push(ingredient);
            this.classList.add('selected');
        }

        // Update hidden input field with selected ingredients
        ingredientsInput.value = selectedIngredients.join(',');
    });
});

// API key and endpoint
const SPOONACULAR_API_KEY = '073d2f8081944e19b0e4a89ec851cfd4';  // Replace this with your API key
const API_URL = 'https://api.spoonacular.com/recipes/findByIngredients';

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const ingredients = ingredientsInput.value.trim();
    if (ingredients) {
        fetchRecipes(ingredients);
    } else {
        recipeResultsDiv.innerHTML = '<p>Please select at least one ingredient.</p>';
    }
});

// Function to fetch recipes
async function fetchRecipes(ingredients) {
    // Show loading message (tree growing)
    loadingMessageDiv.style.display = 'block';
    tree.classList.add('growing');  // Trigger tree growing animation
    recipeResultsDiv.innerHTML = '';  // Clear previous results

    const url = `${API_URL}?ingredients=${encodeURIComponent(ingredients)}&apiKey=${SPOONACULAR_API_KEY}&number=5`;

    try {
        const response = await fetch(url);

        // Check if the response is ok (status 200-299)
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const recipes = await response.json();

        // Hide loading message once data is fetched
        loadingMessageDiv.style.display = 'none';
        tree.classList.remove('growing');  // Stop tree growing animation

        displayRecipes(recipes);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        loadingMessageDiv.style.display = 'none';  // Hide loading message on error
        tree.classList.remove('growing');  // Stop tree growing animation
        recipeResultsDiv.innerHTML = `<p>Error fetching recipes. ${error.message}</p>`;
    }
}

// Function to display recipes
function displayRecipes(recipes) {
    if (recipes.length === 0) {
        recipeResultsDiv.innerHTML = '<p>No recipes found for the selected ingredients.</p>';
        return;
    }

    const recipeList = document.createElement('ul');

    recipes.forEach(recipe => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        const recipeUrl = `https://spoonacular.com/recipes/${encodeURIComponent(recipe.title)}-${recipe.id}`;
        link.href = recipeUrl;
        link.target = '_blank';
        link.textContent = recipe.title;
        listItem.appendChild(link);
        recipeList.appendChild(listItem);
    });

    recipeResultsDiv.innerHTML = '';  // Clear previous results
    recipeResultsDiv.appendChild(recipeList);
}
