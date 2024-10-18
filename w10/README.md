## functions 

```
const add2 = function (a) {
    return 2 + a;
}

const result = add2(3);
```

### Function
- a function is a block of code designed to perform a particular task
- it can take inputs, perform operations, and return an output

### Parameter
- parameters are variables that are used to accept values (arguments) passed to the function when it is called
- in the example, `a` is a parameter of the `add2` function

### Argument
- arguments are the actual values passed to the function when calling it
- in the example, `3` is the argument passed to the `add2` function

### Function Call
- a function call executes the code inside the function
- for instance `add2(3)` calls the `add2` function and passes `3` as the argument for parameter `a`

i understood most of it but good refresher

```
const add2 = function (...a) {
    return 2 + a[3];
}

const result = add2(1, 2, 3, 4);

// spread arguemnts

// Default oppeerator

//IIFE

const a = 3;

function(add2){
    console.log("inside IIFE");
}(a);
```

### Spread Arguments

- the ... (spread operator) allows a function to accept an indefinite number of arguments as an array
- in the example, a collects all arguments passed to add2 into an array
  
### Default Operator
- The default operator "=" allows you to set default values for parameters if no argument is provided

### IIFE (Immediately Invoked Function Expression)
- an IIFE is a function that runs as soon as it is defined.