import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { FormCanDeactivate } from "../interfaces/form-candeactivate.interface";

export class AlunosDeactivateGuard implements CanDeactivate<FormCanDeactivate> {
  canDeactivate(
    component: FormCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.podeDesativarRota();
  }
}
