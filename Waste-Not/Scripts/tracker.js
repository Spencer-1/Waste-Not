/* initial attempt at tracker

// these are labels for the days of the week
cal_days_labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// these are human-readable month name labels, in order
cal_months_labels = ['January', 'February', 'March', 'April',
                 'May', 'June', 'July', 'August', 'September',
                 'October', 'November', 'December'];

// these are the days of the week for each month, in order
cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// this is the current date
cal_current_date = new Date();

/* Showing existing list (if any) - does this need to come from a server? */

/*
rowItem = "";

function showList1() {
  myFood = JSON.parse(localStorage.getItem("myFood"));
  if (myFood != null && myFood.length > 0) {
    for (var i=0; i<myFood.length; i++) {
      console.log(myFood);
      rowItem +=
      "<tr>" +
        "<td>" + (myFood[i].name) + "</td>" +
        "<td>" + (myFood[i].useBy) + "</td>" +
        "<td>" + (myFood[i].amount) + "</td>" +
        "<td>" + (myFood[i].storageType) + "</td>" +
      "</tr>";
      console.log(i);
      console.log(rowItem);
      document.getElementById("myFoodList").innerHTML = rowItem;
    }
  }
  else {
    document.getElementById("myFoodList").innerHTML = "You have no items in your list";
  }
}

*/
