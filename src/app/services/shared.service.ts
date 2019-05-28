import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private countryList = new BehaviorSubject<Array<Object>>(null);
  public countryList$ = this.countryList.asObservable();
  private list:number = 0;

  constructor() { }

  public updateListCountry(list?)
  {
    if(list)
      this.countryList.next(list);
  }

  public getValueCountry()
  {
    return this.countryList.getValue();
  }


}
