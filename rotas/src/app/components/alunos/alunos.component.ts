import { Component, OnInit } from "@angular/core";

import { Aluno } from "src/app/interfaces/aluno.interface";
import { AlunoService } from "src/app/services/aluno.service";

@Component({
  selector: "app-alunos",
  templateUrl: "./alunos.component.html",
  styleUrls: ["./alunos.component.scss"],
})
export class AlunosComponent implements OnInit {
  listaAlunos: Aluno[] = [];
  pagina: number = 1;
  quantidadeAlunos: number = 0;
  quantidadePaginas: number = 0;
  TAMANHO_PAGINA: number = 0;

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.listaAlunos.push(...this.alunoService.getAlunos());
    this.quantidadeAlunos = this.listaAlunos.length;
    this.TAMANHO_PAGINA = AlunoService.TAMANHO_PAGINA;
    this.quantidadePaginas = Math.floor(this.quantidadeAlunos / this.TAMANHO_PAGINA);
  }

  listaPaginada() {
    const inicio: number = (this.pagina - 1) * this.TAMANHO_PAGINA;
    const fim: number = this.pagina * this.TAMANHO_PAGINA;
    return this.listaAlunos.slice(inicio, fim);
  }

  proximaPagina() {
    this.pagina++;
  }

  paginaAnterior() {
    if (this.pagina > 1) this.pagina--;
  }
}
