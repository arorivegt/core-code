import { Movie } from "./Movie";
import { Input } from "./Input";
import { SelectChoice } from "./Input";
import { UserInput } from "./Input";

export class Main {
  movies:Movie[] = [];
  count:number = 0;
  choices:SelectChoice[] = [
    { option: 1, message: 'Add Action Movie' },
    { option: 2, message: 'Add Horror Movie' },
    { option: 3, message: 'Show Action Movies' },
    { option: 4, message: 'Show Horror Movies' },
    { option: 5, message: 'Increment Explosions In Movie' },
    { option: 6, message: 'Increment Jump Scares In Movie' },
    { option: 0, message: 'Exit' },
  ]

  async start() {
    let opt = 0;
    do{
      opt = (await Input.getSelect('Blockbuster', this.choices)).data;
      console.clear();
    }while(opt != 0)
  }
}
