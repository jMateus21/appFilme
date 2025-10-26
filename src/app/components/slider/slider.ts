import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.html',
  styleUrl: './slider.css'
})
export class Slider {
  img = [
    "vingadores.jpg",
    "duna-2.jpg",
    "titanic.jpg",
  ]

  nome = [
    "Vingadores", "Duna 2", "Titanic"
  ]

  indiceAtual = 0;
  anima = 0;
  intervalo: any;

  slidar(indiceAtual: number) {
    this.indiceAtual = indiceAtual;

    this.anima = -1;

    setTimeout(() => {
      this.anima = indiceAtual;
    }, 100);

    clearInterval(this.intervalo)
    this.mudarIntervalo
  }

  after() {
    if(this.indiceAtual >= this.img.length - 1) {
      this.indiceAtual = 0;
    } else {
      this.indiceAtual++;
    }

    this.anima = -1;

    setTimeout(() => {
      this.anima = this.indiceAtual;
    }, 100);
  }

  mudarIntervalo() {
    this.intervalo = setInterval(() => {
      this.after();
    }, 4000);
  }

  ngOnInit(){
    this.mudarIntervalo()
  }  
}


