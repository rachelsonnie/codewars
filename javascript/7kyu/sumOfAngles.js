// Find the total sum of internal angles in an n-sided simple polygon. N will be greater than 2.

function angle(n) {
    return (n-2) * 180
}

//Sample Tests
Test.assertEquals(angle(3), 180);
Test.assertEquals(angle(4), 360);