import { Movie } from "./Movie";
import { incrementType } from './Type';

export class HorrorMovie extends Movie {
  jumpScares: incrementType = {
    count: 0,
    increment: function () {
      this.count++;
    },
  };
  ghost: boolean;
  visions: boolean;

  constructor(
    id: string,
    name: string,
    director: string,
    language: string,
    runningTime: number,
    releaseYear: number,
    jumpScares: incrementType,
    ghost: boolean,
    visions: boolean
  ) {
    super(id, name, director, language, runningTime, releaseYear);
    this.jumpScares = jumpScares;
    this.ghost = ghost;
    this.visions = visions;
  }

  printActionMovie() {
    console.log(
      `########## ${this.name} ##########
        Director: ${this.director}
        language: ${this.language}
        Time: ${this.runningTime}
        Year: ${this.releaseYear}
        About: ${
          this.jumpScares.count > 0
            ? `${this.jumpScares.count} Explotions`
            : ""
        } ${this.ghost ? "Ghost" : ""} ${this.visions ? "Vision" : ""}
    `
    );
  }

  incrementJumpscares(){
      this.jumpScares.increment;
  }

  expectGhosts() {
    return this.ghost ? "👻" : "¯_(ツ)_/¯";
  }

  expectVisions() {
    return this.visions ? "🔮" : "¯_(ツ)_/¯";
  }
}
