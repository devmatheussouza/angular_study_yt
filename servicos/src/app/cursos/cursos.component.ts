import { Component, OnInit } from "@angular/core";

import { CursosService } from "./cursos.service";

@Component({
  selector: "app-cursos",
  templateUrl: "./cursos.component.html",
  styleUrls: ["./cursos.component.css"],
})
export class CursosComponent implements OnInit {
  // private _cursosService: CursosService;
  constructor(private _cursosService: CursosService) {
    // this._cursosService = new CursosService();
  }

  ngOnInit(): void {
    this.listaCursos = this._cursosService.getCursos();
  }

  listaCursos: string[] = [];
}
