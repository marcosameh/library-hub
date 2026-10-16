import { Component } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';

@Component({
  imports: [BookCardComponent,PaginationComponent],
  selector: 'app-books-list',
  styleUrl: './books-list.component.scss',
  templateUrl: './books-list.component.html',
})
export class BooksListComponent {}
