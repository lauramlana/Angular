import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports: [
    HomeComponent,
    RouterModule,
  ],
  template: `
  <main>
    <a [routerLink]="['/']">
      <h2> MAIN PAGE </h2>
    </a>  
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>  
  `,
})
export class AppComponent {
  title = 'Test';
}
