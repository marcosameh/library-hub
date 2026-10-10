import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component')
        .then(m => m.DashboardComponent)
  },
  {
    path: 'books',
    children: [
      {
        path: 'new',
        loadComponent: () =>
          import('./books/book-new.component')
            .then(m => m.BookNewComponent)
      },
      {
        path: ':id/edit',
        loadComponent: () =>
          import('./books/book-edit.component')
            .then(m => m.BookEditComponent)
      }
    ]
  },
  {
    path: 'loans',
    loadComponent: () =>
      import('./loans/loans.component')
        .then(m => m.LoansComponent)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }
];