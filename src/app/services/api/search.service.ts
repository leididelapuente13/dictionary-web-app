import {Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  _searchWord = signal<string>('keyboard');

  readonly searchWord = this._searchWord.asReadonly();

  search(word: string) {
    this._searchWord.set(word);
  }
}
