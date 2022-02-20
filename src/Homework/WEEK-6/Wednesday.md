# Build Tower
Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Lua: returns a Table;
Have fun!

for example, a tower of 3 floors looks like below
```
[
  '  *  ', 
  ' *** ', 
  '*****'
]
```
and a tower of 6 floors looks like below
```
[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
```
Go challenge Build Tower Advanced once you have finished this :)

# Solution

```typescript
export const towerBuilder = (nFloors: number): string[] => {
    let heightTower = ( nFloors * 2 ) - 1;
    let floors:string[] = [];
    let i = 1;
    while(i <= nFloors){
        let asterisks = (i * 2) - 1;
        let spaces = ( heightTower - asterisks )  / 2;
        floors.push(`${' '.repeat(spaces)}${'*'.repeat(asterisks)}${' '.repeat(spaces)}`);
        i++;
    }
    return floors;
}
```
# Highest Scoring Word
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: `a = 1, b = 2, c = 3` etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

```typescript
export const high = (str: string): string => 
str.split(" ").sort((a, b) =>  
a.split("").reduce((t,n) => t + n.charCodeAt(0),0 ) - 
b.split("").reduce((t,n) => t + n.charCodeAt(0),0 )).reverse()[0]
```
