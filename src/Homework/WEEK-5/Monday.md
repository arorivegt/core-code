- [Back Homework](../Homework.md)
# Square(n) Sum

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
### Solution
```javascript
export function squareSum(numbers: number[]): number {
    return numbers.reduce( (total, current) => total + Math.pow(current,2),0) ;
}
```
# Growth of a Population
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
```
At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
```
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
```
Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
```
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
### Solution
```javascript
export class G964 {

    public static nbYear = (p0, percent, aug, p):number => {
        let resultHabitants = p0 + ( p0 * (percent/100) ) + aug;
        console.log(resultHabitants);
        
        let years = 1;
        while(resultHabitants < p){
           resultHabitants = resultHabitants + ( resultHabitants * (percent/100) ) + aug;
           years++;
        }
        return years;
    }
}
```
# Mumbling
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
### Solution
```javascript
export function accum(s: string): string {
  let count = 0;
  let result:string[]= [];
  s.split("").forEach(element => {
      result.push(element.toUpperCase() + element.toLocaleLowerCase().repeat(count));
      count++;
  });
  return result.join("-");
}
```

# A wolf in sheep's clothing
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
```
[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
```
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"
### Solution
```javascript
export function warnTheSheep(queue: string[]): string {
  let whereIsTheWolf = queue.indexOf("wolf");
  let positionOfTheWolf = queue.length - whereIsTheWolf;
  let positionOfSheepFarmer = queue.length - 1;
  return positionOfTheWolf === ( positionOfSheepFarmer - 1 ) 
  ?  `Pls go away and stop eating my sheep`
  : `Oi! Sheep number ${positionOfTheWolf - 1}! You are about to be eaten by a wolf!`
}
```