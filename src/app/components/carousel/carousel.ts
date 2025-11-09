import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-carousel',
  imports: [RouterLink],
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css']
})
export class Carousel implements AfterViewInit, OnChanges {

  img: string[] = [];
  title: string[] = [];
  idFilme: string[] = [];
  genre: string[] = [];
  url: string = 'http://localhost:8080';
  @Input() secao!: number;
  back = 0;
  next = 1;

  @ViewChild('poster') poster!: ElementRef<HTMLDivElement>;


  ngAfterViewInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['secao'] && this.secao) {
      this.filmeCarousel();
      console.log(this.genre);
    }
    this.genreName();
  }

  async filmeCarousel() {
    const filmes = await fetch(`${this.url}/carousel/${this.secao}`);
    const filmesFilter: any = await filmes.json();

    for (let i = 0; i < 9; i++) {
      this.img.push(`https://image.tmdb.org/t/p/w500/${filmesFilter[i].poster_path}`)
      this.title.push(filmesFilter[i].title)
      this.idFilme.push(filmesFilter[i].id)
    }
  }

  async genreName() {
    const filmes = await fetch(`${this.url}/genre`);
    const filmesFilter: any = await filmes.json();

    this.genre.push(filmesFilter.genres);
  }

  scrollPrev() {
    const poster = this.poster.nativeElement;
    const view = poster.clientWidth * -1;
    poster.scrollBy({ left: view, behavior: 'smooth' })
    this.back = 0;
    this.next = 1;
  }

  scrollNext() {
    const poster = this.poster.nativeElement;
    const view = poster.clientWidth;
    const maxScroll = poster.clientWidth - poster.scrollWidth;
    poster.scrollBy({ left: view, behavior: 'smooth' })
    this.back = 1;
    this.next = 0;
    console.log(this.genre);
  }



  genreMap: Record<number, string> = {
    16: 'Animação',
    12: 'Aventura',
    27: 'horror',
    28: 'Ação',
    18: 'Drama',
    35: 'Comédia',
    14: 'Fantasia',
    80: 'Crime',
    878:'Ficção científica',
  }

  getGenreName(): string {
    return this.genreMap[this.secao];
  }
}