- [Back Homework](../Homework.md)
## First Challenge
In this kata you have to write a method that folds a given array of integers by the middle x-times.
An example says more than thousand words:

Fold 1-times:
```
[1,2,3,4,5] -> [6,6,3]

A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\          
                    4/            4|          4\      
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*
```
Fold 2-times:
[1,2,3,4,5] -> [9,6]
As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

If an array with one element is folded, it stays as the same array.
The input array should not be modified!
Have fun coding it and please don't forget to vote and rank this kata! :-)
I have created other katas. Have a look if you like coding and challenges.

### Solution
```javascript
function foldArray(array, runs){
  
  let copyArray = [...array];
  let newArray;
  
  while(runs > 0){
    let length = copyArray.length;
    let i = 0, count = 1;
    let middle = Math.floor(length / 2);
    newArray = [];
    
    while( i < middle  ){
      newArray.push(copyArray[i] + copyArray[length - count]);
      i++; count++;
    }
    
    if ( (length % 2) !== 0) newArray.push(copyArray[middle]);
    copyArray = [...newArray]
    runs--;
  }
  
  return newArray;
}

```

## Second Challenge
Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

1. Your message is a string containing space separated words.
2. You need to encrypt each word in the message using the following rules:
  - The first letter must be converted to its ASCII code.
  - The second letter must be switched with the last letter
3. Keepin' it simple: There are no special characters in the input.
  
Examples:
```
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
```
### Solution
```javascript
var encryptThis = function(text) {
  return text
    .split(" ")
    .map(e => {
      if( e.length == 1) return e.charCodeAt(0);
      else if ( e.length == 2) return e.charCodeAt(0) + e[1];
      else if ( e.length == 3) return e.charCodeAt(0) + e[e.length - 1] + e[1];
      else if( e.length > 3) {
        let length =  e.length; 
        return e.charCodeAt(0) + e[length - 1] + e.substring(2, length - 1) + e[1] ;
      }
        
     }).join(" ");
}
```

## Third Challenge
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:
```
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
```
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

### Solution
```javascript
function list(names){
  let lastTwo = names.length - 2;
  let resultString = "";
  for (let i = 0, length = names.length; i < length; i++ ) {
    if( (i +1) == length)  resultString += names[i].name;
    else if ( i >= lastTwo) resultString += names[i].name + " & ";
    else resultString += names[i].name + ", " ;
  }
  return resultString;
}
```