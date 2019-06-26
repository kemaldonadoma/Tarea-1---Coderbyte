function ClosestEnemyII(arr) {
  let str = arr.reduce((acc, str) => (acc + str));
  let oneX = /1/.exec(str).index % arr[0].length;
  let oneY = Math.floor(/1/.exec(str).index / arr[0].length);
  return findMin(arr, oneX, oneY);
}
function findMin (arr, oneX, oneY) {
  var min = 0;
  for(var y = 0; y < arr.length; y++) {
    for(var x = 0; x < arr[y].length; x++) {
      if(arr[y][x] == "2") {
        let calc = distance(arr[0].length-1, arr.length-1, oneX, oneY, x, y);
        if(min === 0 || calc < min) {
            min = calc;
        }
      }
    }
  }
  return min;
}
function distance(lengthX, lengthY, x1, y1, x2, y2) {
  var minDistX = Math.min(Math.abs(x1 - x2), lengthX + 1 - Math.abs(x1 - x2));
  var minDistY = Math.min(Math.abs(y1 - y2), lengthY + 1 - Math.abs(y1 - y2));
  return minDistX+minDistY;
}
ClosestEnemyII(readline());