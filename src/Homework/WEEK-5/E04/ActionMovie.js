"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionMovie = void 0;
const Movie_1 = require("./Movie");
class ActionMovie extends Movie_1.Movie {
    constructor(id, name, director, language, runningTime, releaseYear, explotion, guns, martialArts) {
        super(id, name, director, language, runningTime, releaseYear);
        this.explotion = {
            count: 0,
            increment: function () {
                this.count++;
            },
        };
        this.explotion = explotion;
        this.guns = guns;
        this.martialArts = martialArts;
    }
    printActionMovie() {
        console.log(`########## ${this.name} ##########
          Director: ${this.director}
          language: ${this.language}
          Time: ${this.runningTime}
          Year: ${this.releaseYear}
          About: ${this.explotion.count > 0
            ? `${this.explotion.count} Explotions`
            : ""} ${this.guns ? "Guns" : ""} ${this.martialArts ? "Martial Arts" : ""}
      `);
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
exports.ActionMovie = ActionMovie;
