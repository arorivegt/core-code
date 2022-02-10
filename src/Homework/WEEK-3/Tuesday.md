- [Back Homework](../Homework.md)
## First Challenge
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
```
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
```

### Solution
```javascript
function order(words){
  
  if(words === "" || words.length < 0) return "";
  
  let arrayWords = words.split(" ");
  
  return arrayWords.sort(function (a, b) {
    if (a.match(/\d+/)[0]  > b.match(/\d+/)[0] ) {
        return 1;
    }else if ( b.match(/\d+/)[0] > a.match(/\d+/)[0] ) {
        return -1;
    }
    return 0;
  }).join(" ");
}
```

## Second Challenge
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
```
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
```

### Solution
```javascript
function duplicateCount(text){
 let returnDuplicates = 0;
 let arrayText = text
         .split("")
         .reduce( (a,v) => { 
           let sameValue = v.toUpperCase()
           a[sameValue] = a[sameValue] ? a[sameValue] + 1 : 1; 
           return a;}, {});
 for (const [key, value] of Object.entries(arrayText)) {
   if(value > 1) returnDuplicates++;
 }
  return returnDuplicates;
}
```

## Third Challenge
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
```
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
```

### Solution
```javascript
function pigIt(str){
  return str.split(" ").map( e => e = (/[a-zA-z]+/g).test(e) ? e.substring(1) + e[0] + "ay" : e).join(" ");
}
```