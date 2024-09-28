/*Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.*/

//Menu for Magic The Gathering Cards

//class Cards
//name
//color
//cardType
class Cards {
    constructor(name, color, cardType) {
        this.name = name;
        this.color = color;
        this.cardType = cardType;
    }
}


//class Menu
class Menu {
    constructor() {
        //cards array
        this.cards = [];
    }

    //view cards
    viewCards() {
        if (this.cards.length === 0) {
            alert("No cards in inventory.");
            return;
        }

        let displayCards = "";
        for (let i = 0; i < this.cards.length; i++) {
            displayCards += `
           ${i}) ${this.cards[i].name}, ${this.cards[i].color}, ${this.cards[i].cardType}\n`
        }

        alert(`
        Magic Card Inventory:
        ------------------------
        ${displayCards}
        `)
    }

    //prompt for card's name
    //prompt for a color
    //prompt for a cardType
    //create a new card and push it into array
    addCard() {
        let cardName = prompt("Enter the name of the card:")
        let cardColor = prompt("Enter the card's color:");
        let cardType = prompt("Enter the card's type:");
        this.cards.push(new Cards(cardName, cardColor, cardType));
    }

    //delete cards
    deleteCard() {
        let cardIndex = prompt("Enter card index to delete:");
        this.cards.splice(cardIndex, 1);
    }

    //see a menu
    showMainMenu() {
        return prompt(`
        Main Menu:
        ------------------------
        0) Add Card
        1) Delete Card
        2) View Cards
        3) Exit Menu
            `)
    }

    //start the menu
    start() {
        let selection = this.showMainMenu();

        while (selection != 3) {

            switch (selection) {
                case "0": this.addCard();
                    break;
                case "1": this.deleteCard();
                    break;
                case "2": this.viewCards();
                    break;
                default: selection = 3;
            }
            selection = this.showMainMenu();
        }
        alert("Thank you for browsing, goodbye!")
    }
}

//Instantiate the menu and invoke the start method

let menu = new Menu();

menu.start();