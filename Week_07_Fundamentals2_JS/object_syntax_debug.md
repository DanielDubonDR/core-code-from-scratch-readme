# Object syntax debug

## Description

While making a zork-type game, you create an object of rooms. Unfortunately, the game is not working. Find all of the errors in the rooms object to get your game working again.

```JavaScript
var rooms = {
  first: {
    description: 'This is the first room'
    items: {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient'
  },
  second: {
    description: 'This is the second room'
    items: {
      couch: 'This couch looks like it would hurt your back,
      table: 'On the table there is an unopened bottle of water'
    }
  }
}
```

## Solution

### Code

```JavaScript
var rooms = {
  first: {
    description: 'This is the first room',
    items: {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient'
    }
  },
  second: {
    description: 'This is the second room',
    items: {
      couch: 'This couch looks like it would hurt your back',
      table: 'On the table there is an unopened bottle of water'
    }
  }
}
```

### Output

<img src="./../Images/objDebug.png" alt="drawing" style="width:400px;"/><br>