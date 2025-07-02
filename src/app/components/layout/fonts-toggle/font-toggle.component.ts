import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { FontFamily, FontFamilyTypes } from '../../../interfaces/fonts.interface';
import { FontFamilyStateService } from '../../../services/state/FontFamilyState.service';

@Component({
  selector: 'app-font-toggle',
  imports: [NgClass],
  templateUrl: './font-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FontToggleComponent {
  fontFamilyState = inject(FontFamilyStateService);

  fonts: FontFamily[] = [
    {
      label: "Sans Serif",
      value: "sans"
    },
    {
      label: "Serif",
      value: "serif"
    },
    {
      label: "Mono",
      value: "mono"
    },
  ]

  isFontSelectionOpen = signal<boolean>(false);

  toggleFontSelection() {
    this.isFontSelectionOpen.set(!this.isFontSelectionOpen())
  }

  get currentFontFamily (){
    return this.fontFamilyState.currentFont();
  }

  changeFont(font: FontFamilyTypes) {
    this.fontFamilyState.changeFont(font);
    console.log(this.currentFontFamily);
    this.toggleFontSelection();
  }
}
