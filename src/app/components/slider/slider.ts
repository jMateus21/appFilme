import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.html',
  styleUrls: ['./slider.css']
})

export class Slider {

  url: string = 'http://localhost:8080';
  indiceAtual = 0;
  intervalo: any;

  img: string[] = []
  nome: string[] = []

  ngOnInit(){
    this.mudarIntervalo();
    this.filmeSlider();
  }  

  async filmeSlider(){
    const filmes = await fetch(`${this.url}/slider`)
    const filmesFilter: any = await filmes.json();

    for(let i = 0; i < 5; i++){
      this.img.push(`https://image.tmdb.org/t/p/original${filmesFilter[i].backdrop_path}`)
      this.nome.push(filmesFilter[i].title)
    }
  }

  slidar(indiceAtual: number) {
    this.indiceAtual = indiceAtual;

    clearInterval(this.intervalo)
    this.mudarIntervalo()
  }

  after() {
    if(this.indiceAtual >= this.img.length - 1) {
      this.indiceAtual = 0;
    } else {
      this.indiceAtual++;
    }
  }

  mudarIntervalo() {
    this.intervalo = setInterval(() => {
      this.after();
    }, 4000);
  }

}