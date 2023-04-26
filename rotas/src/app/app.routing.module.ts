import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { CursosComponent } from "./components/cursos/cursos.component";
import { CursoDetalheComponent } from "./components/cursos/curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./components/cursos/curso-nao-encontrado/curso-nao-encontrado.component";

const APP_ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "cursos", component: CursosComponent },
  { path: "curso/:id", component: CursoDetalheComponent },
  { path: "naoEncontrado", component: CursoNaoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
