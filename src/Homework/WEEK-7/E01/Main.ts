import { TicTacToe } from './TicTacToe';

export class Main {
    async start(){
        let begin = new TicTacToe();
        let opt = 0;
        do {
            opt = await begin.startGame();
            console.clear();
            switch (opt) {
                case 1:{ 
                    await begin.playersSetup(); 
                    break;
                }
            }
        }while (opt != 0);
    }
}