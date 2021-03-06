"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rational = void 0;
class Rational {
    constructor(numerator, denominator) {
        this.denominator = denominator;
        this.numerator = numerator;
    }
    printRational() {
        console.log(`${this.numerator} / ${this.denominator}`);
    }
    invert() {
        let aux = this.numerator;
        this.numerator = this.denominator;
        this.denominator = aux;
    }
    toFloat() {
        return (this.numerator / this.denominator);
    }
    reduce() {
        let gcd = 1;
        for (let i = 0; i <= this.denominator && i <= this.numerator; i++) {
            if ((this.denominator % i) === 0 && (this.numerator % i) === 0) {
                gcd = i;
            }
        }
        this.denominator /= gcd;
        this.numerator /= gcd;
    }
}
exports.Rational = Rational;
