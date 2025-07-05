import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { RESTDictionaryEntry } from '../../interfaces/rest-dictionary.interface';
import { DictionaryMapper } from '../../mappers/dictionary.mapper';
import { DictionaryEntry, ResponseError } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  private http = inject(HttpClient);
  private readonly BASE_URL = environment.API_URL;
  private cacheWordsDefinition = new Map<string, DictionaryEntry[]>()

  getDictionaryEntry(word: string): Observable<DictionaryEntry[]> {
    if (this.cacheWordsDefinition.has(word)) return of(this.cacheWordsDefinition.get(word) ?? [])

    return this.http.get<RESTDictionaryEntry[]>(`${this.BASE_URL}/${word}`).pipe(
      map(response => DictionaryMapper.RestDictionaryEntryArrayToDictionaryEntryArray(response)),
      tap((dictionaryEntries) => this.cacheWordsDefinition.set(word, dictionaryEntries)),
      catchError((error: ResponseError) => {
        return throwError(() => error);
      })
    )
  }
}
