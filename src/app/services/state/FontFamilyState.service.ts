import { Injectable, signal } from '@angular/core';
import { FontFamilyTypes } from '../../interfaces/fonts.interface';

@Injectable({
  providedIn: 'root'
})
export class FontFamilyStateService {

  currentFont = signal<FontFamilyTypes>('serif')

  changeFont(font: FontFamilyTypes) {
    this.currentFont.set(font);
  }
}
