## First Challenge
The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.
For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

### Solution
```javascript
function dutyFree(normPrice, discount, hol){
  return Math.floor(hol/((normPrice*discount)/100));
}
```

## Second Challenge

Your function takes two arguments:

- current father's age (years)
- current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
### Solution
```javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
	return Math.abs((sonYearsOld * 2) -  dadYearsOld);
}
```

## Third Challenge

Task
Your task is to write a function called ```valid_spacing()``` or ```validSpacing() ```which checks if a string has valid spacing. The function should return either ```True``` or ```False```.

For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Below are some examples of what the function should return.
```javascript
'Hello world' = true
' Hello world' = false
'Hello world  ' = false
'Hello  world' = false
'Hello' = true
// Even though there are no spaces, it is still valid because none are needed
'Helloworld' = true 
// true because we are not checking for the validity of words.
'Helloworld ' = false
' ' = false
'' = true
```
Note - there will be no punctuation or digits in the input string, only letters.
### Solution
```javascript
function validSpacing(s) {
  const regex = /([\s]+)/g;
  if(s.length <= 0) return true;
  if(s[0] === ' ' || s[s.length - 1] === ' ') return false;
  const value = s.match(regex);
  return value != null ? !value.some(element => element.length > 1) : true;
}
```

## Fourth Challenge
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
### Solution
```javascript
function fakeBin(x){
  let result = "" ;
  for (let c of x) {
    result += parseInt(c) < 5 ? '0' : '1';
  }
  return result;
}
```