import java.util.*;

public class Solution2 {

    public static void main(String[] args) {
        System.out.println("----------- Test Cases: ----------");
        System.out.println(checkPermutation("mom", "omm"));
        System.out.println(checkPermutation("level", "leave"));
        System.out.println(checkPermutation("love", "velo"));
        System.out.println(checkPermutation("racecar", "carrace"));
        System.out.println(checkPermutation("dad", "dud"));
    }

    public static boolean checkPermutation(String s1, String s2) {

        // Get lengths of both strings
        int len1 = s1.length();
        int len2 = s2.length();

        // If length of both strings is not same,
        // then they cannot be Permutation
        if (len1 != len2) {
            return false;
        }

        // Convert string into an array
        char sorted1[] = s1.toCharArray();
        char sorted2[] = s2.toCharArray();
        Arrays.sort(sorted1);
        Arrays.sort(sorted2);

        // Initialize two pointer
        int pointer1 = 0;
        int pointer2 = 0;

        // Check if the two pointers are pointing the same character
        // If NOT we're done, they cannot be permutation
        // Otherwise we have to move up each pointer once
        while (sorted1[pointer1] != sorted2[pointer2]) {
            return false;
        }
        pointer1++;
        pointer1++;

        return true;
    }
}
