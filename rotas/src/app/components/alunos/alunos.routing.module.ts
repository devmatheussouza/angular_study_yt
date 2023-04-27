import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AlunosComponent } from "./alunos.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";

const ALUNOS_ROUTES: Routes = [
  {
    path: "alunos",
    component: AlunosComponent,
    children: [
      { path: "novo", component: AlunoFormComponent },
      { path: ":id", component: AlunoDetalheComponent },
      { path: ":id/editar", component: AlunoFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ALUNOS_ROUTES)],
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
