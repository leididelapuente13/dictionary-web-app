import { NgClass, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { ErrorMessageComponent } from "./error-message/error-message.component";
import { FormControl, FormGroup, Validators, ReactiveFormsModule, ValidationErrors } from '@angular/forms';

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

  wordSearch = output<string>();

  onSearch() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return
    }
    console.log(this.form.value)
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
