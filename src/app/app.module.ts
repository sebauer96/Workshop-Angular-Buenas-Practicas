import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioModule } from './components/inicio/inicio.module';
import { SolicitudInterceptor } from './interceptors/weather.interceptor';
import { CanActivateViaAuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InicioModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SolicitudInterceptor,
    multi: true
  },CanActivateViaAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
