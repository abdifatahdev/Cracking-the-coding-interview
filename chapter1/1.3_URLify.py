'''

Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string.

'''


def URLify(s):
    # Trim the given string
    st = s.strip()

    # Replace All space (unicode is \\s) to %20
    string = st.replace(' ', "%20")
    return string


print(URLify("Mr John Smith   "))  # "Mr%20Joh%20Smith"
