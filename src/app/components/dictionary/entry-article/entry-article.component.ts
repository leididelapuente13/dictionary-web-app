import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RESTDictionaryEntry } from '../../../interfaces/rest-dictionary.interface';
import { SectionComponent } from "../section/section.component";
import { SourceLinkComponent } from "../source-link/source-link.component";
import { DictionaryEntry } from '../../../interfaces';

@Component({
  selector: 'dictionary-entry-article',
  imports: [HeaderComponent, SectionComponent, SourceLinkComponent],
  templateUrl: './entry-article.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryArticleComponent {
  dictionaryEntry = input<DictionaryEntry>();
}
