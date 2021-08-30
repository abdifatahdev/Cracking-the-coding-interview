# SOLUTION 1: Using Hash Map => O(N) Time || O(N) Space
'''
def oneAway(s1, s2):
    seen = {}
    for char in s1:
        seen[char] = seen.get(char, 0) + 1
    # Same as above code
    #     if char in seen:
    #         seen[char] += 1
    #     else:
    #         seen[char] = 1

    for char in s2:
        if char in seen:
            seen[char] -= 1

    return True if sum(seen.values()) == 1 else False

'''

# SOLUTION 2: Using TWO POINTERS => O(N) Time | | O(1) Space
def oneAway(s1, s2):
    #Case1 = > if difference of the two strings is greater than 1
    if len(s1) - len(s2) > 1:
        return False
    if s1 == s2:
        return True

    p1, p2, diff = 0
    while p1 < len(s1) and p2 < len(s2):
        # Case 2 => if two character not the same
        if s1[p1] != s2[p2]:
            diff += 1
            if len(s1) > len(s2):
                p1 += 1
            else:
                p1 += 1
                p2 += 2
        else:
            # Case 3 => if two character are the same
            p1 += 1
            p2 += 2

        if diff > 1:
            return False
    return True
    


print(oneAway("pale", "ple")) # True
print(oneAway("paless", "ple")) # False
print(oneAway("pales", "ple")) # False
print(oneAway("pale", "bale")) # True
print(oneAway("pale", "bake")) # False
