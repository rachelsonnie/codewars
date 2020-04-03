// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] 
    let highest = 0;
    let word = ''
    x.split(' ').forEach(i => {
      let temp = 0;
      i.toLowerCase().split('').forEach(i => temp += 1 + letters.indexOf(i))
      if(temp > highest){
        highest = temp
        word = i
      } 
    })
    return word
  }

//Sample Tests
Test.describe("Example tests",_=>{
Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano'); 
Test.assertEquals(high('take me to semynak'), 'semynak');  
});