# SOLUTION 1: O(N) Time and Space
def checkPermutation(word1, word2):
    if len(word1) != len(word2):
        return False

    seen = {}
    for ch in word1:
        seen[ch] = seen.get(ch, 0) + 1

    for ch in word2:
        if ch in seen:
            seen[ch] -= 1
            if seen[ch] == -1:  # If seen[ch] < 0:
                return False
        else:
            return False
    return True

#########################################################


# SOLUTION 2 - O(N LOG N) Time || O(1) Space
def checkPermutation(string1, string2):
    if len(string1) != len(string2):
        return False

    # Sort both strings
    str1 = "".join(sorted(string1))
    str2 = "".join(sorted(string2))

    for i in range(0, len(string1), 1):
        # Compare sorted strings
        if str1[i] != str2[i]:
            return False
    return True


print(checkPermutation("mom", "omm"))  # True
print(checkPermutation("mom", "oom"))  # False
print(checkPermutation("love", "loove"))  # False => != length
print(checkPermutation("hello", "olleh"))  # True
print(checkPermutation("gkla", "lgak"))  # True
print(checkPermutation("ioqtr", "qtoid"))  # False
