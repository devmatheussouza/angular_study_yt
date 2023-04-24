import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CursosService {
  private _listaCursos: string[] = ["Java", "Angular", "MySQL"];

  static criouNovoCurso = new EventEmitter<string>();

  getCursos() {
    return this._listaCursos;
  }

  addCurso(novoCurso: string) {
    this._listaCursos.push(novoCurso);
    CursosService.criouNovoCurso.emit(novoCurso);
  }
}
