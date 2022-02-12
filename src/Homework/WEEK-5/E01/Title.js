"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
class Title {
    constructor(letter, value) {
        this.letter = letter;
        this.value = value;
    }
    printTile() {
        console.log(`========================`);
        console.log(`Letter: ${this.letter}`);
        console.log(`Value: ${this.value}`);
        console.log(`========================\n`);
    }
}
exports.Title = Title;
