import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Subscription } from "rxjs";
import { Curso } from "src/app/interfaces/curso.interface";
import { CursoService } from "src/app/services/curso.service";

@Component({
  selector: "app-curso-detalhe",
  templateUrl: "./curso-detalhe.component.html",
  styleUrls: ["./curso-detalhe.component.scss"],
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  inscricao: Subscription;
  id: number;
  curso: Curso;

  constructor(private route: ActivatedRoute, private cursoService: CursoService, private router: Router) {
    // this.id = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params["id"];
      this.curso = this.cursoService.getCursoById(this.id);

      if (!this.curso) {
        this.router.navigate(["/cursos/naoEncontrado"]);
      }
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
