import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormComponent } from './components/data-form/data-form.component';
import { HomeComponent } from './components/home/home.component';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { TemplateFormModule } from './components/template-form/template-form.module';

@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
    HomeComponent,
    PaginaNaoEncontradaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, TemplateFormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
