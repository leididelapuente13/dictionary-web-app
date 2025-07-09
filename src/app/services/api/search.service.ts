import { inject, Injectable, resource } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DictionaryService } from './dictionary.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  dictionaryService = inject(DictionaryService);
  wordToSearch: string = '';

  setWordToSearch(word: string) {
    this.wordToSearch = word;
  }

  dictionaryEntryResource = resource({
    request: () => ({ word: this.wordToSearch }),
    loader: ({ request }) => {
      if (this.wordToSearch === '') {
        return Promise.resolve(undefined);
      }
      return firstValueFrom(this.dictionaryService.getDictionaryEntry(request.word));
    }
  })
}
