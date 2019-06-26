function SimpleSymbols(str) { 
   
    var myRe = /^((\+|=)+[A-Za-z](\+|=)+)+/;
   // var myRe = /\+|=/;
    
   var test = myRe.test(str);
  // code goes here  
  return test; 
         
}
   
// keep this function call here 
SimpleSymbols(readline());                            


  