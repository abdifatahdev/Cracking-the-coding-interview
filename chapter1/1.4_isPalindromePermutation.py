from collections import defaultdict
'''Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the same forwards and backwards. 
A permutation is a rearrangement of letters. 
The palindrome does not need to be limited to just dictionary words.

# If there is more one character without a match, that's no a palindrome

Test Case 1:
Input: Tact Coa
Output: True (permutations: "taco cat", "atco eta", etc.)

Test Case 1:
Input: Code
Output: False

Test Case 1:
Input: Aab
Output: True (palindrome: "aab", "aba")'''


def isPalindromePermutation(s):
    st = s.lower()
    mapping = defaultdict(int)
    for char in st:
        if ord(char) >= 97 and ord(char) <= 122:
            mapping[char] += 1
            # print(mapping)
    middle = ""
    for char in mapping:
        if middle and mapping[char] % 2 == 1:
            return False
        elif mapping[char] % 2 == 1:
            middle = char
    return True


print(isPalindromePermutation("aab"))  # True => aba
print(isPalindromePermutation("code"))  # False
print(isPalindromePermutation("Tact Coa"))  # True
print(isPalindromePermutation("carerace"))  # True
print(isPalindromePermutation("Ab"))  # False
