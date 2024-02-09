import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnimesComponent } from '../animes/animes.component';
import { Animes } from '../animes';
import { AnimesService } from '../animes.service';

@Component({
  selector: 'app-home',
  standalone: true,
  styleUrls: ['./home.component.css'],
  imports: [ CommonModule,
  AnimesComponent,
],
  template: `
    <form>
      <label>Filter by type: </label>
      <select 
        id="typeFilter"
        (change)="applyFilter($event)" 
        >
        <option *ngFor="let type of uniqueTypes" 
        [value]="type"
        >{{ type }}</option> 
      </select>
      <section>
        <app-animes
        *ngFor="let animes of animesList"
        [animes]="animes"
        >
        </app-animes>
      </section>
    </form>  
  `,
})

export class HomeComponent implements OnInit {
  animesList: Animes[] = [];
  selectedType: string = '';
  uniqueTypes: string[] = [];

  constructor(private animesService: AnimesService) {}

  ngOnInit(): void {
    this.initializeUniqueTypes();
    this.applyFilter(this.selectedType);
  }

  initializeUniqueTypes(): void {
    const allTypes = this.animesService.getAllData().map(anime => anime.type);
    this.uniqueTypes = ['all',...new Set(allTypes)];
  }
  
  applyFilter(selectedType: any) : void {
    this.selectedType = selectedType?.target?.value
    console.log(this.selectedType);
    this.animesList = !this.selectedType || this.selectedType === 'all' ?
    this.animesService.getAllData() : 
    this.animesService.getDataByType(this.selectedType)
  }

}
