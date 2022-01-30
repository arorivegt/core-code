## First Challenge
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return ```true``` if the string is valid, and ```false``` if it's invalid.

Examples
```
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
```
Constraints
```0 <= input.length <= 100```

### Solution
```javascript
function validParentheses(parens) {
  var re = /\(\)/;
  while (re.test(parens)) parens = parens.replace(re, "");
  return !parens;
}
```

## Second Challenge
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
```
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
```

### Solution
```javascript
function toCamelCase(str){
  if(str == '' || str.length < 0) return '';
  return str
    .split(/[\_\-]/)
    .map( (e,index) => e = index === 0 
         ? e[0] + e.substring(1)
         : e[0].toUpperCase() + e.substring(1).toLowerCase())
    .join("");
}
```

## Third Challenge
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:
```javascript
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
```

### Solution
```javascript
var uniqueInOrder=function(iterable){
  let before = undefined;
  let newArray = [];
  
  for (let i = 0, length = iterable.length; i < length; i++ ) {
    if(before != iterable[i] ){
      newArray.push( iterable[i] );
    }
    before = iterable[i];
  }
  return newArray;
}
```