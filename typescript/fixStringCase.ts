// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

export function solve(s: string) {
    let lowerCaseCount = 0;
    let upperCaseCount = 0;
    s.split('').forEach(i => i === i.toUpperCase() ? upperCaseCount ++ : lowerCaseCount++)
    lowerCaseCount > upperCaseCount || lowerCaseCount === upperCaseCount ? s = s.toLowerCase() : s = s.toUpperCase()
    return s;
  }

//Sample Tests
import { assert } from "chai";
import { solve } from "./solution";

describe("Basic tests", function() {
  it("Testing for code", () => assert.strictEqual(solve("code"), "code"));
  it("Testing for CODe", () => assert.strictEqual(solve("CODe"), "CODE"));
  it("Testing for COde", () => assert.strictEqual(solve("COde"), "code"));
  it("Testing for Code", () => assert.strictEqual(solve("Code"), "code"));
});