import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'section-subtitle',
  imports: [],
  templateUrl: './subtitle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubtitleComponent {
  subtitle = input.required<string>()
}
