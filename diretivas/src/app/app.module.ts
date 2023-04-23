import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { DiretivaNgifComponent } from "./diretiva-ngif/diretiva-ngif.component";
import { DiretivaNgswitchComponent } from "./diretiva-ngswitch/diretiva-ngswitch.component";
import { DiretivaNgforComponent } from "./diretiva-ngfor/diretiva-ngfor.component";
import { DiretivaNgclassComponent } from "./diretiva-ngclass/diretiva-ngclass.component";
import { DiretivaNgstyleComponent } from "./diretiva-ngstyle/diretiva-ngstyle.component";
import { FormsModule } from "@angular/forms";
import { ExemploNgcontentComponent } from './exemplo-ngcontent/exemplo-ngcontent.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    ExemploNgcontentComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective,
    HighlightDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
