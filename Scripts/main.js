/* var unirest = require('unirest');

/* Storage */

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

/* in date test function */

function inDate() {
  if (mm > useBy2) { /* defining out of date logic */
    return false;
  }
  else if (dd > useBy1 && mm >= useBy2) {
    return false;
  }
  else if (yyyy > useBy3 + 2000 + /*>>>*/ 3 /* maximum number of years accepted for food useful life after purchase */) {
    return false;
  }
  else {
    return true;
  }
}

/* Variables */

recipeTitles = "";
var ingredients = "";
var rowItem = "";
var foodItem = "";
var myFood = [];
var fullList = "";
var printList = [];
var weight = "";

/* Getting todays date */

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
}

if(mm<10) {
    mm = '0'+mm
}

var todayDate = dd + '/' + mm + '/' + yyyy;

/* Adding a new food item to the current food list */

function addItem() {
  /* creating food detail variables */
  var foodItem = document.getElementById("foodItem1").value;
  var useByDate1 = document.getElementById("useByDate1").value;
  var useByDate2 = document.getElementById("useByDate2").value;
  var useByDate3 = document.getElementById("useByDate3").value;
  var useByDate = document.getElementById("useByDate1").value + '/' + document.getElementById("useByDate2").value + '/' + document.getElementById("useByDate3").value;
  var foodAmount = document.getElementById("amount").value;
  var storageType = document.getElementById("storageType").value;
  if (foodItem === "") { /* Accepting user inputs by setting parameters */
    alert("You have not entered the name of your food");
  }
  else if (useByDate1 > 31 || useByDate1 < 0) { /* Accepting user date inputs */
    alert("You have not entered a valid day");
  }
  else if (useByDate2 > 12 || useByDate2 < 0) {
    alert("You have not entered a valid month");
  }
  else if (useByDate3 < 18) {
    alert("That item went off a long time ago!");
  }
  else if (useByDate3 > 30) {
    alert("You have not entered a valid year - eg. for 2018 enter '18'");
  }
  else if (foodAmount < 0) {
    alert("You have not entered a valid amount");
  }
  else {
    function Food(name, useBy1, useBy2, useBy3, amount, storage) { /* creating a food object */
      this.name = name;
      this.useBy = useBy1 + '/' + useBy2 + '/' + useBy3;
      this.amount = amount;
      this.storageType = storageType;
    }
    var newItem = new Food(foodItem, useByDate1, useByDate2, useByDate3, foodAmount, storageType);
    myFood.push( newItem );
    /* remove comments to test that the list to be stored is built correctly console.log(myFood); */
  }
  if (myFood != null && myFood.length > 0) { /* printing new food list */
    for (var i=0; i<myFood.length; i++) {
      rowItem +=
      "<tr>" +
        "<td>" + (myFood[i].name) + "</td>" +
        "<td>" + (myFood[i].useBy) + "</td>" +
        "<td>" + (myFood[i].amount) + "</td>" +
        "<td>" + (myFood[i].storageType) + "</td>" +
      "</tr>"
      document.getElementById("display").innerHTML = rowItem;
      /* remove comments for test of printed rows console.log(rowItem); */
    }
    rowItem = "";
    }
  else {
    document.getElementById("display").innerHTML = "Add items to your list...";
  }
  console.log(myFood);
}

/* Submitting list (this needs to be sent to the server at some point...) */

function submitList() {
    localStorage["myFood"] = JSON.stringify(myFood);
    window.location = "myList.html";
}

/* myList Page */

/* Showing existing list (if any) - does this need to come from a server? */

function showList() {
  myFood = JSON.parse(localStorage.getItem("myFood"));
  if (myFood != null && myFood.length > 0) {
    for (var i=0; i<myFood.length; i++) {
      rowItem +=
      "<tr>" +
        "<td>" + (myFood[i].name) + "</td>" +
        "<td>" + (myFood[i].useBy) + "</td>" +
        "<td>" + (myFood[i].amount) + "</td>" +
        "<td>" + (myFood[i].storageType) + "</td>" +
      "</tr>";
    }
  console.log(rowItem);
  document.getElementById("myFoodList").innerHTML = rowItem;
  rowItem = "";
  }
  else {
    document.getElementById("myFoodList").innerHTML = "You have no items in your list";
  }
}

/* Remove all items from the users list - this should probably have an alert that
informs the user that all food will be removed from the app */

