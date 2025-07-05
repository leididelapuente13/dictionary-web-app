import { ChangeDetectionStrategy, Component, inject, resource, signal } from '@angular/core';
import { NgClass } from '@angular/common';

import { HeaderComponent } from "../../components/layout/header/header.component";
import { FontFamilyStateService, DictionaryService } from '../../services';
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { EntryArticleComponent } from "../../components/dictionary/entry-article/entry-article.component";
import { NotFoundComponent } from "../../components/feedback/not-found/not-found.component";
import { firstValueFrom } from 'rxjs';
import { LoaderComponent } from "../../components/feedback/loader/loader.component";


@Component({
  selector: 'app-main',
  imports: [NgClass, HeaderComponent, SearchBarComponent, EntryArticleComponent, NotFoundComponent, LoaderComponent],
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {

  fontFamilyState = inject(FontFamilyStateService);
  dictionaryService = inject(DictionaryService);

  get currentFontFamily() {
    return this.fontFamilyState.currentFont()
  }

  wordToSearch = signal<string>('');

  dictionaryEntryResource = resource({
    request: ()=>({word: this.wordToSearch()}),
    loader: ({request})=>{
      return firstValueFrom(this.dictionaryService.getDictionaryEntry(request.word));
    }
  })

}
