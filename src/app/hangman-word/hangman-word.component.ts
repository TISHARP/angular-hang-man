import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'hangman-word',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hangman-word.component.html',
  styleUrl: './hangman-word.component.scss'
})
export class HangmanWordComponent {
  @Input() word = ['y','e','s','s','i','r'];
  @Input() guessedLetters = ['h','p'];
}
