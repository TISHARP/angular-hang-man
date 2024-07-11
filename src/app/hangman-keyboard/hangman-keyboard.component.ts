import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { KEYS } from '../../utils/constants';

@Component({
  selector: 'hangman-keyboard',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './hangman-keyboard.component.html',
  styleUrl: './hangman-keyboard.component.scss'
})
export class HangmanKeyboardComponent {
  mkeys = KEYS as string[];
  guessedLetters = [] as string[];
  @Input() word = '' as string;
  @Input() enabled = true as boolean;
  @Output() guessEvent = new EventEmitter<string[]>();
  sendKeys = () => {
    this.guessEvent.emit(this.guessedLetters);
  };
  addKey = (key:string) => {
    if(this.guessedLetters.includes(key) || !this.enabled) return;
    this.guessedLetters.push(key);
    this.sendKeys();
  };
  constructor() {}
}
