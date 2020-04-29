// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

export function evenNumbers(array: number[], n: number): number[] {
    return array.filter(x => x % 2 === 0).slice(-n)
}

//Sample Tests
/// <reference path="/runner/typings/mocha/index.d.ts" />
/// <reference path="/runner/typings/chai/index.d.ts" />
import solution = require('./solution');
// import the type of assertion library you wish to use (Chai recommended)
import {assert} from "chai";

describe("Sample Test Cases", function(){
  it("Should return an array", function() {
    assert.deepEqual(solution.evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
    assert.deepEqual(solution.evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]);
    assert.deepEqual(solution.evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);
  });
});