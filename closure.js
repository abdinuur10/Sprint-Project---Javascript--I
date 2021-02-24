// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation (Min 50 words): 

// //It has a nested function which calls on the parent function, and the parent function is able to call on a global variable. 
// nested function can acess the variable 'internal' because it can look the outside of it's own scope and then pass through the variables.
