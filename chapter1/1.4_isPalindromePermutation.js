// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. 
// A permutation is a rearrangement of letters. 
// The palindrome does not need to be limited to just dictionary words.

/* 

// If there is more one character without a match, that's no a palindrome
Test Case 1:
Input: Tact Coa
Output: True (permutations: "taco cat", "atco eta", etc.)

Test Case 1:
Input: Code
Output: False

Test Case 1:
Input: Aab
Output: True (palindrome: "aab", "aba")

*/

function isPalindromePermutation(str){
    let hash = {};
    let charCount = 0;
    for(let letter in str) {
        let char = str[letter].toLowerCase();
        if(char === " "){
            continue;
        }
        if(char in hash){
            delete hash[char];
        } else{
            hash[char] = 1;
        }
        charCount++;
    }

    if(charCount % 2 === 0){
        return Object.keys(hash).length === 0;
    } else{
        return Object.keys(hash).length === 1;
    }
    
}

console.log(isPalindromePermutation("aab")); // true
console.log(isPalindromePermutation("code")); // false
console.log(isPalindromePermutation("Tact Coa")); // true
console.log(isPalindromePermutation("carerac")); // true
console.log(isPalindromePermutation("Race car")); // true
console.log(isPalindromePermutation("Ab")); // false