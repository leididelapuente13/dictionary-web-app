import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { DictionaryEntry } from '../../../interfaces';
import { HeaderComponent } from '../header/header.component';
import { SectionComponent } from '../section/section.component';
import { SourceLinkComponent } from '../source-link/source-link.component';

@Component({
  selector: 'dictionary-entry-article',
  imports: [HeaderComponent, SectionComponent, SourceLinkComponent],
  templateUrl: './entry-article.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryArticleComponent {
  dictionaryEntry = input<DictionaryEntry>();
}
