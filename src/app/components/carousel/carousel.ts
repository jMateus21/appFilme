import { AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css']
})
export class Carousel implements AfterViewInit {
  img: String[] = [];
  url: string = 'http://localhost:8080';
  @Input() secao!: number;
  back = 0;
  next = 1;
  
  @ViewChild('prevBtn') prevBtn!: ElementRef<HTMLDivElement>;
  @ViewChild('poster') poster!: ElementRef<HTMLDivElement>;
  @ViewChild('nextBtn') nextBtn!: ElementRef<HTMLDivElement>;
  

  ngAfterViewInit(){
}

ngOnInit(){
  this.filmeCarousel();
}

async filmeCarousel(){
    const filmes = await fetch(`${this.url}/carousel?genre=${this.secao}`)
    const filmesFilter: any = await filmes.json();

    for(let i = 0; i < 8; i++){
      this.img.push(`https://image.tmdb.org/t/p/original${filmesFilter[i].poster_path}`)
    }
  }

scrollPrev() {
  const poster = this.poster.nativeElement;
  const view = poster.clientWidth * -1;
  poster.scrollBy({left: view, behavior: 'smooth'}) 
  this.back = 0;
  this.next = 1;
}

scrollNext() {
  const poster = this.poster.nativeElement;
  const view = poster.clientWidth;
  const maxScroll = poster.clientWidth - poster.scrollWidth;
  poster.scrollBy({left: view, behavior: 'smooth'})
  this.back = 1;
  this.next = 0;
}

genreMap: Record<number, string> =  {
  16: 'Animação',
  12: 'Aventura',
  99: 'Documentário',
  18: 'Drama'
}

getGenreName(): string {
  return this.genreMap[this.secao];
}
}