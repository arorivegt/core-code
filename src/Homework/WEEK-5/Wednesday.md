- [Back Homework](../Homework.md)
# Duplicate Encoder
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
### Solution
```javascript
export function duplicateEncode(word: string){
  let c: {[k: string]: any} = {};
  word.split("").forEach(e => { c[e.toLocaleLowerCase()] = c[e.toLocaleLowerCase()] ? c[e.toLocaleLowerCase()] + 1 : 1; });
  return word.split("").reduce( (t, a) => t + (c[a.toLocaleLowerCase()] > 1 ? ")" : "("),"");
}
```

# Find the odd int
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
### Solution
```javascript
export const findOdd = (xs: number[]): number => {
  let c: {[k: number]: any} = {};
  xs.forEach(e => { c[e] = c[e] ? c[e] + 1 : 1; });
  for (const key in c) {
    if(c[key] % 2 === 1) return +key;
  }
  return 0;
};

```

# Which are in?
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
- ```a1 = ["arp", "live", "strong"]```
- ```a2 = ["lively", "alive", "harp", "sharp", "armstrong"]```
- ```returns ["arp", "live", "strong"]```

Example 2:
- ```a1 = ["tarp", "mice", "bull"]```
- ```a2 = ["lively", "alive", "harp", "sharp", "armstrong"]```
- ```returns []```

Notes:

- Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
- In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
- Beware: r must be without duplicates.