import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        // Si el user esta logueado dejamos que vaya a la pantalla de Login
        if (false) {
            console.log('No estás logueado');
            this.router.navigate(['/page-not-found']);
            return false;
        }

        return true;
    }
}