function clearList() {
  window.localStorage.clear();
  window.location = "createList.html";
}

/* add more items to a food list */

function addMore() {
  window.location = "editList.html";
}

/* Edit Page - show current list - this needs to come from a server */

function showCurrentList() {
  myFood = JSON.parse(localStorage.getItem("myFood"));
  console.log(myFood);
  if (myFood != null) {
      document.getElementById("display").innerHTML = "<p>" + myFood + "</p>";
    }
  else {
    document.getElementById("display").innerHTML = "You do not have any items in your list";
  }
}


function addNewItem() {
  /* creating food detail variables */
  var foodItem = document.getElementById("foodItem1").value;
  var useByDate1 = document.getElementById("useByDate1").value;
  var useByDate2 = document.getElementById("useByDate2").value;
  var useByDate3 = document.getElementById("useByDate3").value;
  var useByDate = document.getElementById("useByDate1").value + '/' + document.getElementById("useByDate2").value + '/' + document.getElementById("useByDate3").value;
  var foodAmount = document.getElementById("amount").value;
  var storageType = document.getElementById("storageType").value;
  if (foodItem === "") { /* Accepting user inputs by setting parameters */
    alert("You have not entered the name of your food");
  }
  else if (useByDate1 > 31 || useByDate1 < 0) { /* Accepting user date inputs */
    alert("You have not entered a valid day");
  }
  else if (useByDate2 > 12 || useByDate2 < 0) {
    alert("You have not entered a valid month");
  }
  else if (useByDate3 < 18) {
    alert("That item went off a long time ago!");
  }
  else if (useByDate3 > 30) {
    alert("You have not entered a valid year - eg. for 2018 enter '18'");
  }
  else if (foodAmount < 0) {
    alert("You have not entered a valid amount");
  }
  else {
    function Food(name, useBy1, useBy2, useBy3, amount, storage) { /* creating a food object */
      this.name = name;
      this.useBy = useBy1 + '/' + useBy2 + '/' + useBy3;
      this.amount = amount;
      this.storageType = storageType;
    }
    var newItem = new Food(foodItem, useByDate1, useByDate2, useByDate3, foodAmount, storageType);
    myFood.push( newItem );
    console.log(myFood);
  }
  if (myFood != null && myFood.length > 0) { /* printing new  item to existing food list */
    for (var i=0; i<myFood.length; i++) {
      rowItem +=
      "<tr>" +
        "<td>" + (myFood[i].name) + "</td>" +
        "<td>" + (myFood[i].useBy) + "</td>" +
        "<td>" + (myFood[i].amount) + "</td>" +
        "<td>" + (myFood[i].storageType) + "</td>" +
      "</tr>"
      document.getElementById("myFoodList").innerHTML = rowItem;
      /* remove comments for test of printed rows console.log(rowItem); */
    }
    rowItem = "";
    }
  else {
    document.getElementById("display").innerHTML = "Add items to your list...";
  }
  console.log(myFood);
}

/* GET recipes API call with parameters */ // GET RECIPE BUTTON PRESSED ******

function getRecipes() {
  console.log(myFood);
  function formatParams(params) { // setting API parameters
    return "?" + Object
      .keys(params)
      .map(function(key){
        return key + "=" + params[key]
      })
      .join("&")
  }

  for (var i=0; i<myFood.length; i++) {
    ingredients += myFood[i].name + "%2C"
    console.log(ingredients);
  }

  var endpoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients"
  var params = {
    ingredients: ingredients, //A comma-separated list of ingredients that the recipes should contain.
    number: "5", //The maximal number of recipes to return (default = 5).
    ranking: "2", //Whether to maximize used ingredients (1) or minimize missing ingredients (2) first.
  }

  var url = endpoint + formatParams(params)
  console.log(url);
  myFood = JSON.parse(localStorage.getItem("myFood"));
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         // document is ready
          var response = xhttp.responseText;
          console.log("ok"+response);
          response = JSON.parse(response);
          console.log(response.length);
          for (var i=0; i<response.length; i++) { //pulling out response titles
            recipeTitles +=
            "<tr>" +
              "<td>" + (response[i].title) + "</td>" +
            "</tr>"
            console.log(recipeTitles);
            document.getElementById("recipeOptions").innerHTML = recipeTitles;
          }
      }
  };
  xhttp.open("GET", url, true, "jonathanmspencer@gmail.com", "Wellington1");
  xhttp.setRequestHeader("X-Mashape-Key", "n2HD3Iz3TBmshrhXE6mQYIZQXzTZp1MzLoYjsnbBUzzHmHvcfm")
  xhttp.setRequestHeader("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
  xhttp.send();
}

