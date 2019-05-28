import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.css']
})
export class WeatherBoardComponent implements OnInit {

  public listWeather:Array<Object> = [];

  constructor(private _sharedService:SharedService) { }

  ngOnInit() {
    // this._sharedService.countryList$.subscribe(x=>{
    //   if(x)
    //   {
    //     this.listWeather = x;
    //   }
    // }) //Espera todo el tiempo un valor
    this.listWeather = this._sharedService.getValueCountry(); //Se puede obtener el valor en cualquier momento con esto, sin necesidad de pedirlo siempre.
  }

}
