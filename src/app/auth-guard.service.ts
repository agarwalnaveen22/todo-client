import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  helper = new JwtHelperService();
  constructor(
    private router: Router,
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = localStorage.getItem('accessToken');
    let resp = !this.helper.isTokenExpired(token);
    if (resp) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}