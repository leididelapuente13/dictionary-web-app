import { Component, ChangeDetectionStrategy, input, inject } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { SearchService } from '../../../services/api/search.service';

@Component({
  selector: 'dictionary-links',
  imports: [TitleCasePipe],
  templateUrl: './links.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinksComponent {

  private searchService = inject(SearchService);

  item = input.required<{
    name: string,
    paths: string[]
  }>();

  searchWord(word: string) {
    this.searchService.search(word);
  }

}
