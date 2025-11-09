import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Slider } from "../../components/slider/slider";
import { Carousel } from "../../components/carousel/carousel";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [Header, Slider, Carousel, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
