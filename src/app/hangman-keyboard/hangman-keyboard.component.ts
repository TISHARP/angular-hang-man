import { Component } from '@angular/core';
import { HangmanKeyboardService } from './hangman-keyboard.service';

@Component({
  selector: 'hangman-keyboard',
  standalone: true,
  imports: [],
  templateUrl: './hangman-keyboard.component.html',
  styleUrl: './hangman-keyboard.component.scss'
})
export class HangmanKeyboardComponent {
  constructor(hangmanKeyboardService: HangmanKeyboardService){
    
  }
}
