import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'dictionary-audio',
  imports: [],
  templateUrl: './audio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioComponent {
  audioUrl = input.required<string>();

  playAudio() {
    if (this.audioUrl() === '' || this.audioUrl() === undefined) return
    new Audio(this.audioUrl()).play().catch(error => {
      console.error(`There has been an error playing the audio`, error)
    });
  }
}
