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
### Solution
```javascript
export class G964 {
  public static inArray(a1: string[], a2: string[]): string[] {
    let arr = a2.join(" ");
    return a1.filter(item => arr.search(item) !== -1 && item !== undefined ).sort()

  }
}
```

# Sums of Parts
Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

Other Examples:
ls = [1, 2, 3, 4, 5, 6] 
parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
Notes
Take a look at performance: some lists have thousands of elements.
Please ask before translating.
### Solution
```javascript
export function partsSums(ls: number[]): number[] {
  let finalNumbers:number[] = [0];
  let sum = 0;
  ls.reverse().forEach( a => {
    sum += a;
    finalNumbers.push(sum);
  });
  return finalNumbers.reverse();
}
```
# Consecutive strings
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
```
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]
```
Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm).

Note
consecutive strings : follow one after another without an interruption
### Solution
```javascript
export function longestConsec(strarr: string[], k: number): string {
  let result = "";
  if(strarr.length === 0 || k <=0 || k > strarr.length) return result;
  strarr.forEach( (a,i) => {
    let word = strarr.slice(i,i+k).join("");
    if(word.length > result.length) result = word;
  })
  return result;
}

```