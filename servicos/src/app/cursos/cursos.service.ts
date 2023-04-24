import { EventEmitter, Injectable } from "@angular/core";

import { LogService } from "../shared/log.service";

@Injectable({
  providedIn: "root",
})
export class CursosService {
  private _listaCursos: string[] = ["Java", "Angular", "MySQL"];

  static criouNovoCurso = new EventEmitter<string>();

  constructor(private _logService: LogService) {}

  getCursos() {
    this._logService.logger("Obtendo lista de cursos!");
    return this._listaCursos;
  }

  addCurso(novoCurso: string) {
    this._logService.logger(`Criando um novo curso: ${novoCurso}`);
    this._listaCursos.push(novoCurso);
    CursosService.criouNovoCurso.emit(novoCurso);
  }
}
