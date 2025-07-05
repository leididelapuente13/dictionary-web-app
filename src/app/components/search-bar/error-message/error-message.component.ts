import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'searchbar-error-message',
  imports: [],
  templateUrl: './error-message.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessageComponent {
  message = input<string>();
}
