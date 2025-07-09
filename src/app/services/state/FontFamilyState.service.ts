import { Injectable, signal } from '@angular/core';
import { FontFamilyTypes } from '../../interfaces/fonts.interface';

@Injectable({
  providedIn: 'root'
})
export class FontFamilyStateService {

  FONT_KEY = 'dictionary-app-theme';
  currentFont = signal<FontFamilyTypes>(this.getFont());

  private storeCurrentFontInLocalStorage(font: FontFamilyTypes) {
    localStorage.setItem(this.FONT_KEY, font);
  }

  private getFontInLocalStorage(): FontFamilyTypes | undefined {
    const fontInLocalStorage = localStorage.getItem(this.FONT_KEY);
    return fontInLocalStorage as FontFamilyTypes ?? undefined;
  }

  private getFont(): FontFamilyTypes {
    return this.getFontInLocalStorage() ?? 'serif';
  }

  public changeFont(font: FontFamilyTypes) {
    this.currentFont.set(font);
    this.storeCurrentFontInLocalStorage(this.currentFont());
  }

}
