- [Back Homework](../Homework.md)
## Detect Pangram
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
### Solution
```javascript
function isPangram(string){
    let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let stringUpperCase = string.toUpperCase();
    for (const letter of letters){
        if(!stringUpperCase.includes(letter.toUpperCase())){
            return false;
        }
    }
    return true;
}
```

## Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:
```
['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
```
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
### Solution
```javascript
function findMissingLetter(array){
  let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  let index = letters.indexOf(array[0].toLowerCase());
  for(let i =0, length = letters.length; i < length; i++){
      console.log(letters[index],array[i]);
      if (letters[index] !== array[i].toLowerCase() ) {
          return array[i].toLowerCase() === array[i] 
                    ? letters[index].toLowerCase()
                    : letters[index].toUpperCase();
      }
      index++;
  }
  return '';
}
```
## Find the unique number
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
### Solution
```javascript
function findUniq(arr) {
    arr.sort((a, b) => a - b);
    return arr[0]==arr[1]?arr.pop():arr[0]
}
```
## Reverse or rotate?
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

- sz is <= 0 or if str is empty return ""
- sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
```
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"
```
```
Example of a string rotated to the left by one position:
s = "123456" gives "234561".
```
### Solution
```javascript
function revrot(str, sz) {
    if( sz > str.length || str.length <= 0 ||  sz <= 0) return "";
    
    let count = 0;
    let result = "";
    while(count < str.length){
        let chunk = str.substring(count, count + sz);
        if(chunk.length === sz){
            let sumCube = chunk.split('').reduce((a, b) => a + (+b) ** 3, 0);
            if(sumCube % 2 === 0) result += chunk.split("").reverse().join("");
            else  result += chunk.slice(1) + chunk.slice(0, 1);
        }
        count +=( sz ) ;
    }
    return result;
}
```

## What's Your Poison?
The Riddle
The King of a small country invites 1000 senators to his annual party. As a tradition, each senator brings the King a bottle of wine. Soon after, the Queen discovers that one of the senators is trying to assassinate the King by giving him a bottle of poisoned wine. Unfortunately, they do not know which senator, nor which bottle of wine is poisoned, and the poison is completely indiscernible.

However, the King has 10 lab rats. He decides to use them as taste testers to determine which bottle of wine contains the poison. The poison when taken has no effect on the rats, until exactly 24 hours later when the infected rats suddenly die. The King needs to determine which bottle of wine is poisoned by tomorrow, so that the festivities can continue as planned.

Hence he only has time for one round of testing, he decides that each rat tastes multiple bottles, according to a certain scheme.

Your Task
You receive an array of integers (0 to 9), each of them is the number of a rat which died after tasting the wine bottles. Return the number of the bottle (1..1000) which is poisoned.

Good Luck!

Hint: think of rats as a certain representation of the number of the bottle...

### Solution
```javascript
function find(rats) {
    return rats.reduce( (total, current) => total + (2**current), 0)
}function find(rats) {
    return rats.reduce( (total, current) => total + (2**current), 0)
}
```