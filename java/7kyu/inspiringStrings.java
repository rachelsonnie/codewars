// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

// Example:

// 'red white blue' //returns string value of white

// 'red blue gold' //returns gold

public class Kata {
    public static String longestWord(String wordString) {
      String[] temp = wordString.split(" ");
      int longest = 0;
      String answer = new String();
      for (String i : temp){
        if(i.length() >= longest) {
          longest = i.length();
          answer = i;
          }
        }
        return answer;
      }
  }

//Sample Tests
import org.junit.Test;
import static org.junit.Assert.assertEquals;
import org.junit.runners.JUnit4;

public class ExampleKataTests {
    @Test
    public void tests() {
      assertEquals("fgh", Kata.longestWord("a b c d e fgh"));
      assertEquals("three", Kata.longestWord("one two three"));
      assertEquals("grey", Kata.longestWord("red blue grey"));
    }
}