import { Component } from '@angular/core';
import { HangmanDrawingComponent } from '../hangman-drawing/hangman-drawing.component';
import { HangmanKeyboardComponent } from '../hangman-keyboard/hangman-keyboard.component';
import { HangmanWordComponent } from '../hangman-word/hangman-word.component';
import { CommonModule, NgFor } from '@angular/common';
import { GameService } from './game.service';
import { KEYS, NUMS } from '../../utils/constants';

@Component({
  selector: 'game',
  standalone: true,
  imports: [NgFor, HangmanDrawingComponent, HangmanWordComponent, HangmanKeyboardComponent, CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
  providers: [GameService]
})
export class GameComponent {
  wordToGuess = "-" as string;
  guessedLetters = [] as string[];
  allowedAttempts = 6 as number;
  readyState = false as boolean;
  wordLength = 6;
  remaining = this.allowedAttempts - this.guessedLetters.filter((v)=>!this.wordToGuess.includes(v)).length as number;
  ended = false;
  a = 0 as any;
  nums = NUMS;
  handleLength = (l:number) => {
    this.wordLength = l;
  }
  handleChances = (l:number) => {
    this.allowedAttempts = l;
  }
  resetGame = () => {
    this.readyState = false;
    this.ended = false;
    this.guessedLetters = [];

  }
  fetchWord = () => {
    //this.wordToGuess = this.service.getWord(this.wordLength);
    this.a = this.service.getWord(this.wordLength);
    this.a.subscribe((result:string)=>{
        this.wordToGuess = result[0].toLowerCase();
        if(!this.wordToGuess.split("").every((v)=>KEYS.includes(v))) this.fetchWord();
        else{
          this.remaining = this.allowedAttempts - this.guessedLetters.filter((v)=>!this.wordToGuess.includes(v)).length as number;
          this.readyState = true;
        }
    });/*.subscribe((data:string) => {
    
      this.wordToGuess = data;
    })*/
  //   this.http.get<any>('https://random-word.ryanrk.com/api/en/word/random/?length='+this.wordLength).subscribe(data => {
  //     this.wordToGuess = data;
  //     this.readyState = true;
  //     if(this.wordToGuess.includes("-")) this.fetchWord();
  // });
  }
  receiveKeys(mkeys:string[]){
    this.guessedLetters = mkeys;
    this.remaining = this.allowedAttempts - this.guessedLetters.filter((v)=>!this.wordToGuess.includes(v)).length;
    if(this.remaining===0 || this.wordToGuess.split("").every((v)=>this.guessedLetters.includes(v))){
      this.ended = true;
    }
  }
  constructor(private service: GameService) { }
}
