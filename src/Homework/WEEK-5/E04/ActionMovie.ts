import { Movie } from "./Movie";
import { incrementType } from "./Type";

export class ActionMovie extends Movie {
  explotion: incrementType = {
    count: 0,
    increment: function () {
      this.count++;
    },
  };
  guns: boolean;
  martialArts: boolean;

  constructor(
    id: string,
    name: string,
    director: string,
    language: string,
    runningTime: number,
    releaseYear: number,
    explotion: incrementType,
    guns: boolean,
    martialArts: boolean
  ) {
    super(id, name, director, language, runningTime, releaseYear);
    this.explotion = explotion;
    this.guns = guns;
    this.martialArts = martialArts;
  }

  printActionMovie() {
    console.log(
      `########## ${this.name} ##########
          Director: ${this.director}
          language: ${this.language}
          Time: ${this.runningTime}
          Year: ${this.releaseYear}
          About: ${
            this.explotion.count > 0
              ? `${this.explotion.count} Explotions`
              : ""
          } ${this.guns ? "Guns" : ""} ${this.martialArts ? "Martial Arts" : ""}
      `
    );
  }

  incrementExplosions() {
    this.explotion.increment;
  }

  expectGuns() {
    return this.guns ? "🔫" : "¯_(ツ)_/¯";
  }

  expectMartialArts() {
    return this.martialArts ? "(╯°□°）╯" : "¯_(ツ)_/¯";
  }
}
