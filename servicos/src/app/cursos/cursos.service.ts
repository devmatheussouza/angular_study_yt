import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CursosService {
  private _listaCursos: string[] = ["Java", "Angular", "MySQL"];

  getCursos() {
    return this._listaCursos;
  }

  addCurso(novoCurso: string) {
    this._listaCursos.push(novoCurso);
  }
}
