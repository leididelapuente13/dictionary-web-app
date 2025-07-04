import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'dictionary-source-link',
  imports: [NgClass],
  templateUrl: './source-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SourceLinkComponent {
  sourcePaths = input.required<string[]>();
}
