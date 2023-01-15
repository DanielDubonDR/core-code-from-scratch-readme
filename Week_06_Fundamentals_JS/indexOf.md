# String: indexOf()

### Description

Write a function indexOfIgnoreCase taking two strings and determining the first occurrence of the second string in the first string. The function should be case insensitive.

Example: indexOfIgnoreCase('bit','it') and indexOfIgnoreCase('bit','IT') should return 1.

### Solution

This is the code for the problem:

```JavaScript
function indexOfIgnoreCase(text1, text2)
{
    return text1.toLowerCase().indexOf(text2.toLowerCase());
}
```