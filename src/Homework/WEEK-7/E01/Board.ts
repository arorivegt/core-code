import { Player } from "./Player";

export class Board {
  private dimension: Array<number[]> = [];
  private avatarX: string = "🔥";
  private avatarO: string = "🌊";

  constructor(private row: number, 
    private column: number) {
    this.initBoard(row, column);
  }

  private initBoard(row: number, column: number) {
    for (let x = 0; x < row; x++) {
      let arrayY: number[] = [];
      for (let y = 0; y < column; y++) {
        arrayY.push(-1);
      }
      this.dimension.push(arrayY);
    }
    
  }

  public clearBoard(){
    this.dimension = [];
    this.initBoard(this.row, this.column);
  }

  public getBoadFriendly(namePLayerA:string, namePLayerB:string ) {
    let head = 
    `============================
    ${namePLayerA}: ${this.avatarX}
    ${namePLayerB}: ${this.avatarO}\n============================\n\n`;

    
    let board = this.displayBoard(this.dimension, this.row, this.column);
    
    console.log(head + board);
  }

  private displayBoard(board:number[][], row:number, column:number){
    let result = '';
    let countCharacters = (column * 4) + (column );
    let count = 0;
    for(let x = 0; x < row; x++){ 
        result += ` ${board[x]
          .slice(0, column)
          .map(e => {count++;  return e === -1 ? count : e === 0 ? this.avatarX: this.avatarO;})
          .join("  |  ")}`;
        if( ( x + 1 ) < row ) result = result + `\n${"-".repeat(countCharacters)}\n`
    }
    return `${result}\n\n`
  }

  get getDimension():number[][]{
    return this.dimension;
  }

  setDimension(value:number, row:number, column:number){ 
    this.dimension[row][column] = value;
    
  }
}
