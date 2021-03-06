- [Back Homework](../Homework.md)
# Description

You are working on a side project called Blockbuster, it is a simple project for now but It will be evolving through time. This project is basically to keep track of different movies, right now the scope is to keep track of action and horror movies. To start the project you need to:

1. Create a class definition for a Movie, a movie should have a `unique id`, name, director, language, running time and a release year.
2. In the Movie class you need to have the running time and the year (release year) as numbers and the rest of attributes as strings.
3. This class would not have any methods for now just a constructor to fill the attributes.
4. Create an ActionMovie class, this class should extend the same attributes of a Movie but should also add new attributes and behaviors.
5. For the Action Movies you need to keep track of the explosions in the movie, whether or not it will have guns or martial arts, take into account that it could have or not have both (guns and martial arts).
6. For the Action Movie class you should have a printActionMovie method to show the movie info in a friendly-way.
7. Because the explosions for a movie can change, you also should have an incrementExplosions method for the Action Movie, this method would not have any parameters and should increment the object explosion count in the object (The object on which the method was invoked on).
8. Because you love emojis you also decide that there will be a friendly-way to return a description when a movie has guns or martial arts (for the Action Movie class). So you should define the following methods:
   - expectGuns, this method will not have any parameters, it should check if the movie would have guns and if it does, it should return a string having the [Gun emoji](https://emojipedia.org/pistol/) , if not, it should return a string having the No Gesture Emoji [this](https://emojipedia.org/woman-gesturing-no/) or [this](https://emojipedia.org/man-gesturing-no/). The type of the emoji is just a suggestion, it is your project so you can decide the emoji to use.
   - expectMartialArts, this method will not have any parameters, it should check if the movie would have martial arts and if it does, it should return a string having the [Ninja emoji](https://emojipedia.org/ninja/) , if not, it should return a string having the No Gesture Emoji [this](https://emojipedia.org/woman-gesturing-no/) or [this](https://emojipedia.org/man-gesturing-no/). The type of the emoji is just a suggestion, it is your project so you can decide the emoji to use.
9. Create a HorrorMovie class, this class should extend the same attributes of a Movie but should also add new attributes and behaviors.
10. For the Horror Movies you need to keep track of the [jump scares](https://en.wikipedia.org/wiki/Jump_scare) in the movie, whether or not it will have ghosts or visions, take into account that it could have or not have both (ghosts and visions).
11. For the Horror Movie class you should have a printHorrorMovie method to show the movie info in a friendly-way.
12. Because the jump scares for a movie can change, you also should have an incrementJumpscares method for the Horror Movie, this method would not have any parameters and should increment the jump scares count in the object (The object on which the method was invoked on).
13. Because you love emojis you also decide that there will be a friendly-way to return a description when a movie has ghosts or visions (for the Horror Movie class). So you should define the following methods:
    - expectGhosts, this method will not have any parameters, it should check if the movie would have ghosts and if it does, it should return a string having the [Ghost emoji](https://emojipedia.org/ghost/) , if not, it should return a string having the No Gesture Emoji [this](https://emojipedia.org/woman-gesturing-no/) or [this](https://emojipedia.org/man-gesturing-no/). The type of the emoji is just a suggestion, it is your project so you can decide the emoji to use.
    - expectVisions, this method will not have any parameters, it should check if the movie would have visions and if it does, it should return a string having the [Crystal Ball emoji](https://emojipedia.org/crystal-ball/) , if not, it should return a string having the No Gesture Emoji [this](https://emojipedia.org/woman-gesturing-no/) or [this](https://emojipedia.org/man-gesturing-no/). The type of the emoji is just a suggestion, it is your project so you can decide the emoji to use.
14. For the Main class of the program you should have the following:
    - An array of Movies, this array would be the one that will store all the movies that you are going to record in your program.
    - A start method, this method would hold all the main logic of your project.
    - Remember that the start method is the one that will be called when you run your program (this is something we decide just for our convenience ).
    - In the start method you should show a menu, this menu would show the different options that a user has when using your project. You decided to have this options available:
      - Add action movie
      - Add horror movie
      - Show action movies
      - Show horror movies
      - Increment explosions in movie
      - Increment jump scares in movie
      - Exit the program
    - Remember that you can add more methods or attributes to the Main class if you need them, just take in mind that the start method and the movies array attribute are obligatory requests of your design.

# Starting code

If you need a starting point, you can use [this](https://github.com/corecodeio/ED3W5/tree/main) sample project, we recommend you to use our [Input](https://github.com/corecodeio/ED3W5/blob/main/src/Input.ts) class implementation to get the user input in this example, but if you want to use something else, you are free to do it.

# Unique id

For the unique id, you can use this packages:

- [uuid](https://www.npmjs.com/package/uuid), Package to generate Unique Ids
- [@types/uuid](https://www.npmjs.com/package/@types/uuid), Package to add the types to the uuid library (In order to work in typescript)
  > `This packages are already installed in the starting code sample`
```
  $ npm install uuid
  $ npm install --save @types/uuid
```

Or... you can use your own implementation, take in mind that you will need to make to make the id's for the movies uniques.

# Demostration

<h2>Menu</h2>
<p>When starting your program, there should be a menu, with the following options: </p>
<img src="./menu.gif" alt="Menu" width="750">

<h2>Add action movie</h2>
<p>When selecting the <b>Add Action Movie</b> option, you would be ask for all the information needed to create the <b>Action Movie</b> object, this example is using the <b>Form</b> input, but you could use another option if you want. Remember that the result object (Action Movie object) needs to be stored in the array of movies.</p>
<img src="./add_action_movie.gif" alt="Add Action Movie" width="750">

<h2>Add horror movie</h2>
<p>When selecting the <b>Add Horror Movie</b> option, you would be ask for all the information needed to create the <b>Horror Movie</b> object, this example is using the <b>Form</b> input, but you could use another option if you want. Remember that the result object (Horror Movie object) needs to be stored in the array of movies.</p>
<img src="./add_horror_movie.gif" alt="Add Horror Movie" width="750">

<h2>Show action movies</h2>
<p>When selecting the <b>Show Action Movies</b> option, you should filter the movies array to show only the instances of <b>Action Movie</b> in the array. Remember that this needs to be printed in a friendly-way, as it shows in the example.</p>
<img src="./show_action_movie.gif" alt="Show Action Movie" width="750">

<h2>Show horror movies</h2>
<p>When selecting the <b>Show Horror Movies</b> option, you should filter the movies array to show only the instances of <b>Horror Movie</b> in the array. Remember that this needs to be printed in a friendly-way, as it shows in the example.</p>
<img src="./show_horror_movie.gif" alt="Show Horror Movie" width="750">

<h2>Increment explosions in movie</h2>
<p>When selecting the <b>Increment explosions in movie</b>, the user should see a list with the available actions movies in your program, (In this example there is just one, but it could be more than one) , then the user needs to select the movie, and the program would automatically increment the explosions count in that selected instance, as you see in the example, the printing after the option was selected, has more explosions than the previous one. </p>
<img src="./increment_explosions.gif" alt="Increment Explosions" width="750">

<h2>Increment jump scares in movie</h2>
<p>When selecting the <b>Increment jump scares in movie</b>, the user should see a list with the available horror movies in your program, (In this example there is just one, but it could be more than one) , then the user needs to select the movie, and the program would automatically increment the jump scares count in that selected instance, as you see in the example, the printing after the option was selected, has more jump scares than the previous one. </p>
<img src="./increment_jump_scares.gif" alt="Increment Jump Scares" width="750">

<h2>Exit the program</h2>
<p>When selecting this option, the program should end</p>
<img src="./exit.gif" alt="Exit Program" width="750">

### Files
- [Main.ts](./E02/Main.ts)
- [Movie.ts](./E02/Movie.ts)
- [Input.ts](./E02/Input.ts)
- [ActionMovie.ts](./E02/ActionMovie.ts)
- [HorrorMovie.ts](./E02/HorrorMovie.ts)
```typescript
import { Main } from './E02/Main';
const program = new Main();
program.start();
```