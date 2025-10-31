const add = function(number, numbertwo) {
	resultAdd = number + numbertwo;
  return resultAdd;
};

const subtract = function(number, numbertwo) {
	resultSubtract = number - numbertwo;
  return resultSubtract;
};

const sum = function sumIntegers(...numbers) {
   for(let arg of numbers) {

    let result = 0;
      for(let i = 0; i < arg.length; ++i){
        result += arg[i];
      }
    console.log(result)
    return result; 
  } 

  
  
  };
  

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
