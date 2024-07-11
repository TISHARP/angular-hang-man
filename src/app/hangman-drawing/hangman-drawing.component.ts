import { Component, Input } from '@angular/core';

@Component({
  selector: 'hangman-drawing',
  standalone: true,
  imports: [],
  templateUrl: './hangman-drawing.component.html',
  styleUrl: './hangman-drawing.component.scss'
})
export class HangmanDrawingComponent {
  @Input() word = '';
  @Input() guessedLetters = [] as string[];
  @Input() remaining = 12 as number;
}
