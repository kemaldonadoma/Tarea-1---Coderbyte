function PentagonalNumber(num) {
  return num === 1 ? 1 : PentagonalNumber(num - 1) + (5 * (num - 1));
}
   
// keep this function call here 
PentagonalNumber(readline());