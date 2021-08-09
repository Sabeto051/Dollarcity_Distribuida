import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CognitoService } from 'src/app/modules/core/services/cognito/cognito.service';

@Injectable({
  providedIn: 'root',
})
export class CognitoGuard implements CanActivate {
  constructor(private cognito: CognitoService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.cognito.getAuthenticatedUser().then();
  }
}
