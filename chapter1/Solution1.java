import java.util.*;

public class Solution1 {
    // Is Unique:
    // Implement an algorithm to determine if a string has all unique characters.
    // What if you cannot use additional data structures?

    // Using UMPIRE Method:

    // 1. Understand - Clarify what the interviewer is asking for
    // 2. Match - Identify similar patterns
    // 3. Plan - Come up with algorithm, proof it works
    // 4. Implement - Code
    // 5. Review - Test solution works as expected
    // 6. Evaluate - Analyze run time and space complexity

    // BRUTE FORCE(NAIVE)- solution
    // O(N^2) Time | O(1) Space

    public static void main(String[] args) {
        Solution1 s = new Solution1();

        System.out.println("----------- Test Cases: ----------");
        System.out.println(s.isUnique("abcadbedd"));
        System.out.println(s.isUnique("abcde"));
        System.out.println(s.isUnique("level"));
        System.out.println(s.isUnique("mahd"));
    }

    // BRUTE FORCE(NAIVE)- solution
    // O(N^2) Time | O(1) Space
    /**
     * public boolean isUnique(String s) { for (int i = 0; i < s.length(); i++) {
     * for (int j = i + 1; j < s.length(); j++) { if (s.charAt(i) == s.charAt(j)) {
     * return false; } } } return true; }
     */

    // // O(N) time | O(N) space --> where we gonna use additional space to return
    public boolean isUnique(String s) {
        // Creating a HashMap containing char
        HashMap<Character, Integer> map = new HashMap<Character, Integer>();
        for (char ch : s.toCharArray()) {
            // If char is present in map, incrementing it's count by 1
            // If char is not present in map, putting this char to map with 1 as it's value
            map.put(ch, map.getOrDefault(ch, 0) + 1);

            if (map.get(ch) > 1) {
                return false;
            }
        }
        return true;
    }

}
