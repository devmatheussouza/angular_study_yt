import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AlunosRoutingModule } from "../components/alunos/alunos.routing.module";

@Injectable({
  providedIn: AlunosRoutingModule,
})
export class AlunosGuard implements CanActivateChild {
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (state.url.includes("editar")) {
      alert("Usuário sem acesso para editar!");
      return false;
    }

    return true;
  }
}
