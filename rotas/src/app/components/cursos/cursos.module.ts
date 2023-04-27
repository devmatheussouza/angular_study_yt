import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CursosComponent } from "./cursos.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";
import { CursoService } from "src/app/services/curso.service";
import { CursosRoutingModule } from "./cursos.routing.module";

@NgModule({
  declarations: [CursosComponent, CursoDetalheComponent, CursoNaoEncontradoComponent],
  imports: [CommonModule, CursosRoutingModule],
  exports: [],
  providers: [CursoService],
})
export class CursosModule {}
