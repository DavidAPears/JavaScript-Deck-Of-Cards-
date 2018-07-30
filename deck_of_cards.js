
// // Object Destructuring to start the 'shuffle' method:
// // Array Destructuring to swap 'i' & 'm' before returning 'this'
//
//   shuffle(){
//     const { deck } = this;
//     let m = deck.length, i;
//
//     while(m){
//       i = Math.floor(Math.random() * m--);
//
//       [deck[m], deck[i]] = [deck[i], deck[m]];
//     }
//
//     return this;
//   }
//
// // Deal method that returns one card and removes it from the deck
//   deal(){
//     return this.deck.pop();
//   }
// }
//
// // New instance of deck, call shuffle on it then deal:
// const deck1 = new Deck();
// deck1.shuffle()
// // console.log(deck1.deck);
// deck1.deal()
// // console.log(deck1.deck);
// console.log(deal());


// JavaScript Deck Of Cards:


class Deck{
  constructor(){
    this.deck = [];
    this.reset();
    this.shuffle();
  }

  reset(){
    this.deck = [];

    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }
  }

// Object Destructuring to start the 'shuffle' method:
// Array Destructuring to swap 'i' & 'm' before returning 'this'

  shuffle(){
    const { deck } = this;
    let m = deck.length, i;

    while(m){
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    return this;
  }

// Deal method that returns one card and removes it from the deck
  deal(){
    return this.deck.pop();
  }
  // console.log  TODO: How do I print this single card?
}

const deck1 = new Deck();
console.log(deck1.deck);
// output: shuffled deck
deck1.reset();
console.log(deck1.deck);
// output: reset deck
