import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";
import { NgModule } from "@angular/core";

import { CursosComponent } from "./cursos.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";
import { CursoService } from "src/app/services/curso.service";

@NgModule({
  declarations: [CursosComponent, CursoDetalheComponent, CursoNaoEncontradoComponent],
  imports: [CommonModule, RouterModule],
  exports: [],
  providers: [CursoService],
})
export class CursosModule {}
