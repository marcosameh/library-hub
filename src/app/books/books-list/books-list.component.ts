import { Component, inject, OnInit, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { BookCardComponent } from '../book-card/book-card.component';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { BookListItem, BookQuery } from '../../core/models/book.model';
import { PagedResult } from '../../core/models/paged-result.model';
import { BooksService } from '../../core/services/book.service';

@Component({
  imports: [BookCardComponent, PaginationComponent],
  selector: 'app-books-list',
  styleUrl: './books-list.component.scss',
  templateUrl: './books-list.component.html',
})
export class BooksListComponent implements OnInit {
  private readonly booksService = inject(BooksService);

  // signals: setting them tells Angular to re-render (required in a zoneless app)
  protected readonly loading = signal(true);
  protected readonly hasError = signal(false);
  protected readonly booksPagedResult = signal<PagedResult<BookListItem> | null>(null);

  bookQuery: BookQuery = {};

  ngOnInit(): void {
    this.getBooks();
  }

  protected getBooks(): void {
    this.loading.set(true);
    this.hasError.set(false);

    this.booksService.getBooks(this.bookQuery)
      .pipe(finalize(() => this.loading.set(false))) // runs on success AND on error
      .subscribe({
        next: data => this.booksPagedResult.set(data),
        error: () => this.hasError.set(true)
      });
  }
}
