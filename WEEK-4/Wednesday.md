## Array.diff
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.
```sh
arrayDiff([1,2],[1]) == [2]
```
If a value is present in b, all of its occurrences must be removed from the other:
```sh
arrayDiff([1,2,2,2,3],[2]) == [1,3]
```

### Solution
```javascript
function arrayDiff(a, b) {
  
  let count = 0;
  let index = -1;
  for(let i =0, length= b.length; i < length; i++){
    index = a.indexOf(b[count]);
    while(index != -1){
      a.splice(index, 1); 
      index = a.indexOf(b[count]);
    }
    count++;
  }
  return a;
}
```

## Create Phone Number
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
```javascript
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
```
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!

### Solution
```javascript
function createPhoneNumber(numbers){
  return `(${numbers.slice(0,3).join("")}) ${numbers.slice(3,6).join("")}-${numbers.slice(6,10).join("")}`
}
```