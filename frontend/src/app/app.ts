import { Component } from '@angular/core';
import { RentalsDashboardComponent } from './features/rentals/containers/rentals-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RentalsDashboardComponent],
  template: `<app-rentals-page></app-rentals-page>`,
})
export class App {}
