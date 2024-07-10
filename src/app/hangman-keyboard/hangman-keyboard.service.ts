      
import { Injectable } from '@angular/core';
import { KEYS } from '../../utils/constants';
@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class HangmanKeyboardService {
    guessedKeys = [];
  getGuessedKeys() {
    return this.guessedKeys;
  }
}

    