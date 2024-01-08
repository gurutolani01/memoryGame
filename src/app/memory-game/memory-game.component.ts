import { Component } from '@angular/core';

@Component({
  selector: 'app-memory-game',
  template: `
    <div class="memory-game">
      <app-card
        *ngFor="let card of cards"
        [value]="card.value"
        [isFlipped]="card.isFlipped"
        (cardClicked)="onCardClicked(card)"
      ></app-card>
    </div>
  `,
  styleUrls: ['./memory-game.component.css'],
})
export class MemoryGameComponent {
  cards: { value: string; isFlipped: boolean }[] = [
    { value: 'A', isFlipped: false },
    { value: 'B', isFlipped: false },
    { value: 'C', isFlipped: false },
    { value: 'D', isFlipped: false },
    { value: 'E', isFlipped: false },
    { value: 'F', isFlipped: false },
    { value: 'A', isFlipped: false },
    { value: 'B', isFlipped: false },
    { value: 'C', isFlipped: false },
    { value: 'D', isFlipped: false },
    { value: 'E', isFlipped: false },
    { value: 'F', isFlipped: false },
  ];

  flippedCards: { value: string; index: number }[] = [];
  ngOnInit() {
    this.shuffleCards();
  }
  shuffleCards() {
    this.cards = this.shuffleArray([...this.cards]);
  }

  shuffleArray(array: any[]): any[] {
    return array.sort(() => Math.random() - 0.5);
  }

  onCardClicked(card: { value: string; isFlipped: boolean }) {
    if (!card.isFlipped && this.flippedCards.length < 2) {
      card.isFlipped = true;
      this.flippedCards.push({ value: card.value, index: this.cards.indexOf(card) });

      if (this.flippedCards.length === 2) {
        setTimeout(() => this.checkMatch(), 1000);
      }
    }
  }

  checkMatch() {
    if (this.flippedCards[0].value === this.flippedCards[1].value) {
      // Cards match, keep them flipped
    } else {
      // Cards don't match, flip them back
      this.flippedCards.forEach((card) => (this.cards[card.index].isFlipped = false));
    }

    this.flippedCards = [];
  }
}
