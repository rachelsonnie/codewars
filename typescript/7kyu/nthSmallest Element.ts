// Task

// Given an array/list [] of integers , Find the Nth smallest element in this array of integers

// Notes
// Array/list size is at least 3 .

// Array/list's numbers could be a mixture of positives , negatives and zeros .

// Repetition in array/list's numbers could occur , so don't Remove Duplications .

// Input >> Output Examples
// nthSmallest({3,1,2} ,2) ==> return (2) 
// Explanation:
// Since the passed number is 2 , Then * the second smallest element in this array/list is 2*

// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// Explanation:
// Since the passed number is 3 , Then * the third smallest element in this array/list is 7*

// nthSmallest({2,169,13,-5,0,-1} ,4) ==> return (2) 
// Explanation:
// Since the passed number is 4 , Then * the fourth smallest element in this array/list is 2*

// nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 
// Explanation:
// Since the passed number is 5 , Then * the fifth smallest element in this array/list is 92*

export function nthSmallest(arr: number[], pos: number) {
    return arr.sort((a, b) => a - b)[pos - 1]
}

//Sample Tests

import { assert } from "chai";

describe("Basic tests", () => {
  it("nthSmallest([3, 1, 2], 2)", () => assert.strictEqual(nthSmallest([3, 1, 2], 2), 2));
  it("nthSmallest([15, 20, 7, 10, 4, 3], 3)", () => assert.strictEqual(nthSmallest([15, 20, 7, 10, 4, 3], 3), 7));
  it("nthSmallest([-5, -1, -6, -18], 4)", () => assert.strictEqual(nthSmallest([-5, -1, -6, -18], 4), -1));
  it("nthSmallest([-102, -16, -1, -2, -367, -9], 5)", () => assert.strictEqual(nthSmallest([-102, -16, -1, -2, -367, -9], 5), -2));
  it("nthSmallest([2, 169, 13, -5, 0, -1], 4)", () => assert.strictEqual(nthSmallest([2, 169, 13, -5, 0, -1], 4), 2));
});
