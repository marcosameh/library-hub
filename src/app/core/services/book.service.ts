import { inject, Service } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../tokens/api-url.token';
import { BookListItem, BookQuery } from '../models/book.model';
import { PagedResult } from '../models/paged-result.model';

@Service()
export class BooksService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = inject(API_URL);

  getBooks(query: BookQuery): Observable<PagedResult<BookListItem>> {
    let params = new HttpParams();

    for (const [key, value] of Object.entries(query)) {
      // skip undefined, null and empty strings, so we never send "search=" or "categoryId=undefined"
      if (value !== undefined && value !== null && value !== '') {
        params = params.set(key, value);
      }
    }

    return this.http.get<PagedResult<BookListItem>>(`${this.apiUrl}/books`, { params });
  }
}