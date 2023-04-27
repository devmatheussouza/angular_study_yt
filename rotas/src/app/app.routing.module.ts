import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./guards/auth.guard";

const APP_ROUTES: Routes = [
  // Lazy Loading (carregamento sob demanda)
  {
    path: "cursos",
    canActivate: [AuthGuard],
    loadChildren: () => import("./components/cursos/cursos.module").then((m) => m.CursosModule),
  },
  {
    path: "alunos",
    canActivate: [AuthGuard],
    loadChildren: () => import("./components/alunos/alunos.module").then((m) => m.AlunosModule),
  },

  { path: "", canActivate: [AuthGuard], component: HomeComponent },
  { path: "login", canActivate: [], component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
