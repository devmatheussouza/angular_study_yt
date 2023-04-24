import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LogService {
  constructor() {}

  logger(mensagem: string) {
    console.log(mensagem);
  }
}
