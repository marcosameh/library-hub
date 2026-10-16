import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { BookCardComponent } from './book-card.component';
import { BookListItem } from '../../core/models/book.model';

describe('BookCardComponent', () => {
  let component: BookCardComponent;
  let fixture: ComponentFixture<BookCardComponent>;

  const book: BookListItem = {
    id: 1, title: 'Clean Code', authorName: 'Robert C. Martin', categoryName: 'Programming',
    publishedYear: 2008, price: 29.99, availableCopies: 1, averageRating: 3.5, coverUrl: ''
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCardComponent],
      providers: [provideRouter([])] // RouterLink needs the router
    }).compileComponents();

    fixture = TestBed.createComponent(BookCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('book', book); // required input must be set before rendering
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows the rating as stars', () => {
    const stars = (fixture.nativeElement as HTMLElement).querySelector('.stars')!;
    expect(stars.textContent).toBe('★★★½☆');
  });
});
