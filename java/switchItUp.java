// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

public class Kata{
  public static String switchItUp(int number){
    switch(number){
     case(0): return "Zero";
     case(1): return "One";
     case(2): return "Two";
     case(3): return "Three";
     case(4): return "Four";
     case(5): return "Five";
     case(6): return "Six";
     case(7): return "Seven";
     case(8): return "Eight";
     case(9): return "Nine";
    }
    return "";
  }
}

//Sample Tests
import org.junit.Test;
import static org.junit.Assert.assertEquals;
import org.junit.runners.JUnit4;

public class SolutionTest {
    @Test
    public void basicTests() {
        assertEquals("One", Kata.switchItUp(1));
        assertEquals("Three", Kata.switchItUp(3));
        assertEquals("Five", Kata.switchItUp(5));
    }
}