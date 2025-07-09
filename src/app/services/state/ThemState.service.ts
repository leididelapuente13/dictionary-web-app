import { Injectable, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThemeType } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ThemStateService {

  private document = inject(DOCUMENT);
  private readonly THEME_KEY: string = 'dictionary-app-default-theme';
  public currentTheme = signal<ThemeType>(this.getTheme());

  private getDeviceDefaultTheme(): ThemeType {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private getThemeFromLocalStorage(): ThemeType | undefined {
    const storedTheme = localStorage.getItem(this.THEME_KEY);
    console.log('theme:', localStorage.getItem(this.THEME_KEY) as ThemeType)
    return storedTheme ? storedTheme as ThemeType : undefined;
  }

  private storeThemeInLocalStorage(theme: ThemeType) {
    localStorage.setItem(this.THEME_KEY, theme);
  }

  private getTheme(): ThemeType {
    return this.getThemeFromLocalStorage() ?? this.getDeviceDefaultTheme();
  }

  private toggleThemeClass() {
    this.currentTheme() === 'light' ? this.document.body.classList.remove('dark') : this.document.body.classList.add('dark');
  }

  public toggleTheme() {
    this.currentTheme.set(this.currentTheme() === 'light' ? 'dark' : 'light');
    this.toggleThemeClass();
    this.storeThemeInLocalStorage(this.currentTheme());
  }

  constructor() {
    this.toggleThemeClass();
  }
}
