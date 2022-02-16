import { Input, SelectChoice } from './Input';
import { Choice } from './Input';
import { MenuElement } from './MenuElement';
import { v4 as uuidv4 } from 'uuid';

export class Menu {

    mainMenu:SelectChoice[] = [];
    soupMenu:Choice[] = [];
    chefSpecialsMenu:Choice[] = [];
    chickenMenu:Choice[] = [];
    beefMenu:Choice[] = [];
    beveragesMenu:Choice[] = [];

    soupOptions:MenuElement[] = [];
    chefSpecialsOptions:MenuElement[] = [];
    chickenOptions:MenuElement[] = [];
    beefOptions:MenuElement[] = [];
    beveragesOptions:MenuElement[] = [];


    constructor(){
        this.fillMainMenu();
        this.fillOptions();
        this.fillSubMenus();
    }

    fillMainMenu(){
        this.mainMenu.push({option: 1, message: "Soup"});
        this.mainMenu.push({option: 2, message: "Chef's SpecialsChef's Specials"});
        this.mainMenu.push({option: 3, message: "Chicken"});
        this.mainMenu.push({option: 4, message: "Beef"});
        this.mainMenu.push({option: 5, message: "Beverages"});
        this.mainMenu.push({option: 0, message: "Exit"});
    }

    fillOptions(){
        //********Soup Menu********
        let menu1 = new MenuElement(uuidv4(),"Wonton Soup (Chicken)", 2.25, "🍗");
        let menu2 = new MenuElement(uuidv4(),"Chicken Corn Soup", 1.95, "🍲");
        let menu3 = new MenuElement(uuidv4(),"Vegetable Corn Soup.", 1.95, "🥗");
        this.soupOptions.push(menu1, menu2, menu3);

        //********Chef's Specials Menu********
        menu1 = new MenuElement(uuidv4(),"Orange Beef.", 8.95, "🟠");
        menu2 = new MenuElement(uuidv4(),"Kung Pao Shrimp", 8.50, "🦐");
        this.chefSpecialsOptions.push(menu1, menu2);

        //********Chicken Menu********
        menu1 = new MenuElement(uuidv4(),"Lemon Chicken", 9.95, "🍋🍗");
        menu2 = new MenuElement(uuidv4(),"Sesame Chicken.", 9.95, "🥯");
        menu3 = new MenuElement(uuidv4(),"Hunan Chicken", 10.50, "🏴󠁣󠁮󠀴󠀳󠁿");
        this.chickenOptions.push(menu1, menu2, menu3);

        //********Beef Menu********
        menu1 = new MenuElement(uuidv4(),"Pepper Steak.", 9.95, "🌶️");
        menu2 = new MenuElement(uuidv4(),"Manchurian Beef.", 11.95, "🥟");
        this.beefOptions.push(menu1, menu2);

        //********Beverages Menu********
        menu1 = new MenuElement(uuidv4(),"Pepper Steak.", 3.00, "🍍");
        menu2 = new MenuElement(uuidv4(),"Spanish Coffee", 5.50, "☕");
        this.beveragesOptions.push(menu1, menu2);
    }

    fillSubMenus(){
        for(const opt of this.soupOptions){
            this.soupMenu.push({name: opt.id, message: opt.printOption()})
        }
        for(const opt of this.chefSpecialsOptions){
            this.chefSpecialsMenu.push({name: opt.id, message: opt.printOption()})
        }
        for(const opt of this.chickenOptions){
            this.chickenMenu.push({name: opt.id, message: opt.printOption()})
        }
        for(const opt of this.beefOptions){
            this.beefMenu.push({name: opt.id, message: opt.printOption()})
        }
        for(const opt of this.beveragesOptions){
            this.beveragesMenu.push({name: opt.id, message: opt.printOption()})
        }

    }
    async showMainMenu(){
        let opt;
        do {
            opt = (await Input.getSelect('Select a color', this.mainMenu)).data;
            console.clear();
            

        }while(opt != 0 )
    }

    showSubMenu(){}
}