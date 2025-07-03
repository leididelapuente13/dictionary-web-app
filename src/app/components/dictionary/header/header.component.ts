import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { Phonetic } from '../../../interfaces/dictionary.interface';
import { AudioComponent } from "./audio/audio.component";

@Component({
  selector: 'dictionary-header',
  imports: [AudioComponent],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  phonetic = input<Phonetic>()
}
