import { Component, input } from '@angular/core';
import { BookListItem } from '../../core/models/book.model';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [RouterLink,CurrencyPipe],
  selector: 'app-book-card',
  styleUrl: './book-card.component.scss',
  templateUrl: './book-card.component.html',
})
export class BookCardComponent {
  book=input.required<BookListItem>();
}
