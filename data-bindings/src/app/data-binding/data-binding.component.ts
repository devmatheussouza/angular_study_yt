import { Component, OnInit } from "@angular/core";
import { Pessoa } from "./interfaces/pessoa.interface";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styleUrls: ["./data-binding.component.css"],
})
export class DataBindingComponent implements OnInit {
  url: string = "https://www.google.com";
  urlImagem: string = "https://picsum.photos/200/300";
  private valor: number = Math.random() * 100;

  nomeDoCurso: string = "Angular";

  pessoa: Pessoa = {
    nome: "",
    idade: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  getValor() {
    return this.valor;
  }

  onClick(valorInput: HTMLInputElement) {
    console.log(valorInput.value);
    valorInput.value = "";
  }
}
