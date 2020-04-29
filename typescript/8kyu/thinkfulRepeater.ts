// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

// Example:
// Repeater.repeat("a", 5)
// should return

// "aaaaa"

export function repeater(str: string, n: number): string {
    return str.repeat(n);
  }

//Sample Tests
import { assert } from "chai";
import { repeater } from './solution';

describe("Sample Test Cases", function(){
  it("Should return a string", function() {
    assert.strictEqual(repeater("a", 5), "aaaaa");
    assert.strictEqual(repeater("Na", 16), "NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa");
    assert.strictEqual(repeater("Wub ", 6), "Wub Wub Wub Wub Wub Wub ");
  });
});