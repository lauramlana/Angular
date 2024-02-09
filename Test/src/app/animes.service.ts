import { Injectable } from '@angular/core';
import { Animes } from './animes';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {
  protected animeList: Animes[] = [
    {
      id: 0,
      name: 'Naruto Shippuden',
      photo: 'assets/narutoshippuden.jpe',
      streaming: "Netflix",
      episodes: 100,
      type: "Shounen"
    },
    {
      id: 1,
      name: 'One Piece',
      photo: `assets/onepiece.jpe`,
      streaming: "Netflix",
      episodes: 100,
      type: "Shounen"
    },
    {
      id: 2,
      name: 'Death Note',
      photo: `assets/deathnote.jpe`,
      streaming: "Netflix",
      episodes: 100,
      type: "Suspense"
    },
    {
      id: 3,
      name: 'Kuroku no Basket',
      photo: `assets/kurokunobasket.jpe`,
      streaming: "Netflix",
      episodes: 100,
      type: "Sport"  
    },
    {
      id: 4,
      name: 'Dragon Ball',
      photo: `assets/dragonballz.jpe`,
      streaming: "Netflix",
      episodes: 100,
      type: "Shounen"
    },
    {
      id: 5,
      name: 'Fullmetal Alchemist Brotherhood',
      photo: `assets/fullmetal.jpe`,
      streaming: "Netflix",
      episodes: 100,
      type: "Shounen"
    },
    {
      id: 6,
      name: 'Demon Slayer',
      photo: `assets/demonslayer.jpe`,
      streaming: "Netflix",
      episodes: 100,
      type: "Shounen"
    },
    {
      id: 7,
      name: 'Shingeki no Kyojin',
      photo: `assets/shingekinokyojin.jpg`,
      streaming: "Netflix",
      episodes: 100,
      type: "Seinen"
    },
    {
      id: 8,
      name: 'Hunte X Hunter',
      photo: `assets/hunterxhunter.jpe`,
      streaming: "Netflix",
      episodes: 100,
      type: "Shounen"
    },
    {
      id: 9,
      name: 'Fairy Tail',
      photo: `assets/fairytail.jpe`,
      streaming: "Netflix",
      episodes: 100,
      type: "Shounen"
    },
    {
      id: 10,
      name: 'Kimini Todoke',
      photo: 'assets/kiminitodoke.jpeg',
      streaming: "Netflix",
      episodes: 10,
      type: "Shoujo"
    },
    {
      id: 11,
      name: 'Blue Spring Ride',
      photo: 'assets/bluespringride.jpg',
      streaming: "Netflix",
      episodes: 10,
      type: "Shoujo"
    },
    {
      id: 12,
      name: 'Bokura Ga Ita',
      photo: 'assets/bokuragaita.jpg',
      streaming: "Netflix",
      episodes: 10,
      type: "Shoujo"
    },
    {
      id: 13,
      name: 'Tokyo Ghoul',
      photo: 'assets/tokyogoul.jpeg',
      streaming: "Netflix",
      episodes: 10,
      type: "Seinen"
    },
    {
      id: 14,
      name: 'Mirai Nikki',
      photo: 'assets/mirainikki.jpeg',
      streaming: "Netflix",
      episodes: 10,
      type: "Suspense"
    },
    {
      id: 15,
      name: 'Haikyuu',
      photo: 'assets/haikyuu.jpg',
      streaming: "Netflix",
      episodes: 10,
      type: "Sport"
    },
    {
      id: 16,
      name: 'Another',
      photo: 'assets/another.jpg',
      streaming: "Netflix",
      episodes: 10,
      type: "Suspense"
    },
    {
      id: 17,
      name: 'Kekegurui',
      photo: 'assets/kakegurui.jpg',
      streaming: "Netflix",
      episodes: 10,
      type: "Suspense"
    }
  ];

  getAllData(): Animes[] {
    return this.animeList;
  }

  getAnimeById(id: number): Animes | undefined {
    return this.animeList.find(animes => animes.id === id);
  }
  
  getDataByType(type: string): Animes[] {
    return this.animeList.filter(anime => anime.type === type);
  }
  constructor() { }
}
