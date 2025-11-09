import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Header } from "../../components/header/header";
import { Film } from "../../components/film/film";
import { Carousel } from "../../components/carousel/carousel";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  imports: [Header, Film, Carousel],
  templateUrl: './overview.html',
  styleUrl: './overview.css'
})
export class Overview implements OnInit {
  id!: number;
  genre!: number;

  constructor(private route: ActivatedRoute) {} 

  genreChange(event: number){
    this.genre = event;
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id') || '');
    this.route.paramMap.subscribe(params => {
      const newId = Number(params.get('id'));
      if (newId !== this.id) {
        this.id = newId;
        location.reload();
      }
    }); 
    console.log(this.genre);
  }
}
