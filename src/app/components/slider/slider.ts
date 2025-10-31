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
  intervalo: any;

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

  ngOnInit(){
    this.mudarIntervalo()
  }  
}