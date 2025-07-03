import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'section-title',
  imports: [],
  templateUrl: './title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  title = input.required<string>();
}
