import { Title } from './Title';
export class Main {
  start() {
    const A = new Title('A', 10);
    A.printTile(); // Example of a reader-friendly format above
    /*
      ==================
        Letter: A
        Value: 10
      ==================
    */
    const W = new Title('W', 50); // This should show and error
    W.printTile(); // Example of a reader-friendly format above
  }
}