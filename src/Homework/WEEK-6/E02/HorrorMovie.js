"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorrorMovie = void 0;
const Movie_1 = require("./Movie");
class HorrorMovie extends Movie_1.Movie {
    constructor(id, name, director, language, runningTime, releaseYear, jumpScares, ghost, visions) {
        super(id, name, director, language, runningTime, releaseYear);
        this.jumpScares = {
            count: 0,
            increment: function () {
                this.count++;
            },
        };
        this.jumpScares = jumpScares;
        this.ghost = ghost;
        this.visions = visions;
    }
    printActionMovie() {
        console.log(`########## ${this.name} ##########
        Director: ${this.director}
        language: ${this.language}
        Time: ${this.runningTime}
        Year: ${this.releaseYear}
        About: ${this.jumpScares.count > 0
            ? `${this.jumpScares.count} Explotions`
            : ""} ${this.ghost ? "Ghost" : ""} ${this.visions ? "Vision" : ""}
    `);
    }
    incrementJumpscares() {
        this.jumpScares.increment;
    }
    expectGhosts() {
        return this.ghost ? "👻" : "¯_(ツ)_/¯";
    }
    expectVisions() {
        return this.visions ? "🔮" : "¯_(ツ)_/¯";
    }
}
exports.HorrorMovie = HorrorMovie;
