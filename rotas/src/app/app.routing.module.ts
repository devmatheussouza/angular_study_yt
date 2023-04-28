import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { PaginaNaoEncontradaComponent } from "./components/pagina-nao-encontrada/pagina-nao-encontrada.component";
import { AuthGuard } from "./guards/auth.guard";
import { CursosGuard } from "./guards/cursos.guard";

const APP_ROUTES: Routes = [
  // Lazy Loading (carregamento sob demanda)
  {
    path: "cursos",
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard],
    loadChildren: () => import("./components/cursos/cursos.module").then((m) => m.CursosModule),
  },
  // Lazy Loading (carregamento sob demanda)
  {
    path: "alunos",
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () => import("./components/alunos/alunos.module").then((m) => m.AlunosModule),
  },
  { path: "login", canActivate: [], component: LoginComponent },
  { path: "home", canActivate: [AuthGuard], component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", canActivate: [], component: PaginaNaoEncontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
