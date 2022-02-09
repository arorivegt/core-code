# A Rule of Divisibility by 13
From Wikipedia:

"A divisibility rule is a shorthand way of determining whether a given integer is divisible by a fixed divisor without performing the division, usually by examining its digits."

When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:

1, 10, 9, 12, 3, 4 because:

10 ^ 0 ->  1 (mod 13)
10 ^ 1 -> 10 (mod 13)
10 ^ 2 ->  9 (mod 13)
10 ^ 3 -> 12 (mod 13)
10 ^ 4 ->  3 (mod 13)
10 ^ 5 ->  4 (mod 13)
(For "mod" you can see: https://en.wikipedia.org/wiki/Modulo_operation)

Then the whole pattern repeats. Hence the following method:

Multiply

the right most digit of the number with the left most number in the sequence shown above,
the second right most digit with the second left most digit of the number in the sequence.
The cycle goes on and you sum all these products. Repeat this process until the sequence of sums is stationary.

Example:
What is the remainder when 1234567 is divided by 13?

7      6     5      4     3     2     1  (digits of 1234567 from the right)
×      ×     ×      ×     ×     ×     ×  (multiplication)
1     10     9     12     3     4     1  (the repeating sequence)
Therefore following the method we get:

7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178

We repeat the process with the number 178:

8x1 + 7x10 + 1x9 = 87

and again with 87:

7x1 + 8x10 = 87

From now on the sequence is stationary (we always get 87) and the remainder of 1234567 by 13 is the same as the remainder of 87 by 13 ( i.e 9).

Task:
Call thirt the function which processes this sequence of operations on an integer n (>=0). thirt will return the stationary number.

thirt(1234567) calculates 178, then 87, then 87 and returns 87.

thirt(321) calculates 48, 48 and returns 48

### Solution
```javascript
export function thirt(n: number): number {
  let numbers =  [];
  let previusNumber  = 0, actualNumber = n, total = 0;
  let count = 0;

  while (previusNumber !== actualNumber){
    previusNumber = actualNumber;
    numbers =  actualNumber.toString().split("");
    
    for(let i = numbers.length - 1; i >= 0; i--){
      if(count === 6) count = 0;
      total += Number(numbers[i]) * ((10 ** count) % 13); 
      console.log(numbers[i]);  
      count++;
    }
    actualNumber = total;
    count = total = 0;
  }
  return actualNumber;
}
```

# Valid Braces
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