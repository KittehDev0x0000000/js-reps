console.log("hi");

// Create a script with two variables, each assigned to a number. Add them together and output the result to the console. Now do the same with two strings.
var num1 = 1;
var num2 = 2;
console.log(num1+num2);

var b = "World";
console.log(a + " " + b);

// Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.
var a = "Hello";
var drinks = (["water", "sparkling water", "coffee", "tea"]);
var favorites = drinks[0]+" and "+drinks[2]
console.log(favorites);

// Write a script that checks if a variable is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.
var balloons = 90
if (balloons <= 100) {
alert('there are less than 100 luftballons')
}
else {
  alert('there are greater than 100 luftballons there are'+' '+balloons)
}

// Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.
function name(aName) {
  console.log(aName);
};

// Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options. There must be at least 3 doors.
function openDoor(door){
  console.log(door);
  if (door === 'red'){
    alert('You opened the '+ door + ' door and won $100');
  } else if (door === 'blue'){
    alert('You opened the '+ door + ' door and won a bucket of water');
  } else if (door === 'grey'){
    alert('You opened the '+ door + ' door and won a spooky ghost');
  }
}
