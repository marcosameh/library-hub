/** One row of GET /api/books (the list view) */
export interface BookListItem {
  id: number;
  title: string;
  authorName: string;
  categoryName: string;
  publishedYear: number;
  price: number;
  availableCopies: number;
  averageRating: number;
  coverUrl: string;
}

export type BookSortBy = 'title' | 'year' | 'price' | 'rating' | 'createdAt';
export type SortDir = 'asc' | 'desc';

/** Query params for GET /api/books. All optional: the API uses defaults for missing ones. */
export interface BookQuery {
  search?: string;
  categoryId?: number;
  authorId?: number;
  onlyAvailable?: boolean;
  minYear?: number;
  maxYear?: number;
  sortBy?: BookSortBy;
  sortDir?: SortDir;
  /** 1-based. API default: 1 */
  page?: number;
  /** 1–50. API default: 10 */
  pageSize?: number;
}
