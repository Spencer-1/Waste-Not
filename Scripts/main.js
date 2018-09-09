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
      console.log(rowItem);
      document.getElementById("myFoodList").innerHTML = rowItem;
    }
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

/* connecting to API - setting up HTTP request */

function getRecipes() {
  var request = new XMLHttpRequest();
  // Open a new connection, using the GET request on the URL endpoint
  request.open("GET", "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/ingredients/autocomplete?query=toma&number=10", true);
  var data = JSON.parse(this.response);
  console.log(data);
}

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
