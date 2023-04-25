import { Component, OnInit } from "@angular/core";
import { Curso } from "src/app/interfaces/curso.interface";
import { CursoService } from "src/app/services/curso.service";

@Component({
  selector: "app-cursos",
  templateUrl: "./cursos.component.html",
  styleUrls: ["./cursos.component.scss"],
})
export class CursosComponent implements OnInit {
  listaCursos: Curso[];

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.listaCursos = this.cursoService.getCursos();
  }
}
