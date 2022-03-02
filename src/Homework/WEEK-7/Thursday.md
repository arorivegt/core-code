```typescript
/*
https://typescript-exercises.github.io/#exercise=4
Intro:

    As we introduced "type" to both User and Admin
    it's now easier to distinguish between them.
    Once object type checking logic was extracted
    into separate functions isUser and isAdmin -
    logPerson function got new type errors.

Exercise:

    Figure out how to help TypeScript understand types in
    this situation and apply necessary fixes.

*/

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

export function isAdmin(person: Person):person is Admin {
    return person.type === 'admin';
}

export function isUser(person: Person) :person is User{
    return person.type === 'user';
}

export function logPerson(person: Person) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);
```

# Count the smiley faces!

Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
```
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
```
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

## Solution
```typescript
//return the total number of smiling faces in the array
export function countSmileys(arr: string[]):number{
    return arr.filter(e => /(:|;){1}(-|~){0,1}(\)|D){1}/.test(e)).length;
}

console.log(countSmileys([':)', ';(', ';}', ':-D']));
```

# Human Readable Time
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

## Solution
```typescript
const formatTime = (sec: number) => (sec > 9 ? `${sec}` : `0${sec}`);

export function humanReadable(seconds: number): string {
  const hh = Math.floor(seconds / 3600);
  const mm = Math.floor(seconds / 60) % 60;
  const ss = seconds % 60;

  return [hh, mm, ss].map(formatTime).join(":");
}
```

# Base64 Encoding

Extend the String object (JS) or create a function (Python, C#) that converts the value of the String to and from Base64 using the ASCII (UTF-8 for C#) character set.

Do not use built in functions.

Usage:

// should return 'dGhpcyBpcyBhIHN0cmluZyEh'
toBase64('this is a string!!');

// should return 'this is a string!!'
fromBase64('dGhpcyBpcyBhIHN0cmluZyEh'); 
You can learn more about Base64 encoding and decoding here.

Note: This kata uses the non-padding version ("=" is not added to the end).Extend the String object (JS) or create a function (Python, C#) that converts the value of the String to and from Base64 using the ASCII (UTF-8 for C#) character set.

Do not use built in functions.

Usage:
```
// should return 'dGhpcyBpcyBhIHN0cmluZyEh'
toBase64('this is a string!!');

// should return 'this is a string!!'
fromBase64('dGhpcyBpcyBhIHN0cmluZyEh'); 
```
You can learn more about Base64 encoding and decoding here.

Note: This kata uses the non-padding version ("=" is not added to the end).

## Solution
```typescript
const formatTime = (sec: number) => (sec > 9 ? `${sec}` : `0${sec}`);

export function humanReadable(seconds: number): string {
  const hh = Math.floor(seconds / 3600);
  const mm = Math.floor(seconds / 60) % 60;
  const ss = seconds % 60;

  return [hh, mm, ss].map(formatTime).join(":");
}
```

# Base64 Encoding

Extend the String object (JS) or create a function (Python, C#) that converts the value of the String to and from Base64 using the ASCII (UTF-8 for C#) character set.

Do not use built in functions.

Usage:
```
// should return 'dGhpcyBpcyBhIHN0cmluZyEh'
toBase64('this is a string!!');

// should return 'this is a string!!'
fromBase64('dGhpcyBpcyBhIHN0cmluZyEh'); 
```

You can learn more about Base64 encoding and decoding here.

Note: This kata uses the non-padding version ("=" is not added to the end).

# Solution
```typescript
export function toBase64(str: string): string {
  return new Buffer(str).toString('base64');
}

export function fromBase64(str: string): string {
  return new Buffer(str, 'base64').toString('ascii');
}
```