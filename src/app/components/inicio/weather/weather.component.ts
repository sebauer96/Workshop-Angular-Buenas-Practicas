import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public bordeado: boolean = false;

  @ViewChild("card") card: ElementRef;
  @Input() weather: Object;
  public dropElement: boolean = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    console.log(this.weather);
  }

  public maxMinBody() {
    if (!this.bordeado) {
      this.renderer.addClass(this.card.nativeElement, "borderClick");
    }
    else {
      this.renderer.removeClass(this.card.nativeElement, "borderClick");
    }
    this.bordeado = !this.bordeado;
  }

  public delete() {
    this.dropElement = true; //Para no seguir agregando funcionalidad innecesaria lo hice así, pero esto deberia retornarse con un Output al padre y sacarse de la lista

  }
}
