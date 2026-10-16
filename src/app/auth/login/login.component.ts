import { Component } from '@angular/core';
import { FieldErrorComponent } from '../../shared/components/field-error/field-error.component';

@Component({
  imports: [FieldErrorComponent],
  selector: 'app-login',
  styleUrl: './login.component.scss',
  templateUrl: './login.component.html',
})
export class LoginComponent {}
