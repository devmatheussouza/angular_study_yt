import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { AppRoutingModule } from "./app.routing.module";
import { CursosModule } from "./components/cursos/cursos.module";

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatSliderModule, AppRoutingModule, CursosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
