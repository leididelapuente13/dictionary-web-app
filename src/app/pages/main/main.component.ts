import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';

import { HeaderComponent } from "../../components/layout/header/header.component";
import { FontFamilyStateService } from '../../services/state/FontFamilyState.service';
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { EntryArticleComponent } from "../../components/dictionary/entry-article/entry-article.component";


@Component({
  selector: 'app-main',
  imports: [NgClass, HeaderComponent, SearchBarComponent, EntryArticleComponent],
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  fontFamilyState = inject(FontFamilyStateService);

  get currentFontFamily (){
    return this.fontFamilyState.currentFont()
  }
}
