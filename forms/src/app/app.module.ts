import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormModule } from './components/data-form/data-form.module';
import { HomeComponent } from './components/home/home.component';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { TemplateFormModule } from './components/template-form/template-form.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, PaginaNaoEncontradaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TemplateFormModule,
    DataFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
