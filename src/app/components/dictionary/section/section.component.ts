import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TitleComponent } from "./title/title.component";
import { SubtitleComponent } from "./subtitle/subtitle.component";
import { LinksComponent } from "../links/links.component";
import { Meaning } from '../../../interfaces';

@Component({
  selector: 'dictionary-section',
  imports: [TitleComponent, SubtitleComponent, LinksComponent],
  templateUrl: './section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent {
  content = input.required<Meaning>();
}
