import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Subscription } from "rxjs";
import { Aluno } from "src/app/interfaces/aluno.interface";
import { AlunoService } from "src/app/services/aluno.service";

@Component({
  selector: "app-aluno-form",
  templateUrl: "./aluno-form.component.html",
  styleUrls: ["./aluno-form.component.scss"],
})
export class AlunoFormComponent implements OnInit {
  inscricao: Subscription;
  id: string = "";
  aluno: Aluno;

  inputNome: string = "";
  inputEmail: string = "";

  constructor(private alunoService: AlunoService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.id = params["id"];

      if (this.id) {
        this.aluno = this.alunoService.getAlunoById(this.id);
      } else {
        this.router.navigate(["alunos/novo"]);
      }
    });
  }

  ngOnDestroy(): void {
    this.inscricao?.unsubscribe();
  }

  atualizarAluno() {
    this.alunoService.updateAluno(this.id, this.inputNome, this.inputEmail);

    this.inputNome = "";
    this.inputEmail = "";
    this.id = "";

    this.router.navigate(["/alunos/atualizado"]);
  }
}
