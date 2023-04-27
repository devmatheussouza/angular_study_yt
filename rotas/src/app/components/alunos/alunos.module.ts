import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { AlunoService } from "src/app/services/aluno.service";
import { AlunoAtualizadoComponent } from "./aluno-atualizado/aluno-atualizado.component";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunoNaoEncontradoComponent } from "./aluno-nao-encontrado/aluno-nao-encontrado.component";
import { AlunosComponent } from "./alunos.component";
import { AlunosRoutingModule } from "./alunos.routing.module";

@NgModule({
  imports: [CommonModule, FormsModule, AlunosRoutingModule],
  exports: [],
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent,
    AlunoNaoEncontradoComponent,
    AlunoAtualizadoComponent,
  ],
  providers: [AlunoService],
})
export class AlunosModule {}
