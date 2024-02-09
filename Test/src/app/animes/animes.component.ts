import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animes } from '../animes'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-animes',
  standalone: true,
  styleUrls: ['./animes.component.css'],
  imports: [
  CommonModule,
  RouterModule
],
  template: `
   <section class="listing">
     <h2>{{ animes.name }}</h2>
     <p>{{ animes.type }}</p>
    <img [src]="animes.photo" alt="Exterior photo of {{animes.name}}" width="300">
    <a [routerLink]="['/details', animes.id]">Learn More</a>
  </section>
  `,
})

export class AnimesComponent {
@Input() animes!: Animes;
}
