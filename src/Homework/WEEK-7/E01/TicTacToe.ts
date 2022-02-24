import { Board } from './Board';
import { Input } from './Input';
import { Player } from './Player';
export class TicTacToe {
    private history:{ players: Player[]; board: Board; message: string; }[] | undefined;
    private endMessage:string = "";
    private players:Player[] = [];
    private board:Board;
    private ROW = 3;
    private COLUMN = 3;
    private isTie = 9;
    
    constructor(){
        this.board = new Board(this.ROW,this.COLUMN);
    }
    
    checkEndOfGameByWinning():number{
        let howWon:number = -1;
        for (const xs of [[[0,0],[1,0],[2,0]],
                          [[0,0],[0,1],[0,2]],
                          [[0,0],[1,1],[2,2]],
                          [[0,1],[1,1],[2,1]],
                          [[0,2],[1,2],[2,2]],
                          [[1,0],[1,1],[1,2]],
                          [[2,0],[2,1],[2,2]],
                          [[0,2],[1,1],[2,0]]]){
            let pass:string = xs.reduce( (t,a) => t + this.board.getDimension[a[0]][a[1]],"") ;
            if(pass === "000") howWon = 0;
            else if(pass === "111") howWon = 1;
        }
        return howWon;
    }

    checkEnOfGameByTie(){
        return this.isTie === 0;
    }

    move(turn:Player, cell:number, user:number):boolean{

        let valueBoard = -1;
        let wathCell:{[n: number]: number[] } = {
            1:[0,0], 
            2:[0,1],
            3:[0,2],
            4:[1,0], 
            5:[1,1],
            6:[1,2],
            7:[2,0], 
            8:[2,1],
            9:[2,2]
        };

        if (Number(cell) < 1 || Number(cell) > 9){
            this.endMessage = `😲😲😲 You chose a wrong cell 😲😲😲`;
            return false;
        }

        valueBoard = this.board.getDimension[wathCell[cell][0]][wathCell[cell][1]];
        if(valueBoard != -1) {
            this.endMessage = `😲😲😲 That cell was already selected 😲😲😲`;
            return false;
        }

        this.board.setDimension(user, wathCell[cell][0],wathCell[cell][1]);
        this.isTie--;
        return true
    }

    addHistory(){
        this.history?.push({players:this.players, board:this.board,message:this.endMessage});
    }

    displayGame(players:Player[]){
        console.clear();
        console.log(this.endMessage);
        this.board.getBoadFriendly(players[0].name, players[1].name);
    }

    async playersSetup(){
        let playersForm  = [
            { name : "player1" , message: "What is the name PLayer 1?", },
            { name : "player2" , message: "What is the name PLayer 2?", }
          ]; 
        let playersData = (await Input.getForm("Fill the following", playersForm)).data;
        let howWon = -1;
        let turnPayer = 0;
        let tie = false;
        this.board.clearBoard();
        
        this.players.push(new Player(playersData.player1,playersData.player1));
        this.players.push(new Player(playersData.player2,playersData.player2));


        do{
            this.displayGame(this.players)
            let player = this.players[turnPayer];
            if( howWon !== -1 ||  tie ) break;
            let cell = (await Input.getInput(`${player.name} choose your cell `)).data

            this.endMessage = "";
            if (this.move(player, Number(cell), turnPayer )){
                howWon = this.checkEndOfGameByWinning();
                tie = this.checkEnOfGameByTie();
                this.messageWinnerOrTie(howWon,tie);
                turnPayer = turnPayer === 0 ? 1 : 0;
            }
            this.addHistory();
        }while(true)

        
    }

    messageWinnerOrTie(howWon:number, tie:boolean) {
        if (howWon === 0)this.endMessage = `🎉🎉🎉🎉 ${this.players[howWon].name} won 🎉🎉🎉🎉`;
        else if (howWon === 1) this.endMessage = `🎉🎉🎉🎉 ${this.players[howWon].name} won 🎉🎉🎉🎉`;
        else if (tie) this.endMessage = `😲😲😲 Nobody Win 😲😲😲`;
    }

    async startGame(){
        let choices = [
            { option: 1, message: "Start Game" },
            { option: 2, message: "Show last game" },
            { option: 0, message: "Exit" }
        ]
        return (await Input.getSelect("Tic-Tac-Toe", choices)).data; 
    }
}