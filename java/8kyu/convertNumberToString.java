// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
// Kata.numberToString(123); // returns "123";   
// Kata.numberToString(999); // returns "999";class convertNumberToString 

class Kata {
    public static String numberToString(int num) {
      return Integer.toString(num);
    }
}

//Sample Tests
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class NumberStringExampleTests {
  @Test
  public void tests() {
    assertEquals("67", Kata.numberToString(67));
    assertEquals("123", Kata.numberToString(123));
    assertEquals("999", Kata.numberToString(999));
  }
}