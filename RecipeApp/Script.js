const API_KEY = "c2518db46f984a908a61ded8998b1782";
const recipeList = document.getElementById("recipe-list");

function displayRecipes(recipes) {
    recipeList.innerHTML = "";

    recipes.forEach(recipe => {
        
        const recipeItem = document.createElement("li");
        recipeItem.classList.add("recipe-item");

        let recipeImg = document.createElement("img");
        recipeImg.src = recipe.image;
        recipeImg.alt = "Recipe Image";

        let recipeTitle = document.createElement("h2");
        recipeTitle.innerText = recipe.title;

        let recipeIngredient = document.createElement("p");
        recipeIngredient.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients.map(ingredient => ingredient.original).join(", ")}`;

        let recipeLink = document.createElement("a");
        recipeLink.href = recipe.sourceUrl;
        recipeLink.innerText = "View Recipe"

        recipeItem.appendChild(recipeImg);
        recipeItem.appendChild(recipeTitle);
        recipeItem.appendChild(recipeIngredient);
        recipeItem.appendChild(recipeLink);
        recipeList.appendChild(recipeItem);

    });
}

async function getRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
    const data = await response.json();

    return data.recipes;
}

async function init() {
    const recipes = await getRecipes();
    displayRecipes(recipes);
}

init();