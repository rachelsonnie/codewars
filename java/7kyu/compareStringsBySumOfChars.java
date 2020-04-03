// Compare two strings by comparing the sum of their values (ASCII character code).

// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.

// Examples:
// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal

import org.apache.commons.lang3.StringUtils;

public class Kata {
  public static boolean compare(String s1, String s2) {
  return (s1 != null && s1.matches("[a-zA-Z ]+") ? s1.toUpperCase().chars().sum() : 0) == (s2 != null && s2.matches("[a-zA-Z ]+") ? s2.toUpperCase().chars().sum() : 0);
  }
}

//Sample Tests
import org.junit.Test;
import static org.junit.Assert.assertEquals;
import org.junit.runners.JUnit4;

public class KataTests {
    @Test
    public void BasicTests() {
        assertEquals(true, Kata.compare("AD", "BC"));
        assertEquals(false, Kata.compare("AD", "DD"));
    }
}