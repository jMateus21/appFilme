import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel {
  img: String[] = [];

  ngOnInit(){
    for (let i = 0; i < 10; i++){
      this.img.push("futuro.jpg")
    }
  }
}  