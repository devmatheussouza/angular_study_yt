import { Component, OnInit } from "@angular/core";

import { CursosService } from "./cursos.service";

@Component({
  selector: "app-cursos",
  templateUrl: "./cursos.component.html",
  styleUrls: ["./cursos.component.css"],
})
export class CursosComponent implements OnInit {
  listaCursos: string[] = [];

  constructor(private _cursosService: CursosService) {}

  ngOnInit(): void {
    this.listaCursos = this._cursosService.getCursos();
    // CursosService.criouNovoCurso.subscribe((curso) => console.log(curso));
  }
}
