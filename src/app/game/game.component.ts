import { Component } from '@angular/core';
import { HangmanDrawingComponent } from '../hangman-drawing/hangman-drawing.component';
import { HangmanKeyboardComponent } from '../hangman-keyboard/hangman-keyboard.component';
import { HangmanWordComponent } from '../hangman-word/hangman-word.component';

@Component({
  selector: 'game',
  standalone: true,
  imports: [HangmanDrawingComponent, HangmanWordComponent, HangmanKeyboardComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  wordToGuess = "happy" as string;
  wrongCount = 0 as number;
  guessedLetters = [] as string[];
}
