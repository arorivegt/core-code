[Back Principal Menu](../Notes.md)
- [Array from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
```javascript
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]
```
- [For of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
```javascript
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
```
- [Join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
```javascript
console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```
- [Split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
```javascript
const str = 'The quick brown fox jumps over  the lazy dog.';

const words = str.split(' ');
console.log(words);
///"The", "quick", "brown", "fox", "", "jumps", "over", "the", "lazy", "dog."]
```
- [Array filter, reduce, sort, map, forEach](https://www.youtube.com/watch?v=4hrQtbaHVCQ)
- [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [Sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [ForEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [Some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [Every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [Slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
```javascript
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1); // expected output: Array [2, 8, 18, 32]

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result); // expected output: Array ["exuberant", "destruction", "present"]

const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(array1.reduce(reducer)); //  1 + 2 + 3 + 4 => expected output: 10

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); // expected output: Array [1, 100000, 21, 30, 4]
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b); // I need a function if i want to sort in a better way, because in the other way is sorted by codechart and not by number
console.log(numbers);  [1, 2, 3, 4, 5]

const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"

const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even)); // expected output: true

const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));// expected output: true

console.log(animals.slice(2, -1));// expected output: Array ["camel", "duck"]

months.splice(4, 1, 'May'); // replaces 1 element at index 4
```

- [For in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
```javascript
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```
- [Include](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
```javascript
const array1 = [1, 2, 3];
console.log(array1.includes(2));// expected output: true
```
- [Regex](https://regexr.com/)
- [Regex](https://rubular.com/)
- [Regex](https://regex101.com/)
- [Regex match, test, replace, split, exec](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
```javascript
var myRe = /d(b+)d/g;
var myArray = myRe.exec('cdbbdbsbz');
```

- [Arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments0)
```javascript
function func1(a, b, c) {
  console.log(arguments[0]); // expected output: 1
  console.log(arguments[1]); // expected output: 2
  console.log(arguments[2]); // expected output: 3
}

func1(1, 2, 3);
```

- [repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
```javascript
const chorus = 'Because I\'m happy. ';
console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);
// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "

```

- [find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
```javascript
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);
// expected output: 12
```

- [findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
```javascript
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));
// expected output: 3
```