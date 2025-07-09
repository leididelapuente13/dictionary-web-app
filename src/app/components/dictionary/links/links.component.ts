import { Component, ChangeDetectionStrategy, input, inject } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { DictionaryService } from '../../../services';

@Component({
  selector: 'dictionary-links',
  imports: [TitleCasePipe],
  templateUrl: './links.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinksComponent {

  private dictionaryService = inject(DictionaryService);

  item = input.required<{
    name: string,
    paths: string[]
  }>();

}
