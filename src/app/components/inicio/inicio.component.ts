import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { SharedService } from 'src/app/services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public listCountries: Array<Object> = [
    { pais: "Brazil", id: 3469034 }, { pais: "Mexico", id: 1699806 }, { pais: "Bolivia", id: 4456615 }, { pais: "Peru", id: 4905770 }]

  public listWeather: Array<Object> = [];
  public weatherSubscription: Subscription;

  constructor(private _weatherService: WeatherService, private _sharedService: SharedService) { }

  ngOnInit() {
    this.listWeather = [];
    this._sharedService.updateListCountry(this.listWeather);
  }

  public countrySelected($event) {
    this.weatherSubscription = this._weatherService.getWeatherById($event).subscribe(x => {
      this.listWeather.push(x);
      this._sharedService.updateListCountry(this.listWeather);
    })
  }

  ngOnDestroy() {
    // acciones de destrucción, se debe destruir la subscripción al observable
    if(this.weatherSubscription)
      this.weatherSubscription.unsubscribe();
  }
}
