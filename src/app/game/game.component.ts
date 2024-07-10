import { Component } from '@angular/core';
import { HangmanDrawingComponent } from '../hangman-drawing/hangman-drawing.component';

@Component({
  selector: 'game',
  standalone: true,
  imports: [HangmanDrawingComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  wordToGuess = "happy" as string;
  wrongCount = 0 as number;
  guessedLetters = [] as string[];
}
