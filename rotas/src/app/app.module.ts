import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatSliderModule } from "@angular/material/slider";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { PaginaNaoEncontradaComponent } from "./components/pagina-nao-encontrada/pagina-nao-encontrada.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, PaginaNaoEncontradaComponent],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatSliderModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
