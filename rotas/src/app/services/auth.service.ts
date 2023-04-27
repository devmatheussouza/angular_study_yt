import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { Usuario } from "../interfaces/usuario.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public usuarioAutenticado: boolean = false;
  public mostrarMenuEventEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  fazerLogin(usuario: Usuario) {
    if (usuario.email === "admin@email.com" && usuario.password === "admin") {
      this.usuarioAutenticado = true;
      this.mostrarMenuEventEmitter.emit(this.usuarioAutenticado);
      this.router.navigate(["/"]);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEventEmitter.emit(false);
    }
  }
}
