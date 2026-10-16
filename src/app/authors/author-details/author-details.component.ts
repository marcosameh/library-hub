import { Component } from '@angular/core';
import { BookCardComponent } from '../../books/book-card/book-card.component';

@Component({
  imports: [BookCardComponent],
  selector: 'app-author-details',
  styleUrl: './author-details.component.scss',
  templateUrl: './author-details.component.html',
})
export class AuthorDetailsComponent {}
