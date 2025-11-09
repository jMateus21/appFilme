import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-film',
  imports: [],
  templateUrl: './film.html',
  styleUrl: './film.css'
})
export class Film implements OnInit {
  @Input() id!: number;
  @Output() genreChange = new EventEmitter<number>();
  url: string = 'http://localhost:8080';
  backdrop!: string;
  poster!: string;
  title!: string;
  rate!: string;
  overview: string = '';
  genre!: number;
  runtime!: number;
  release!: number;
  genres: string[] = [];


  async filmeCarousel() {
    const filmes = await fetch(`${this.url}/film/${this.id}`);
    const filmesFilter: any = await filmes.json();

    this.backdrop = `https://image.tmdb.org/t/p/original${filmesFilter.backdrop_path}`;
    this.poster = `https://image.tmdb.org/t/p/original${filmesFilter.poster_path}`;
    this.title = `${filmesFilter.title}`;
    this.rate = `${filmesFilter.vote_average}`;
    this.overview = `${filmesFilter.overview}`;
    this.genre = Number(filmesFilter.genres[0].id);
    this.genreChange.emit(this.genre);
    this.runtime = Number(filmesFilter.runtime);
    this.release = new Date(filmesFilter.release_date).getFullYear();

    for(let i = 0; i < filmesFilter.genres.length; i++){
      this.genres.push(filmesFilter.genres[i].name);
    }
  }


  async ngOnInit(): Promise<void> {
    await this.filmeCarousel();
    console.log(this.overview);
  }
}
