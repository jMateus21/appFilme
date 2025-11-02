import { AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css']
})
export class Carousel implements AfterViewInit {
  img: String[] = [];
  back = 0;
  next = 1;
  
  @ViewChild('prevBtn') prevBtn!: ElementRef<HTMLDivElement>;
  @ViewChild('poster') poster!: ElementRef<HTMLDivElement>;
  @ViewChild('nextBtn') nextBtn!: ElementRef<HTMLDivElement>;
  

  ngAfterViewInit(){
}

ngOnInit(){
  for (let i = 0; i < 8; i++){
    this.img.push("futuro.jpg")
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
}   