import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";

const APP_ROUTES: Routes = [
  // Lazy Loading (carregamento sob demanda)
  { path: "cursos", loadChildren: () => import("./components/cursos/cursos.module").then((m) => m.CursosModule) },
  { path: "alunos", loadChildren: () => import("./components/alunos/alunos.module").then((m) => m.AlunosModule) },

  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
