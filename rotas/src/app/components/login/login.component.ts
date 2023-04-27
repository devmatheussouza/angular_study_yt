import { Component, OnInit } from "@angular/core";

import { Usuario } from "src/app/interfaces/usuario.interface";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  protected usuario: Usuario = { email: "", password: "" };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  fazerLogin() {
    this.authService.fazerLogin(this.usuario);
  }
}
