function AlphabetSoup(str) { 

var arrays = str.split("");
var reversearrays = arrays.sort();
var result = reversearrays.join("");  
 

  return result; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AlphabetSoup(readline());