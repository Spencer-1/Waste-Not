/* Storage */

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
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
  if (foodItem === "") { /* Accepting user food name */
    alert("You have not entered the name of your food");
  }
  else if (useByDate1 > 31 || useByDate1 < 0) { /* Accepting user date inputs */
    alert("You have not entered a valid day");
  }
  else if (useByDate2 > 12 || useByDate2 < 0) {
    alert("You have not entered a valid month");
  }
  else if (useByDate3 < 17) {
    alert("That item went off a long time ago!");
  }
  else if (useByDate3 > 30) {
    alert("Is something that take longer to decay than some plastics really edible?");
  }
  else {
    function Food(name, useBy1, useBy2, useBy3) { /* creating a food object */
      this.name = name;
      this.useBy = useBy1 + '/' + useBy2 + '/' + useBy3;
      this.inDate = function() {
        if (mm > useBy2) { /* defining out of date logic */
          return false;
        }
        else if (dd > useBy1 && mm >= useBy2) {
          return false;
        }
        else if (yyyy > useBy3 + 2000 + 3 /* number of years accepted for food useful life after purchase */) {
          return false;
        }
        else {
          return true;
        }
      }
    }
    var newItem = new Food(foodItem, useByDate1, useByDate2, useByDate3);
    myFood.push( newItem );
    console.log(myFood);
  }
  if (myFood != null && myFood.length > 0) { /* printing new food list */
    for (var i=0; i<myFood.length; i++) {
      rowItem += "<tr>" + "<td>" + (myFood[i].name) + "</td>" + "<td>" + (myFood[i].useBy) + "</td>" + "<td>" + myFood[i].inDate() + "</td>" + "</tr>";
      document.getElementById("display").innerHTML = rowItem;
      console.log(rowItem);
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
      console.log(myFood);
      rowItem += "<tr>" + "<td>" + (myFood[i].name) + "</td>" + "<td>" + (myFood[i].useBy) + "</td>" + "<td>" + (myFood[i].inDate()) + "</td>" + "</tr>";
      console.log(i);
      console.log(rowItem);
      document.getElementById("myFoodList").innerHTML = rowItem;
    }
  }
  else {
    document.getElementById("myFoodList").innerHTML = "You have not items in your list";
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
  if (myFood != null) {
      document.getElementById("display").innerHTML = "<p>" + myFood + "</p>";
    }
  else {
    document.getElementById("display").innerHTML = "You do not have any items in your list";
  }
}
