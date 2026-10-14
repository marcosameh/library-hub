/** Generic paged response, e.g. GET /api/books → PagedResult<BookListItem> */
export interface PagedResult<T> {
  items: T[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}
