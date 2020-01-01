import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { SidebarComponent } from './doctor/sidebar/sidebar.component';


@Injectable({
  providedIn: 'root'
})
export class ExistGuard implements CanDeactivate<SidebarComponent> {
  canDeactivate():boolean{
    let a=window.confirm('Are you sure SignOut');
    if(a){
      return true;
    }
    else {
      return false;
    }
  }
}
