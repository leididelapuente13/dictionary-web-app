import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Meaning } from '../../../interfaces';
import { ListComponent } from './list/list.component';
import { LinksComponent } from '../links/links.component';
import { TitleComponent } from './title/title.component';

@Component({
  selector: 'dictionary-section',
  imports: [TitleComponent, ListComponent, LinksComponent],
  templateUrl: './section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent {
  content = input.required<Meaning>();
}
