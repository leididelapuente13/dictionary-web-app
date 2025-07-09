import { ChangeDetectionStrategy, Component, inject, resource, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { firstValueFrom } from 'rxjs';

import { DictionaryService, FontFamilyStateService } from '../../services';
import { EntryArticleComponent } from '../../components/dictionary/entry-article/entry-article.component';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { LoaderComponent } from '../../components/feedback/loader/loader.component';
import { NotFoundComponent } from '../../components/feedback/not-found/not-found.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';


@Component({
  selector: 'app-main',
  imports: [NgClass, HeaderComponent, SearchBarComponent, EntryArticleComponent, NotFoundComponent, LoaderComponent],
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {

  fontFamilyState = inject(FontFamilyStateService);
  dictionaryService = inject(DictionaryService);

  wordToSearch = signal<string>('');

  get currentFontFamily() {
    return this.fontFamilyState.currentFont()
  }

  dictionaryEntryResource = resource({
    request: () => ({ word: this.wordToSearch() }),
    loader: ({ request }) => {
      if (this.wordToSearch() === '') {
        return Promise.resolve(undefined);
      }
      return firstValueFrom(this.dictionaryService.getDictionaryEntry(request.word));
    }
  })

}
