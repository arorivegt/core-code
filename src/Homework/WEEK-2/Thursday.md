- [Back Homework](../Homework.md)
## First Challenge
Remove all exclamation marks from the end of sentence.

### Solution
```javascript
function remove (string) {  
  return string.replace(/([!])+$/g , '');
}
```

## Second Challenge

Create a function called shortcut to remove the lowercase vowels (```a, e, i, o, u ```) in a given string.
Examples
```javascript
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
```
- don't worry about uppercase vowels
- y is not considered a vowel for this kata


### Solution
```javascript
function shortcut (string) {
   return string.replace(/[aeiou]/gi,'');
}
```

## Third Challenge

Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:
```javascript
rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
```

### Solution
```javascript
const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!';
  if((p1 === 'scissors' && p2 === 'paper') || (p1 === 'rock' && p2 === 'scissors') || (p1 === 'paper' && p2 === 'rock')) return 'Player 1 won!';
  if((p2 === 'scissors' && p1 === 'paper') || (p2 === 'rock' && p1 === 'scissors') || (p2 === 'paper' && p1 === 'rock'))return 'Player 2 won!';
};
```

## Fourth Challenge
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):
```javascript
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
```

### Solution
```javascript
function persistence(num) {
  
  let sizeArrayNumber = num.toString();
  let count = 0;
  
  while(sizeArrayNumber.length != 1){
    sizeArrayNumber = mult( sizeArrayNumber.toString() );
    count++;
  }
  return count
  
}

function mult(arrayNumber){
  let multTotal = 1;
  
  for(let i = 0, sizeArrayNumber = arrayNumber.length ; i < sizeArrayNumber; i++){
    multTotal *= parseInt(arrayNumber[i])
  }
  return multTotal.toString();
}
```
