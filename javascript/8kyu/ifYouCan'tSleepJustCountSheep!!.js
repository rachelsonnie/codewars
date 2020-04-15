// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
    let str = ''
    while(num > 0){
      str = num+' sheep...'+ str
      num --
    }
    return str
}

//Sample Tests
Test.assertEquals(countSheep(1), "1 sheep...");
Test.assertEquals(countSheep(2), "1 sheep...2 sheep...");
Test.assertEquals(countSheep(3), "1 sheep...2 sheep...3 sheep...");