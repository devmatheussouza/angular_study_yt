import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AlunoDetalheResolver } from "src/app/guards/aluno-detalhe.resolver";
import { AlunosDeactivateGuard } from "src/app/guards/alunos-deactivate.guard";
import { AlunosGuard } from "src/app/guards/alunos.guard";
import { AlunoAtualizadoComponent } from "./aluno-atualizado/aluno-atualizado.component";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunoNaoEncontradoComponent } from "./aluno-nao-encontrado/aluno-nao-encontrado.component";
import { AlunosComponent } from "./alunos.component";

const ALUNOS_ROUTES: Routes = [
  {
    path: "",
    component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children: [
      { path: "novo", component: AlunoFormComponent },
      { path: "naoEncontrado", component: AlunoNaoEncontradoComponent },
      { path: "atualizado", component: AlunoAtualizadoComponent },
      { path: ":id", component: AlunoDetalheComponent, resolve: { aluno: AlunoDetalheResolver } },
      { path: ":id/editar", component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ALUNOS_ROUTES)],
  exports: [RouterModule],
  providers: [AlunosGuard, AlunosDeactivateGuard, AlunoDetalheResolver],
})
export class AlunosRoutingModule {}
