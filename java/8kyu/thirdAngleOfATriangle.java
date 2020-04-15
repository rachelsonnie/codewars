// You are given two angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.package 8kyu;

public class ThirdAngle {
    public static int otherAngle(int angle1, int angle2) {
        return 180 - angle1 - angle2;
    }
}

//Sample Tests
import org.junit.Test;
import static org.junit.Assert.assertEquals;
import org.junit.runners.JUnit4;

public class ThirdAngleTest {
    @Test
    public void testOtherAngle() {
        assertEquals(123, ThirdAngle.otherAngle(45,12));
        assertEquals(70, ThirdAngle.otherAngle(50,60));
    }
}