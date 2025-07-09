import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemStateService } from '../../../services/state/ThemState.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [NgClass],
  templateUrl: './theme-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggleComponent {
  themeState = inject(ThemStateService);

  get currentThemeValue() {
    return this.themeState.currentTheme();
  }
}
