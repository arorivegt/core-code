"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Input_1 = require("./Input");
class Main {
    constructor() {
        this.movies = [];
        this.count = 0;
        this.choices = [
            { option: 1, message: 'Add Action Movie' },
            { option: 2, message: 'Add Horror Movie' },
            { option: 3, message: 'Show Action Movies' },
            { option: 4, message: 'Show Horror Movies' },
            { option: 5, message: 'Increment Explosions In Movie' },
            { option: 6, message: 'Increment Jump Scares In Movie' },
            { option: 0, message: 'Exit' },
        ];
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            let opt = 0;
            do {
                opt = (yield Input_1.Input.getSelect('Blockbuster', this.choices)).data;
                console.clear();
            } while (opt != 0);
        });
    }
}
exports.Main = Main;
