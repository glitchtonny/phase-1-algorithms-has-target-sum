function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++){
    const complement = target - array[i];
    for (let j = i + 1 ;j < array.length; j++){

      if(array[j] === complement) return true
    }
  }
  return false 
}

/* 
  Write the Big O time complexity of your function here

*/

/* 
  Add your pseudocode here

  iterate through each number in the array 
  for the current number ,identify a complement that adds to the target
  iterate through the rest of the arrays
  check if any number is our complement
  if so return true
  else return false
  
  comment = target - number
*/

/*
  Add written explanation of your solution here
  when the number is subtracted from the target we look for the comment which
  if its there we should return true
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
