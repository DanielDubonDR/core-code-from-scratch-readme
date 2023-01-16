## Return to sanity

### Description

This function should return an object, but it's not doing what's intended. What's wrong?

```JavaScript
function mystery() {
  var results =
    {sanity: 'Hello'};
  return
    results;
}
```

### Solution

This is the solution for the problem:

```JavaScript
function mystery() {
    var results = {sanity: 'Hello'};
    return results;
}
```