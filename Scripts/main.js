/* Storage */

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

/* Variables */

var foodItem = "";
var useByDate = "";
var foodDetails = [];
var myFood = [];
var fullList = "";
var printList = [];


/* Functions */

function addItem() {
  var foodItem = document.getElementById("foodItem1").value;
  var useByDate = document.getElementById("useByDate1").value;
  var foodDetails = [foodItem, useByDate];
  var myFoodLength = myFood.length;
  console.log(myFood);
  if (foodItem === "" || useByDate === "") {
    alert("You have not entered an item");
  }
  else {
    myFood.push( foodDetails );
  }
  document.getElementById("display").innerHTML = "<p>" + myFood + "</p>";
}

function submitList() {
    localStorage["myFood"] = JSON.stringify(myFood);
    window.location = "MyList.html";
}

/* myList Page */

function showList() {
  myFood = JSON.parse(localStorage.getItem("myFood"));
  if (myFood != null && myFood.length > 0) {
    for (var i=0; i<myFood.length; i++) {
      fullList += myFood[i] + "<br>";
      console.log(i);
      console.log(fullList);
      document.getElementById("myFoodList").innerHTML = fullList;
    }
  }
  else {
    document.getElementById("myFoodList").innerHTML = "You have not added any items to your list";
  }
}

function clearList() {
  window.localStorage.clear();
  window.location = "index.html";
}


function addMore() {
  window.location = "edit.html";
}

/* Edit Page - show current list */

function showCurrentList() {
  myFood = JSON.parse(localStorage.getItem("myFood"));
  if (myFood != null) {
      document.getElementById("display").innerHTML = "<p>" + myFood + "</p>";
    }
  else {
    document.getElementById("display").innerHTML = "You do not have any items in your list";
  }
}
