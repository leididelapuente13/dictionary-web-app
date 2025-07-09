import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { SearchService } from '../../services/api/search.service';

@Component({
  selector: 'dictionary-search-bar',
  imports: [ReactiveFormsModule, NgOptimizedImage, NgClass, ErrorMessageComponent],
  templateUrl: './search-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  form = new FormGroup({
    query: new FormControl('', [Validators.required])
  });
  searchService = inject(SearchService);
  wordSearch = output<string>();

  onSearch() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return
    }
    this.searchService.setWordToSearch(this.form.value.query!);
    this.wordSearch.emit(this.form.value.query!);
  }

  isValidField() {
    const control = this.form.controls['query'];
    return !!(control?.errors && control.touched)
  }

  getTextError(errors: ValidationErrors) {
    for (const key of Object.keys(errors)) {
      if (key === 'required') {
        return 'Whoops, can’t be empty…'
      }
    }
    return null;
  }

  getFieldError() {
    const control = this.form.controls['query'];
    if (!control) return null
    return this.getTextError(control.errors ?? {});
  }
}
