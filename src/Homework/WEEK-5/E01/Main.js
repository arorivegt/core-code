"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Title_1 = require("./Title");
class Main {
    start() {
        const A = new Title_1.Title('A', 10);
        A.printTile(); // Example of a reader-friendly format above
        /*
          ==================
            Letter: A
            Value: 10
          ==================
        */
        const W = new Title_1.Title('W', 50); // This should show and error
        W.printTile(); // Example of a reader-friendly format above
    }
}
exports.Main = Main;
