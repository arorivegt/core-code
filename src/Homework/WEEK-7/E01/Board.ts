import { Player } from "./Player";

export class Board {
  private dimension: Array<string[]> = [];
  private avatarX: string = "🔥";
  private avatarO: string = "🌊";

  constructor(private row: number, 
    private column: number) {
    this.initBoard(row, column);
  }

  private initBoard(row: number, column: number) {
    let arrayY: string[] = [];
    for (let x = 0; x < row; x++) {
      this.dimension.push(arrayY.fill(" ", 0, column));
    }
  }

  public clearBoard(){
    this.dimension = [];
  }

  public getBoadFriendly(namePLayerA:string, namePLayerB:string ):string {
    let head = `============================
    ${namePLayerA}: ${this.avatarX}
    ${namePLayerB}: ${this.avatarO}
    ============================\n`;
    let board = this.dimension.reduce( (total, current) => total + `${current.join("|")}\n`, "")
    
    return head + board;
  }
}
