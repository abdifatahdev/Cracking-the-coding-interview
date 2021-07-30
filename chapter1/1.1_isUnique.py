'''Is Unique:
Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures ?


Using UMPIRE Method:

1. Understand - Clarify what the interviewer is asking for
2. Match - Identify similar patterns
3. Plan - Come up with algorithm, proof it works
4. Implement - Code
5. Review - Test solution works as expected
6. Evaluate - Analyze run time and space complexity
'''

# BRUTE FORCE(NAIVE) SOLUTION
# O(N ^ 2) Time | O(1) Space
'''
def isUnique(s):
    for i in range(len(s)):
        for j in range(i + 1, len(s)):
            if s[i] == s[j]:
                return False
    return True

'''

# MOST OPTIMAL SOLUTION
# Sacrifice time for space(optimize for time)
# O(N) time | O(N) space-- > where we gonna use additional space to return


def isUnique(s):
    seen = {}
    for char in s:
        seen[char] = seen.get(char, 0) + 1

    if seen[char] > 1:
        return False

    return True


print(isUnique('abc'))  # True
print(isUnique('abca'))  # False
print(isUnique('abcdef'))  # True
print(isUnique('abcdefghjab'))  # False
