import { Component, inject, OnInit } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { BookListItem, BookQuery } from '../../core/models/book.model';
import { PagedResult } from '../../core/models/paged-result.model';
import { BooksService } from '../../core/services/book.service';

@Component({
  imports: [BookCardComponent,PaginationComponent],
  selector: 'app-books-list',
  styleUrl: './books-list.component.scss',
  templateUrl: './books-list.component.html',
})
export class BooksListComponent implements OnInit {
  bookService= inject(BooksService);
  hasError:boolean=false;
  loading:boolean=true;
  booksPagedResult!: PagedResult<BookListItem>;
  bookQuery:BookQuery={};
  ngOnInit(): void {
   this.getBooks();
  }
  private getBooks(){
  this.bookService.getBooks(this.bookQuery).subscribe({
    next:data => this.booksPagedResult=data,
    error:() =>this.hasError=true,
    complete:()=>this.loading=false
  })
  }
}
