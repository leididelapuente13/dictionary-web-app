import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'dictionary-links',
  imports: [TitleCasePipe],
  templateUrl: './links.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinksComponent {
  item = input.required<{
    name: string,
    paths: string[]
  }>();
}
