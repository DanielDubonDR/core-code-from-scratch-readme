# Stop gninnipS My sdroW!

## Description

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

```JavaScript
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
```

## Solution

### Code

```JavaScript
function spinWords(string){
  //TODO Have fun :)
  let aux = string.split(" ");
  let arr = aux.map(x => {
    if (x.length >=5)
    {
      return x.split("").reverse().join("")
    }
    else 
    {
      return x
    }
  });

  return arr.join(" ");
}
```

### Output

<img src="./../Images/stop.png" alt="drawing"/><br>