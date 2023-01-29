# Moving Zeros To The End

## Description

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

```JavaScript
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
```

## Solution

### Code

```JavaScript
function moveZeros(arr) {
  let count = 0;
  arr.forEach(element => {
    return element === 0 ? count++ : count;
  });
  let aux = arr.filter(item => item !== 0);
  for (let i = 0; i < count; i++) {
    aux.push(0);
  }
  return aux;
}
```

### Output

<img src="./../Images/zeros.png" alt="drawing"/><br>