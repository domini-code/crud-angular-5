import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import {AuthService } from '../services/auth.service';




@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router, 
    private authService: AuthService
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.afAuth.authState
      .take(1)
      .map(authState => !! authState)
      .do(logado => {
        if(!logado){
          this.router.navigate(['/login']);
        }
      }); 
  }
}
