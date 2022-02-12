- [Back Homework](../Homework.md)

# Description
In the board game Scrabble2, each tile contains a letter, which is used to spell words, and a score, which is used to determine the value of words.

Write a definition for a class named Tile that represents Scrabble tiles. The instance variables should be a string named letter and an number named value.
Write a constructor that takes parameters named letter and value and initializes the instance variables.
Write a method named printTile that prints the instance variables in a reader-friendly format (not the { ... } format way).
Don't worry you don't have to check if the letter is no more than one String length.
You can use this Main class to test your code.

### Files
- [Main.ts](./E01/Main.ts)
- [Title.ts](./E01/Title.ts)

```typescript
import { Main } from './E01/Main';
const program = new Main();
program.start();
```
# Description

You have been hired by a brand of digital watches to be able to create the functionality of keeping track of time, for this you have been asked to do the following:

1. Write a definition for the class name `Time` this class would be use to build a digital clock. This class should have 3 attributes of type number. `hour`, `minute` and `second`.
2. Write a constructor that takes parameters named `hour`, `minute` and `second` and initializes the instance variables.
3. Write a method called `getInSeconds` that returns a number representing the actual time in the instance represented in seconds.
4. Write a method named `printTime` that prints the instance variables in a `reader-friendly` format (not the { ... } format way).
### Files
- [Main.ts](./E02/Main.ts)
- [Time.ts](./E02/Time.ts)
```typescript
import { Main } from './E02/Main';
const program = new Main();
program.start();
```