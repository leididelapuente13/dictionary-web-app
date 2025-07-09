import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AudioComponent } from './audio/audio.component';
import { ComposePhonetic } from '../../../interfaces';

@Component({
  selector: 'dictionary-header',
  imports: [AudioComponent],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  phonetic = input<ComposePhonetic>()
}
