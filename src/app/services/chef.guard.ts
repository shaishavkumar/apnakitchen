import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ChefGuard implements CanActivate {
  
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      console.log('enetered chef giard');
    
    if(sessionStorage.currentchef==undefined){
      this.router.navigate(['login'])
      return false}  
    else{

      return (sessionStorage.length==0)?false:JSON.parse(sessionStorage.currentchef).session;
    }
  
    }
}
