/*

var unirest = require("unirest");

unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/ingredients/autocomplete?query=toma&number=10")
.header("X-Mashape-Key", "n2HD3Iz3TBmshrhXE6mQYIZQXzTZp1MzLoYjsnbBUzzHmHvcfm")
.header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});


/*

var ingredients = ["Minced Beef%2C+", "Spaghetti Pasta%2C+", "Tomato Puree%2C+", "Carrot%2C+", "Celery%2C+"]
var link = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?"
var apiCall = link + "ingredients=" + ingredients + "$number=10&limitLicense=true&ranking=1"


var getRecipeIds = unirest.get(apiCall)
.header("X-Mashape-Key", "n2HD3Iz3TBmshrhXE6mQYIZQXzTZp1MzLoYjsnbBUzzHmHvcfm")
.header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
  var response = result.status, result.headers, result.body
});

function getRecipeIds() {
  var ingredients = ["Minced Beef%2C+", "Spaghetti Pasta%2C+", "Tomato Puree%2C+", "Carrot%2C+", "Celery%2C+"]
  var link = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?"
  var apiCall = link + "ingredients=" + ingredients + "$number=10&limitLicense=true&ranking=1"
  console.log(apiCall);
  unirest.get(apiCall)
  .header("X-Mashape-Key", "n2HD3Iz3TBmshrhXE6mQYIZQXzTZp1MzLoYjsnbBUzzHmHvcfm")
  .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
  });
}


unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/ingredients/autocomplete?query=toma&number=10")
.header("X-Mashape-Key", "n2HD3Iz3TBmshrhXE6mQYIZQXzTZp1MzLoYjsnbBUzzHmHvcfm")
.header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});

*/
