// The objective is to return all pairs of integers from a given collection of integers that have a difference of 2.

// The result should be sorted in ascending order.

// The input will consist of unique values. The order of the integers in the input collection should not matter.

// Examples
// [1, 2, 3, 4]      -->  [[1, 3], [2, 4]]
// [4, 1, 2, 3]      -->  [[1, 3], [2, 4]]
// [1, 23, 3, 4, 7]  -->  [[1, 3]]
// [4, 3, 1, 5, 6]   -->  [[1, 3], [3, 5], [4, 6]]

function twosDifference(input){
    let answer = []
    for(let i = 0; i < input.length; i++){
      for(let x = 0; x < input.length; x++){
        if(input[x] - input[i] === 2) answer.push([input[i], input[x]])
      }
    }
  return answer;
}

//Sample Tests
const {assert} = require("chai");

describe("Sample tests", function() {
  it("Tests", function() {
    assert.deepEqual(twosDifference([1,2,3,4]),[[1,3],[2,4]]);
    assert.deepEqual(twosDifference([1,3,4,6]),[[1,3],[4,6]]);
  });
});