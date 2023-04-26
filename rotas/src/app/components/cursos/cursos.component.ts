import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Subscription } from "rxjs";
import { Curso } from "src/app/interfaces/curso.interface";
import { CursoService } from "src/app/services/curso.service";

@Component({
  selector: "app-cursos",
  templateUrl: "./cursos.component.html",
  styleUrls: ["./cursos.component.scss"],
})
export class CursosComponent implements OnInit, OnDestroy {
  listaCursos: Curso[];
  pagina: number = 1;
  inscricaoPagina: Subscription;
  quantidadeCursos: number = 0;

  constructor(private cursoService: CursoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.inscricaoPagina = this.route.queryParams.subscribe(
      (queryParams: any) => (this.pagina = queryParams["pagina"])
    );
    this.listaCursos = this.cursoService.getCursos();
    this.quantidadeCursos = this.listaCursos.length;
  }

  ngOnDestroy(): void {
    this.inscricaoPagina.unsubscribe();
  }

  proximaPagina() {
    this.pagina++;
    this.listaCursos = this.listaPaginada();
  }

  paginaAnterior() {
    if (this.pagina > 1) {
      this.pagina--;
      this.listaCursos = this.listaPaginada();
    }
  }

  listaPaginada() {
    const pagina = this.pagina - 1;
    return this.cursoService
      .getCursos()
      .slice(pagina * CursoService.CURSOS_POR_PAGINA, (pagina + 1) * CursoService.CURSOS_POR_PAGINA);
  }
}
