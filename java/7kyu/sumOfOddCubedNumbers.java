// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined/None/nil/NULL if any of the values aren't numbers.

import java.util.stream.Collectors;


public class FindOddCubes {
 public static int cubeOdd(int arr[]) {
   int count = 0;
   for(int i = 0; i < arr.length; i++){
     if(arr[i] % 2 != 0) count += arr[i] * arr[i] * arr[i];
   }
   return count;
  }
}

