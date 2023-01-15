# String: toUpperCase

### Description

Write a function toCase that takes a string and returns that string in lowercase and uppercase with - as delimiter.

Example: toCase('Mthatha') should return 'mthatha-MTHATHA'.

### Solution

This is the code for the problem:

```JavaScript
function toCase(text)
{
    return text.toUpperCase() + '-' + text.toLowerCase();
}
```