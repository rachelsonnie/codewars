// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples
// divisors(4)  = 3  // 1, 2, 4
// divisors(5)  = 2  // 1, 5
// divisors(12) = 6  // 1, 2, 3, 4, 6, 12
// divisors(30) = 8  // 1, 2, 3, 5, 6, 10, 15, 30

export function divisors(n: number) {
    return Array.from(Array(n + 1).keys()).filter(x => n % x === 0).length
  }

//Sample Tests
import { assert } from "chai";
import { divisors } from "./solution";

describe("basic tests", function() {
  it("Testing for 1", () => assert.strictEqual(divisors(1), 1));
  it("Testing for 10", () => assert.strictEqual(divisors(10), 4));
  it("Testing for 11", () => assert.strictEqual(divisors(11), 2));
  it("Testing for 54", () => assert.strictEqual(divisors(54), 8));
  it("Testing for 64", () => assert.strictEqual(divisors(64), 7));
});