/*
for (var i = 0; i < response.length; i++) {
    var object = arrayOfObjects[i];
    for (var property in object) {
        alert('item ' + i + ': ' + property + '=' + object[property]);
    }
    // If property names are known beforehand, you can also just do e.g.
    // alert(object.id + ',' + object.Title);
}

/*
[{
  "id":526435,
  "title":"Spanish Spaghetti",
  "image":"https://spoonacular.com/recipeImages/526435-312x231.jpg",
  "imageType":"jpg",
  "usedIngredientCount":4,
  "missedIngredientCount":3,
  "likes":16
},
{
  "id":941866,
  "title":"One-Pot Spaghetti and Meat Sauce (Stove-Top )",
  "image":"https://spoonacular.com/recipeImages/941866-312x231.jpg",
  "imageType":"jpg",
  "usedIngredientCount":4,
  "missedIngredientCount":3,
  "likes":1
},
{
  "id":365949,
  "title":"Italian Beef with Spaghetti",
  "image":"https://spoonacular.com/recipeImages/365949-312x231.jpg",
  "imageType":"jpg",
  "usedIngredientCount":4,
  "missedIngredientCount":3,
  "likes":0
},
{
  "id":936338,
  "title":"One-Pot Spaghetti and Meat Sauce (Stove-Top )",
  "image":"https://spoonacular.com/recipeImages/936338-312x231.jpg",
  "imageType":"jpg",
  "usedIngredientCount":4,
  "missedIngredientCount":3,
  "likes":0
},
{
  "id":415791,
  "title":"Taco Spaghetti",
  "image":"https://spoonacular.com/recipeImages/415791-312x231.jpg",
  "imageType":"jpg",
  "usedIngredientCount":4,
  "missedIngredientCount":3,
  "likes":0
}]



link: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=5&ranking=1",

/*

var url = "bla.php";
var params = "somevariable=somevalue&anothervariable=anothervalue";
var http = new XMLHttpRequest();

http.open("GET", url+"?"+params, true);
http.onreadystatechange = function()
{
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(null);

/*

response = unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=5&ranking=1",
  headers={
    "X-Mashape-Key": "n2HD3Iz3TBmshrhXE6mQYIZQXzTZp1MzLoYjsnbBUzzHmHvcfm",
    "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"
  }
)

GET /recipes/findByIngredients?ingredients=steak&amp;number=5&amp;ranking=1 HTTP/1.1
Host: spoonacular-recipe-food-nutrition-v1.p.mashape.com
X-Mashape-Key: n2HD3Iz3TBmshrhXE6mQYIZQXzTZp1MzLoYjsnbBUzzHmHvcfm
X-Mashape-Host: spoonacular-recipe-food-nutrition-v1.p.mashape.com
Cache-Control: no-cache
Postman-Token: 9135a2e7-d351-4d3c-abb9-ebdd87ec2310

*/

//////
/*

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
        var response = xhttp.responseText;
        console.log("ok"+response);
    }
};
xhttp.open("GET", "your url", true);

xhttp.send();

*/

///




/* connecting to API - setting up HTTP request

unirest.post('http://mockbin.com/request')
.headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
.send({ "parameter": 23, "foo": "bar" })
.end(function (response) {
  console.log(response.body);
});

/* API call for list of recipe IDs  https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// create the apiCall link
var ingredients = ["Minced Beef%2C+", "Spaghetti Pasta%2C+", "Tomato Puree%2C+", "Carrot%2C+", "Celery%2C+"];
var link = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?";
var apiCall = link + "ingredients=" + ingredients + "$number=10&limitLicense=true&ranking=1";

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'apiCall', true);

request.onload = function () {
  // Begin accessing JSON data here
  }

// Send request
request.send();

// Begin accessing JSON data here
var data = JSON.parse(this.response);

if (request.status >= 200 && request.status < 400) {
  data.forEach(item => {
    console.log(item.id);
  });
} else {
  console.log('error');
}



var unirest = require('unirest');

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

*/
