# String: charAt()

### Description

Write a function shortcut that takes two strings and returns the initial letters of theses strings.

Example: shortcut('Amnesty', 'International') should return 'AI'.

### Solution

This is the code for the problem:

```JavaScript
function shortcut(text1,text2)
{
    return text1.charAt(0) + text2.charAt(0);
}
```