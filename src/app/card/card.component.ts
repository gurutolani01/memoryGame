// card.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card" [class.flipped]="isFlipped" (click)="flipCard()">
      <div class="card-inner">
        <div class="card-front"></div>
        <div class="card-back">{{ value }}</div>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() value: string | undefined;
  @Input() isFlipped: boolean = false;
  @Output() cardClicked = new EventEmitter<void>();

  flipCard() {
    if (!this.isFlipped) {
      this.cardClicked.emit();
    }
  }
}
