Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
´´´
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
´´´
### Solution
```javascript
export function validBraces(braces: string): boolean {

  var regParenthesis = /\(\)/;
  var regCurlyBraces = /\{\}/;
  var regSquareBraces = /\[\]/;
  var count = 0;
  while (regParenthesis.test(braces) 
          || regCurlyBraces.test(braces) 
          || regSquareBraces.test(braces)) {

      braces = braces.replace(regParenthesis, "")
                  .replace(regCurlyBraces, "")
                  .replace(regSquareBraces, ""); 
      count++;
  }
  return !braces;
}
```
# Tic-Tac-Toe
Implement a Tic-Tac-Toe (AKA: Noughts and crosses, Xs and Os) solver. The input to the solver function will be an array of length 9 representing the board. Output of the function will be the index of the desired move (0-8). You will always be X. You must make a valid move, and a winning move if available.

The board is represented as an array with the following indexes:

 0 | 1 | 2
---+---+---
 3 | 4 | 5
---+---+---
 6 | 7 | 8 
For example, the following board would be represented as

solveTTT(['', '', '', 'O', '', '', 'X', '', ''])

   |   |  
---+---+---
 O |   |  
---+---+---
 X |   |   
Valid outputs for the above input would be 0, 1, 2, 4, 5, 7 or 8.

The following board would only have 1 correct output (2) because it is the only move that connects 3 X's in a row:

solveTTT(['O', '', '', 'O', 'X', '', 'X', 'O', 'X'])
### Solution
```javascript
```