var century, year, month, dayOfMonth, dayOfWeek, day;
function getInput() {
  century = parseInt(document.getElementById("century").value);
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  dayOfMonth = parseInt(document.getElementById("monthday").value);

  if (century == "") {
    alert("Input correct gender");
    return error;
  } else if (year == "") {
    alert("input correct year");
    return error;
  } else if (month == "") {
    alert("input correct month");
    return error;
  } else if (dayOfMonth == "") {
    alert("input correct day");
    return error;
  }
}
function calculateDay(){
  getInput();
  dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7) -1;
  console.log(dayOfWeek);
  return (Math.floor(dayOfWeek));
}

function checkDayOfWeek(){
   day = calculateDay();
    checkGender();
    console.log("The function runs");
}

let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];


function checkGender() {
  var gen = document.getElementsByName("rads");
  if (gen[0].checked == true) {
    var gender = "male";
  } else if (gen[1].checked == true) {
    var gender = "female";
  } else {
    console.log("pass");
  }
}
