import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
 
@Injectable()
export class SolicitudInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // Modificamos la URL de la petición para enviarle nuestro API_TOKEN.
 
      request = request.clone({
          url: request.url + '&APPID=' + environment.API_TOKEN
      });
 
      return next.handle(request);
  }
}