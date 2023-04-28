import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Aluno } from "../interfaces/aluno.interface";
import { AlunoService } from "../services/aluno.service";

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {
  constructor(private alunoService: AlunoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Aluno> | Promise<Aluno> | Aluno {
    const id: string = route.params["id"];
    return this.alunoService.getAlunoById(id);
  }
}
