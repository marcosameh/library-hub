import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ToastContainerComponent } from './shared/components/toast-container/toast-container.component';

@Component({
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ToastContainerComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('library-hub');
}
