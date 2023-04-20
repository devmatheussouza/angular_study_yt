import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styleUrls: ["./data-binding.component.css"],
})
export class DataBindingComponent implements OnInit {
  url: string = "https://www.google.com";
  urlImagem: string = "https://picsum.photos/200/300";
  private valor: number = Math.random() * 100;

  constructor() {}

  ngOnInit(): void {}

  getValor() {
    return this.valor;
  }
}
