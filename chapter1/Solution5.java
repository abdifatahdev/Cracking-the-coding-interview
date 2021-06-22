public class Solution5 {

    public static void main(String[] args) {

        System.out.println(oneAway("pale", "ple")); // True => Insert one character
        System.out.println(oneAway("paless", "ple")); // False => Length not match
        System.out.println(oneAway("pales", "pale")); // False => Remove and Insert two characters
        System.out.println(oneAway("pale", "bale")); // True => Replace one character
        System.out.println(oneAway("pale", "bake")); // False => Replace two characters

    }

    // SOLUTION 1 - Using Hash Map => O(N) Time || O(N) Space
    /**
     * public static boolean oneAway(String str1, String str2) { // Case 1 => if
     * difference of the two strings is greater than 1 if (str1.length() -
     * str2.length() > 1) { return false; }
     * 
     * // Creating a HashMap containing char HashMap<Character, Integer> map = new
     * HashMap<Character, Integer>();
     * 
     * // Converting given string to char array char[] strArray =
     * str1.toCharArray();
     * 
     * for(char ch : strArray){ if (map.containsKey(ch)) {
     * 
     * // If char is present in map, // incrementing it's count by 1 map.put(ch,
     * map.get(ch) + 1); } else {
     * 
     * // If char is not present in map, // putting this char to map with 1 as it's
     * value map.put(ch, 1); } }
     * 
     * int sum = 0; for (int num : map.values()) { sum += num; } if(sum > 1){ return
     * false; } else{ return true; }
     * 
     * }
     */

    // SOLUTION 2 - Using TWO POINTERS => O(N) Time || O(1) Space
    public static boolean oneAway(String s1, String s2) {
        // Case 1 => if difference of the two strings is greater than 1
        if (s1.length() - s2.length() > 1)
            return false;
        if (s1.equals(s2))
            return true;

        int pointer1 = 0, pointer2 = 0, difference = 0;
        while (pointer1 < s1.length() && pointer2 < s2.length()) {
            // Case 2 => if two character not the same
            if (s1.charAt(pointer1) != s2.charAt(pointer2)) {
                difference++;
                if (s1.length() > s2.length()) {
                    pointer1++;
                } else {
                    pointer1++;
                    pointer2++;
                }
            } else {
                // Case 3 => if two character are the same
                pointer1++;
                pointer2++;
            }
            if (difference > 1) {
                return false;
            }
        }
        return true;
    }
}
