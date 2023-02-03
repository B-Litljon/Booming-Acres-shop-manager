// '//' standard foward slash comments are just my todo list/notes to myself
// a '//\\-COMMENT-//\\' style comment describes the purpose of my functions
// var dateQueryFrom = document.getElementById('#date-start'); // have the user input search the api for the specified date of items coming in
// var dateQueryTo = document.getElementById('#date-end'); // both these variables will be use to query the api for product info in a given date range
var products = document.querySelector('#products-list'); // both product & quantity var's should append synomymously on the same row
var quantity = document.querySelector('#products-quantity'); // list should line up with the products variable on the same row

// the date input variables don't store my unput values but its not too important right now so i'll worry about it later
// first get all the interactive items on the page working  

// next you will need to get access to the apiData

function ProductData(product, quantity) {  // object constructor for the api data 
    this.product = product;
    this.quantity = quantity;
  }
  //\\-FETCH FUNCTION TO GRAB DATA-//\\
  fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json()) // converts response to a json object
     //\\-CREATES A USER OBJECT AND STORES VALUES WITHIN AN ARRAY-//\\
     .then(users => {  
          let data = [];  // we create an empty array
          users.forEach(user => {  // use our object constructor: 'ProductData'
              let product = user.username;  // product is what we really want the username is just dummy data
              let quantity = user.id;  // the quantity is the really data we want. user id just so happens to be an integer as well so we used it for testing
              let productData = new ProductData(product, quantity);  // the var 'productData' now has the desired dummy data within  
              data.push(productData);  // pushes the dummy data into the empty array we made to store the newly constructed objects each with a username and id number 
          });
          console.log(data);
          return data;
     });

// append the required data to the page