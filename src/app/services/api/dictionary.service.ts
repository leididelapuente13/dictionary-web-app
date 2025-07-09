import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment.development';
import { DictionaryEntry, ResponseError } from '../../interfaces';
import { RESTDictionaryEntry } from '../../interfaces/rest-dictionary.interface';
import { DictionaryMapper } from '../../mappers/dictionary.mapper';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  private http = inject(HttpClient);
  private readonly BASE_URL = environment.API_URL;
  private cacheWordsDefinition = new Map<string, DictionaryEntry>()

  getDictionaryEntry(word: string): Observable<DictionaryEntry> {
    if (this.cacheWordsDefinition.has(word)) {
      const entry = this.cacheWordsDefinition.get(word);
      if (entry !== undefined) {
        return of(entry);
      } else {
        return throwError(() => new Error(`No dictionary entry found in cache for word: ${word}`));
      }
    }

    return this.http.get<RESTDictionaryEntry[]>(`${this.BASE_URL}/${word}`).pipe(
      map(response => DictionaryMapper.RestDictionaryEntryArrayToDictionaryEntryArray(response)),
      tap((dictionaryEntries) => this.cacheWordsDefinition.set(word, dictionaryEntries)),
      catchError((error: ResponseError) => {
        return throwError(() => error);
      })
    )
  }
}
