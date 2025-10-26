import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Slider } from './components/slider/slider';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Slider],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('meu_projeto');
}
