// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 0 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

function generateShape(int){
    let temp = [], num = int
    while(num > 0){
      if(num === 1) temp.push('+'.repeat(int))
      else{temp.push('+'.repeat(int).concat('\n'))}
      num--
     }
     return temp.join('')
}

//Sample Tests
Test.assertEquals( generateShape(8) , '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++' )