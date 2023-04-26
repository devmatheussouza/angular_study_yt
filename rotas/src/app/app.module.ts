import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { CursosComponent } from "./components/cursos/cursos.component";
// import { routing } from "./app.routing";
import { CursoDetalheComponent } from "./components/curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./components/curso-nao-encontrado/curso-nao-encontrado.component";
import { AppRoutingModule } from "./app.routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MatSliderModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
