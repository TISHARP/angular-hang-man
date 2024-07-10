import { Component } from '@angular/core';
import { HangmanDrawingComponent } from '../hangman-drawing/hangman-drawing.component';
import { HangmanKeyboardComponent } from '../hangman-keyboard/hangman-keyboard.component';
import { HangmanWordComponent } from '../hangman-word/hangman-word.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'game',
  standalone: true,
  imports: [HangmanDrawingComponent, HangmanWordComponent, HangmanKeyboardComponent, CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  wordToGuess = "happy" as string;
  guessedLetters = [] as string[];
  allowedAttempts = 6 as number;
  remaining = this.allowedAttempts - this.guessedLetters.filter((v)=>!this.wordToGuess.includes(v)).length as number;
  ended = false;
  receiveKeys(mkeys:string[]){
    this.guessedLetters = mkeys;
    this.remaining = this.allowedAttempts - this.guessedLetters.filter((v)=>!this.wordToGuess.includes(v)).length;
    if(this.remaining===0 || this.wordToGuess.split("").every((v)=>this.guessedLetters.includes(v))){
      this.ended = true;
    }
  }
}
