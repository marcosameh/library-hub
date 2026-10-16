import { Component } from '@angular/core';
import { FieldErrorComponent } from '../../shared/components/field-error/field-error.component';
import { RatingInputComponent } from '../../shared/components/rating-input/rating-input.component';

@Component({
  imports: [FieldErrorComponent, RatingInputComponent],
  selector: 'app-book-reviews',
  styleUrl: './book-reviews.component.scss',
  templateUrl: './book-reviews.component.html',
})
export class BookReviewsComponent {}
