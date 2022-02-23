import { Board } from './Board';
import { Input } from './Input';
import { Player } from './Player';
export class TicTacToe {
    private history:Board[] = [];
    private endMessage:string = "The end";
    private players:Player[] = [];
    private board:Board;
    
    constructor(){
        this.board = new Board(3,3);
    }

    checkEndOfGameByWinning(){
        return "won";
    }

    checkEnOfGameByTie(){
        return "tie";
    }

    move(turn:Player, cell:number, user:number){

    }

    displayGame(namePlayer1:string, nameplayere2:string){
        this.board.getBoadFriendly(namePlayer1, nameplayere2);
    }

    async playersSetup(){
        let playersForm  = [
            { name : "player1" , message: "What is the name PLayer 1?", },
            { name : "player2" , message: "What is the name PLayer 2?", }
          ]; 
        let playersData = (await Input.getForm("Fill the following", playersForm)).data;
        this.players.push(new Player(playersData.player1,playersData.player1));
        this.players.push(new Player(playersData.player2,playersData.player2));
        this.displayGame(this.players[0].name, this.players[1].name)
    }

    async startGame(){
        let opt = 0;

        let choices = [
            { option: 1, message: "Start Game" },
            { option: 2, message: "Show last game" },
            { option: 3, message: "Exit" }
        ]
        do {
            opt = (await Input.getSelect("Tic-Tac-Toe", choices)).data;
            console.clear();

            switch (opt) {
                case 1: {
                    await this.playersSetup();
                }
            }
            
        }while (opt != 0);
    }
}