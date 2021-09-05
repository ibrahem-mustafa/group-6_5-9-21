// Var

// Function

// Array

// Loops
// => For
// => while
// => do while

// if condition
// Switch

// recursive function
// function arguments
// Self Invoking Function


// HOISTING


// GUI => Graphical User Interface
// CLI => Command Line Interface

// API => Application programming Interface
/**         API                                                  API
 * [  TODO APPLICATION  ]   <======== API ==========>   [ACTIVITY APPLICATION]
 */

// fetch from api
// https://jsonplaceholder.typicode.com/todos

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
  });

