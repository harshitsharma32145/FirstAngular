import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('data') == 'true') {
      console.warn('auth working')
      return true
    }
    return false
  }

  users()
  {
    return [
      { name: 'harshit', email: 'harshit@net.com' },
      { name: "bruce", email: 'bruce@gmail.com' }
    ]
  }

}
