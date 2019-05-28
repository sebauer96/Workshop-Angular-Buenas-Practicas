import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InicioRoutingModule } from './inicio-routing.module';
import { WeatherBoardComponent } from './weather-board/weather-board.component';
import { InicioComponent } from './inicio.component';
import { DropdownComponent } from '../common/dropdown/dropdown.component';
import { WeatherComponent } from './weather/weather.component';
import { ConvertDegreesPipe } from 'src/app/pipes/convert-degrees.pipe';

@NgModule({
  declarations: [WeatherBoardComponent,InicioComponent, DropdownComponent, WeatherComponent,ConvertDegreesPipe],
  imports: [
    NgbModule,
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
