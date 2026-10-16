import { Component } from '@angular/core';
import { BookReviewsComponent } from '../book-reviews/book-reviews.component';

@Component({
  imports: [BookReviewsComponent],
  selector: 'app-book-details',
  styleUrl: './book-details.component.scss',
  templateUrl: './book-details.component.html',
})
export class BookDetailsComponent {}
