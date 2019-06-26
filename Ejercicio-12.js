function ChessboardTraveling(str) { 

  let x = parseInt(str[6]) - parseInt(str[1]);
  let y = parseInt(str[8]) - parseInt(str[3]);
  return factorial(x + y) / factorial(x) / factorial(y); 
         
}

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}
   
// keep this function call here 
ChessboardTraveling(readline());