// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

function parse(data){
    let temp = 0
    let answer = []
    data.split('').forEach(i => {
      if(i === 'i') temp +=  1
      if(i === 'd') temp -=  1
      if(i === 's') temp = temp * temp
      if(i === 'o'){
        answer.push(temp)
      }
    })
    return answer;
  }
  
//Sample Tests
Test.assertDeepEquals( parse("iiisdoso"), [ 8, 64 ] );
Test.assertDeepEquals( parse("iiisxxxdoso"), [ 8, 64 ] );