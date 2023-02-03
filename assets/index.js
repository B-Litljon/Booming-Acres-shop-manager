// '//' standard foward slash comments are just my todo list/notes to myself
// a '//\\-COMMENT-//\\' style comment describes the purpose of my functions
// var dateQueryFrom = document.getElementById('#date-start'); // have the user input search the api for the specified date of items coming in
// var dateQueryTo = document.getElementById('#date-end'); // both these variables will be use to query the api for product info in a given date range
var products = document.querySelector('#products-list'); // both product & quantity var's should append synomymously on the same row
var quantity = document.querySelector('#products-quantity'); // list should line up with the products variable on the same row

// the date input variables don't store my unput values but its not too important right now so i'll worry about it later
// first get all the interactive items on the page working  

// next you will need to get access to the apiData
fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => {
    users.forEach(user => {
        var productTest = (user.username);  // we have the desired data in a variable. issue is its unreachable within the block of this function
        console.log(productTest);          // another way we can access this data would be to create an empty array
        var quantityTest = (user.id);     // then 'push' the desired data to it later 
        console.log(quantityTest);
        return users;
    });
   });
// then you will destructure what you want from it

// append the required data to the page