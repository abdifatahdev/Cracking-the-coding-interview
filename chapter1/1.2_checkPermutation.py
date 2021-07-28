def checkPermutation(s1, s2):
    len1 = len(s1)
    len2 = len(s2)

    if len1 != len2:
        return False

    # Sort both strings
    str1 = sorted(s1)
    sorted1 = " ".join(str1)

    str2 = sorted(s2)
    sorted2 = " ".join(str2)

    # Initialize two pointer
    p1, p2 = 0, 0

    while sorted1[p1] != sorted2[p2]:
        return False
    p1 += 1
    p2 += 1

    return True


print(checkPermutation("mom", "omm"))  # True
print(checkPermutation("love", "loove"))  # False => != length
print(checkPermutation("hello", "olleh"))  # True
print(checkPermutation("gkla", "lgak"))  # True
print(checkPermutation("ioqtr", "qtoid"))  # False
