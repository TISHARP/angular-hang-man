import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
    getWord = (length:number) => {}
    urls = ["https://random-word-api.vercel.app/api?words=1&length=","https://random-word.ryanrk.com/api/en/word/random/?length="]
  constructor(private http: HttpClient) {
    this.getWord = (length: number): Observable<string> => {
        return this.http.get<any>(this.urls[length<10?0:1]+length);
    }
  }
}