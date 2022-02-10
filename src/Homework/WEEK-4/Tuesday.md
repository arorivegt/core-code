- [Back Homework](../Homework.md)
# Typescript object type
```typescript
/*

Welcome to:

    ................................................................
    .                                                              .
    .     ####################    ####################      E      .
    .     ####################    ####################      X      .
    .             ####            ####                      E      .
    .             ####            ####                      R      .
    .             ####            ####################      C      .
    .             ####                            ####      I      .
    .             ####                            ####      S      .
    .             ####            ####################      E      .
    .             ####            ####################      S      .
    .                                                              .
    ................................................................

    The goal: Let everyone play with many different TypeScript features
    and get an overview of TypeScript capabilities and principles.

    Things to cover:

        1. Basic typing.
        2. Refining types.
        3. Union types.
        4. Merged types.
        5. Generics.
        6. Type declarations.
        7. Module augmentation.
        8. Advanced type mapping.

    Rules and principles:

        1. Avoid using "any" type at all costs.
        2. Difficulty quickly grows one exercise after another.
        3. Feel free to send pull-requests if you've come up
           with improvements!
        4. Provide feedback to the creator of these exercises.
        5. Enjoy.

Brief UI guide:

    +--------------------------------------------------------------+
    | TypeScript exercises                                         |
    +--------------------------------------------------------------+
    | Exercises 1·2·3·4...   << Navigate through exercises >>      |
    +---------------+----------------------------------------------+
    | Files         | file.ts   << Filename and status >>          |
    +---------------+----------------------------------------------+
    | file.ts       | 1  import {x} from 'y';                      |
    | dir           | 2                                            |
    |   sub.ts      | 3                                            |
    |               |                                              |
    | << Current    |   << Currently selected file code editor >>  |
    | exercise file |                                              |
    | structure >>  +----------------------------------------------+
    |               |                                              |
    |               |   << Errors to fix in order to proceed >>    |
    |               |                                              |
    +---------------+----------------------------------------------+

Intro:

    We are starting a small community of users. For performance
    reasons we have decided to store all users right in the code.
    This way we can provide our developers with more
    user-interaction opportunities. With user-related data, at least.
    All the GDPR-related issues will be solved some other day.
    This would be the base for our future experiments during
    these exercises.

Exercise:

    Given the data, define the interface "User" and use it accordingly.

*/

export type User = {
        name: string,
        age: number,
        occupation: string
};

export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(user => logPerson(user));


/* In case if you are stuck:

// https://www.typescriptlang.org/docs/handbook/interfaces.html#introduction
*/

```

# Typescript union types
```typescript
/*

Intro:

    All 2 users liked the idea of the community. We should go
    forward and introduce some order. We are in Germany after all.
    Let's add a couple of admins.

    Initially we only had users in the in-memory database. After
    introducing Admins, we need to fix the types so that
    everything works well together.

Exercise:

    Type "Person" is missing, please define it and use
    it in persons array and logPerson function in order to fix
    all the TS errors.

*/

interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] /* <- Person[] */ = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(user: Person) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach( user => logPerson(user) );

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types

```

# Typescript in operator
```typescript
/*

Intro:

    Since we already have some of the additional
    information about our users, it's a good idea
    to output it in a nice way.

Exercise:

    Fix type errors in logPerson function.

    logPerson function should accept both User and Admin
    and should output relevant information according to
    the input: occupation for User and role for Admin.

*/

interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person: User | Admin) {
    let additionalInformation: string;
    if ("role" in person) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-the-in-operator

```
# Find the odd int
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
```
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
```
## Solution

```javascript
function findOdd(A) {
  let numbers = {};
  let odd = 0;
  A.forEach( num => {
    numbers[num] = numbers[num] 
      ? numbers[num] + 1 : 1; 
  });
  
  for (const num in numbers) {
    if(parseInt(numbers[num]) % 2 !== 0 ) odd = parseInt(num);
  }
  return odd;
}
```

# Stop gninnipS My sdroW!
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

## Solution
```javascript
function spinWords(string){
  return string.split(" ").map( word => 
                               word = word.length >=5 
                               ? word.split("").reverse().join("")
                               : word).join(" ");
  
}
```