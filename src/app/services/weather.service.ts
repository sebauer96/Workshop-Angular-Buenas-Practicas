import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getWeatherById(id:number):Observable<any>{
    return this.http.get(environment.urlWeather + "weather?id=" + id);
  }
  
}
