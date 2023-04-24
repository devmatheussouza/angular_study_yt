import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { CursosComponent } from "./components/cursos/cursos.component";
import { routing } from "./app.routing";

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, CursosComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatSliderModule, routing],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
