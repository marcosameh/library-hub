import { Routes } from '@angular/router';
import { BooksListComponent } from './books/books-list/books-list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'books' },

  { path: 'books', component: BooksListComponent, title: 'Books' },
  {
    path: 'books/:id',
    loadComponent: () =>
      import('./books/book-details/book-details.component').then(m => m.BookDetailsComponent),
    title: 'Book details'
  },
  {
    path: 'authors/:id',
    loadComponent: () =>
      import('./authors/author-details/author-details.component').then(m => m.AuthorDetailsComponent),
    title: 'Author'
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent),
    title: 'Login'
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent),
    title: 'Register'
  },
  {
    path: 'my-loans',
    loadComponent: () => import('./loans/my-loans/my-loans.component').then(m => m.MyLoansComponent),
    title: 'My loans'
    // canActivate: [authGuard]  ← add in Milestone 4
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
    // canMatch: [adminGuard]  ← add in Milestone 4
  },

  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound),
    title: 'Page not found'
  }
];