// Question 1
//Loop through the array below and console log each type property if the age is at least 4.
var pets = [
    {
      type: "cat",
      age: 5.5,
    },
    {
      type: "dog",
      age: 3.8,
    },
    {
      type: "parrot",
      age: 4.0,
    },
  ];
  
  // Answer 1
  for (var i = 0; i < pets.length; i++) {
    var age = pets[i].age;
    var pet = pets[i].type + " " + pets[i].age;
  
    if (age >= 4) {
      console.log(pet);
    }
  }
  
  // Question 2
  /*Create a function with one argument.
  
  Inside the function check the type of the value being passed in.
  
  If it is a boolean value, log the value.
  
  If it is not a boolean value, log the message "Please pass a boolean value in".
  
  Call the function and pass a value in.*/
  
  // Answer 2
  // I struggled a lot with this one..
  
  function checkBoolean(word) {
    var typeOfBoolean = typeof word;
  
    if (word === "boolean") {
      console.log(typeOfBoolean);
    } else {
      console.log("please pass a boolean value in");
    }
  }
  checkBoolean("cats");
  
  // Queastion 3
  /*Write code that does the following:
  
  When the button in the HTML is clicked, change the colour of the h2 element to "blue" and change it to read "Updated subheading".*/
  
  // Answer 3
  
  var button = document.querySelector("button");
  var subHeading = document.querySelector("h2");
  
  function changeSubHeading() {
      subHeading.innerHTML ="updated subheading";
      subHeading.style.color = "blue"
  }
  
  button.onclick = changeSubHeading;
  