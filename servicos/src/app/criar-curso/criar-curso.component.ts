import { Component, OnInit } from "@angular/core";
import { CursosService } from "../cursos/cursos.service";

@Component({
  selector: "app-criar-curso",
  templateUrl: "./criar-curso.component.html",
  styleUrls: ["./criar-curso.component.css"],
})
export class CriarCursoComponent implements OnInit {
  listaCursos: string[] = [];

  constructor(private _cursosService: CursosService) {}

  ngOnInit(): void {
    this.listaCursos = this._cursosService.getCursos();
  }

  onAddCurso(novoCurso: HTMLInputElement) {
    const input: string = novoCurso.value.trim();
    if (novoCurso.value !== "" && input !== "") this._cursosService.addCurso(novoCurso.value);
    novoCurso.value = "";
  }
}
