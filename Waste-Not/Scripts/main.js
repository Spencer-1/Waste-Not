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

var id = 0;
var recipeIds = [];
var recipeTitles = "";
var ingredients = "";
var rowItem = "";
var foodItem = "";
var myFood = [];
var fullList = "";
var printList = [];
var weight = "";

/* Getting todays date - Date check not yet required, buyt when done needs to align to 1970's initial computing time  */

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
  }

  console.log(ingredients);

  var endpoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients"
  var params = {
    ingredients: ingredients, //A comma-separated list of ingredients that the recipes should contain.
    number: "5", //The maximal number of recipes to return (default = 5).
    ranking: "1", //Whether to maximize used ingredients (1) or minimize missing ingredients (2) first.
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
                "<td>" + (response[i].missedIngredientCount) + "</td>" +
                "<td>" + "<img src=" + (response[i].image) + " onclick=recipeDetail();" + ">"  + "</td>" +
                "<td>" + (response[i].id) + "</td>" +
            "</tr>"
            document.getElementById("recipeOptions").innerHTML = recipeTitles;
            recipeIds.push((response[i].id))
          }
          // printing recipe IDs to console
          console.log(recipeIds);
      }
  };
  xhttp.open("GET", url, true, "jonathanmspencer@gmail.com", "Wellington1");
  xhttp.setRequestHeader("X-Mashape-Key", "n2HD3Iz3TBmshrhXE6mQYIZQXzTZp1MzLoYjsnbBUzzHmHvcfm")
  xhttp.setRequestHeader("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
  xhttp.send();
}

// onclick navigation and creation of recipe Page

function recipeDetail() {

  window.location = "recipeDetail.html";
}

// Send list of recipe IDs to new API endpoint to GET Recipe ingredient lists, amounts and instructions

function getRecipeDetails() {
  console.log(recipeIds);
  function formatParams(params) { // setting API parameters
    return params
  }

  id = recipeIds[0] + "/information"

  var endpoint = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/"
  var params = id

  var url = endpoint + formatParams(params)
  console.log(url);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         // document is ready
          var response = xhttp.responseText;
          console.log("ok"+response);
          response = JSON.parse(response);
          console.log(response);
      }
  };
  xhttp.open("GET", url, true, "jonathanmspencer@gmail.com", "Wellington1");
  xhttp.setRequestHeader("X-Mashape-Key", "n2HD3Iz3TBmshrhXE6mQYIZQXzTZp1MzLoYjsnbBUzzHmHvcfm")
  xhttp.setRequestHeader("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
  xhttp.send();
}
