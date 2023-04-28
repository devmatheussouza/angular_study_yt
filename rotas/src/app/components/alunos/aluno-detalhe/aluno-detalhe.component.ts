import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Subscription } from "rxjs";
import { Aluno } from "src/app/interfaces/aluno.interface";
import { AlunoService } from "src/app/services/aluno.service";

@Component({
  selector: "app-aluno-detalhe",
  templateUrl: "./aluno-detalhe.component.html",
  styleUrls: ["./aluno-detalhe.component.scss"],
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  inscricao: Subscription;
  // id: string = "";
  aluno: Aluno;

  constructor(private alunoService: AlunoService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // this.inscricao = this.activatedRoute.params.subscribe((params: any) => {
    //   this.id = params["id"];
    //   this.aluno = this.alunoService.getAlunoById(this.id);

    //   if (!this.aluno) this.router.navigate(["alunos/naoEncontrado"]);
    // });

    this.inscricao = this.activatedRoute.data.subscribe((dados: { aluno: Aluno }) => (this.aluno = dados.aluno));
    if (!this.aluno) this.router.navigate(["alunos/naoEncontrado"]);
  }

  ngOnDestroy(): void {
    this.inscricao?.unsubscribe();
  }

  editarAluno() {
    this.router.navigate([`alunos/${this.aluno?.id}/editar`]);
  }
}
