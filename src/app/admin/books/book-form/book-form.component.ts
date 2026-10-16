import { Component } from '@angular/core';
import { FieldErrorComponent } from '../../../shared/components/field-error/field-error.component';
import { QuantityInputComponent } from '../../../shared/components/quantity-input/quantity-input.component';

@Component({
  imports: [FieldErrorComponent, QuantityInputComponent],
  selector: 'app-book-form',
  styleUrl: './book-form.component.scss',
  templateUrl: './book-form.component.html',
})
export class BookFormComponent {}
