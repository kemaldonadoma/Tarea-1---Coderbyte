function QuestionsMarks(str) { 

  let answers = [];
  let numbers = [];
  for (let i =0; i < str.length; i++) {
      if (/[1-9]/.exec(str[i]) !== null) {
          numbers.push([parseInt(str[i]), i]);
      }
  }
  for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i][0] + numbers[i+1][0] === 10) {
          if (str.slice(numbers[i][1]+1, numbers[i+1][1]).split('?').length - 1 === 3) {
              answers.push(true);
          } else {
              answers.push(false);
          }
      }
  }
  if (answers.length === 0 || answers.includes(false)) {
      return false;
  } else {
      return true;
  }
}
   
// keep this function call here 
QuestionsMarks(readline());