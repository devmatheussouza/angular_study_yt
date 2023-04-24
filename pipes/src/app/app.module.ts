import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
registerLocaleData(localeBr);

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { PascalCasePipe } from './pipes/pascal-case.pipe';
import { SettingsService } from './services/settings.service';
import { FiltroArrayPipe } from './pipes/filtro-array.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    PascalCasePipe,
    FiltroArrayPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [
    /*{
      provide: LOCALE_ID,
      useValue: 'pt-br',
      // useClass: ...
      // useFactory: ...
    },*/
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService: any) => settingsService.getLocale(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
