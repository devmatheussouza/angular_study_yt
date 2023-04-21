import { OnInit } from "@angular/core";
import { Component } from "@angular/core";

@Component({
  selector: "app-diretiva-ngif",
  templateUrl: "./diretiva-ngif.component.html",
  styleUrls: ["./diretiva-ngif.component.css"],
})
export class DiretivaNgifComponent implements OnInit {
  listaCursos: string[] = [];
  mostrarCursos: boolean = true;

  constructor() {}
  ngOnInit(): void {}

  onNovoCurso(inputNovoCurso: HTMLInputElement) {
    this.listaCursos.push(inputNovoCurso.value);
    inputNovoCurso.value = "";
  }

  onMostrarCurso() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
