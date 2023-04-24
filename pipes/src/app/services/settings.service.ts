import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor() {}

  getLocale() {
    const userLocale =
      navigator.language && navigator.language.length
        ? navigator.languages[0]
        : navigator.language;

    return userLocale;
  }
}
