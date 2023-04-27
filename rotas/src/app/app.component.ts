import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  private inscricao: Subscription;
  protected mostrarMenu: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.inscricao = this.authService.mostrarMenuEventEmitter.subscribe((resp: boolean) => (this.mostrarMenu = resp));
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
