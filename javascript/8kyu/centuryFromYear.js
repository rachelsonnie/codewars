// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.

// Input , Output Examples ::
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)

function century(year) {
    // Finish this :)
   
    let getYear = year.toString()
    let stringedYear = getYear.substring(0, getYear.length - 2)
    let century = parseInt(stringedYear);
     
     if (year < 100){
      century = 1;
      return century
    } else if(year % 100 === 0){
     return century
    }
    return century + 1; 
  }

  //Sample Tests
  Test.assertEquals(century(1705), 18, 'Testing for year 1705');
  Test.assertEquals(century(1900), 19, 'Testing for year 1900');
  Test.assertEquals(century(1601), 17, 'Testing for year 1601');
  Test.assertEquals(century(2000), 20, 'Testing for year 2000');
  Test.assertEquals(century(89), 1, 'Testing for year 89');