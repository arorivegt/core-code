- [Back Homework](../Homework.md)
# Description

We have just learn about generics, an we where creating our own implementation for the Linkedlist structure, but it is incomplete, you task is to finish the missing methods.

- addFirst: Adds a new node at the start of the structure
- removeLast: Removes the last node of the structure

# Example

```typescript
let list = new LinkedList<number>();
list.add(1); // [1]
list.add(2); // [1,2]
list.add(3); // [1,2,3]
list.add(4); // [1,2,3,4]
list.addFirst(5); // [5,1,2,3,4]
console.log(list.toString()); // [5,1,2,3,4]
console.log(list.size); // 5
list.remove(); // [1,2,3,4]
console.log(list.toString()); // [1,2,3,4]
console.log(list.size); // 4
list.removeLast(); // [1,2,3]
console.log(list.toString()); // [1,2,3]
console.log(list.size); // 3
```

### Files
- [Node.ts](./E02/Node.ts)
- [LinkedList.ts](./E02/LinkedList.ts)

```javascript
import { LinkedList } from "./WEEK-7/E02/LinkedList";

let list = new LinkedList<number>();
list.add(1); // [1]
list.add(2); // [1,2]
list.add(3); // [1,2,3]
list.add(4); // [1,2,3,4]
list.addFirst(5); // [5,1,2,3,4]
console.log(list.toString()); // [5,1,2,3,4]
console.log(list.size); // 5
list.remove(); // [1,2,3,4]
console.log(list.toString()); // [1,2,3,4]
console.log(list.size); // 4
list.removeLast(); // [1,2,3]
console.log(list.toString()); // [1,2,3]
console.log(list.size); // 3
```

# Encrypt this!
Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
```
encryptThis "Hello" == "72olle"
encryptThis "good" == "103doo"
encryptThis "hello world" == "104olle 119drlo"
```

## Solution

```javascript
export const encryptThis = (str: string): string => {
    if (str.length <= 0) return ""
    return str
    .split(" ")
    .map(e => {
        let begin = e[0].charCodeAt(0).toString();
        let last = e.length > 2 ? e[e.length - 1] : "";
        let second = e.length > 2 ? e[1] : "";
        let rest = e.length > 2 ? e.substring(2,e.length - 1 ) : e.substring(1);
        return begin + last + rest + second; 
    }).join(" ");
}

console.log(encryptThis("A wise old owl lived in an oak"));
```

# Make the Deadfish Swim
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

+
```
parse("iiisdoso") => [8, 64]
```

## Solution

```javascript
export function parse(data: string): number[] {
        
let result:number[] = [];
data.split('').reduce((total, current) => {
    console.log(total, current);
    
    if (current === 'i') total++;
    if (current === 'd') total--;
    if (current === 's') total = Math.pow(total, 2); //I would've done cur *= cur;
    if (current === 'o') result.push(total);
    
    return total;
    }, 0);
return result;
}

console.log(parse("iiisdoso"));
```