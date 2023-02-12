// '//' standard foward slash comments are just my todo list/notes to myself
// a '//\\-COMMENT-//\\' style comment describes the purpose of my functions
var products = document.querySelector('#products'); // both product & quantity var's should append synomymously on the same row
var quantities = document.querySelector('#quantities'); // list should line up with the products variable on the same row

// the date input variables don't store my unput values but its not too important right now so i'll worry about it later
// first get all the interactive items on the page working  

// next you will need to get access to the apiData

function ProductData(product, quantity) {  // object constructor for the api data 
    this.product = product;
    this.quantity = quantity;
  }
  //\\-FETCH FUNCTION TO GRAB DATA-//\\
  fetch('https://jsonplaceholder.typicode.com/users')  // that url is for a json testing page its not useful data at all except for testing
     .then(response => response.json()) // converts response to a json object
     //\\-CREATES A USER OBJECT AND STORES VALUES WITHIN AN ARRAY-//\\
     .then(users => {  
          let data = [];  // we create an empty array
          users.forEach(user => {  // use our object constructor: 'ProductData'
              let product = user.username;  // product is what we really want the username is just dummy data
              let quantity = user.id;  // the quantity is the really data we want. user id just so happens to be an integer as well so we used it for testing
              let productData = new ProductData(product, quantity);  // the var 'productData' now has the desired dummy data within  
              data.push(productData);  // pushes the dummy data into the empty array we made to store the newly constructed objects each with a username and id number 
          })
          console.log(data);
          return data;
     })
     //\\-(DUMMY DATA) IS APPENDED TO THE PAGE-//\\
     .then(data => {
        data.forEach(({product, quantity}) => {  // for loop 
            let productList = document.createElement('li');  // creates 'li' element
            productList.setAttribute("id", "product-item"); // sets attributes for styling
            productList.innerHTML = `${product}`;  // assigns the inner html with the object literal `${product}`
            products.appendChild(productList);  // appends the newly made element to the page 

            let productQuantity = document.createElement('li');
            productQuantity.setAttribute("id", "quantity-list");
            productQuantity.innerHTML = `${quantity}`;
            quantities.appendChild(productQuantity);
        });
     });

// append the required data to the page