import { ChangeDetectionStrategy, Component, inject, resource, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { firstValueFrom } from 'rxjs';

import { DictionaryService, FontFamilyStateService } from '../../services';
import { EntryArticleComponent } from '../../components/dictionary/entry-article/entry-article.component';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { SearchBarComponent } from "../../components/layout/search-bar/search-bar.component";
import { LoaderComponent } from '../../components/feedback/loader/loader.component';
import { NotFoundComponent } from '../../components/feedback/not-found/not-found.component';
import { SearchService } from '../../services/api/search.service';


@Component({
  selector: 'app-main',
  imports: [NgClass, HeaderComponent, EntryArticleComponent, NotFoundComponent, LoaderComponent, SearchBarComponent],
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {

  fontFamilyState = inject(FontFamilyStateService);
  dictionaryService = inject(DictionaryService);
  searchService = inject(SearchService);

  get currentFontFamily() {
    return this.fontFamilyState.currentFont()
  }

  dictionaryEntryResource = resource({
    request: () => ({ word: this.searchService.searchWord() }),
    loader: ({ request }) => {
      if (this.searchService.searchWord() === '') {
        return Promise.resolve(undefined);
      }
      return firstValueFrom(this.dictionaryService.getDictionaryEntry(request.word));
    }
  })

}
