import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Definition } from '../../../../interfaces';
import { SubtitleComponent } from '../subtitle/subtitle.component';

@Component({
  selector: 'section-list',
  imports: [SubtitleComponent],
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  definitions = input<Definition[]>();
}
