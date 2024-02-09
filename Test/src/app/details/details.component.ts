import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AnimesService } from '../animes.service';
import { Animes } from '../animes';

@Component({
  selector: 'app-details',
  standalone: true,
  styleUrls: ['./details.component.css'],
  imports: [
    CommonModule,
    // ReactiveFormsModule
  ],
  template: `
  <article>
      <img [src]="animes?.photo" alt="{{animes?.name}}" width="500"/>
        <h1>{{animes?.name}}</h1>
      <section>
        <p>About this Anime</p>
        <ul>
          <li>Avaiable on: {{animes?.streaming}}</li>
          <li>Episodes number: {{animes?.episodes}}</li>
          <li>Type: {{animes?.type}}</li>
        </ul>
      </section>
    </article>
`,
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  animesService = inject(AnimesService);
  animes: Animes | undefined;

  constructor() {
    const animesId = Number(this.route.snapshot.params['id']);
    this.animes = this.animesService.getAnimeById(animesId);
  }
}
