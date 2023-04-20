import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Pessoa } from "./interfaces/pessoa.interface";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styleUrls: ["./data-binding.component.css"],
})
export class DataBindingComponent implements OnInit {
  private valor: number = Math.random() * 100;
  url: string = "https://www.google.com";
  urlImagem: string = "https://picsum.photos/200/300";
  nomeDoCurso: string = "Angular";
  @ViewChild("inputTeste") valorTeste: ElementRef;

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

  mudouValorContador(valorContador: number) {
    console.log(`Valor do contador mudou para ${valorContador}`);
  }

  valorTesteComViewChild() {
    console.log(`Valor pego com @ViewChild: ${this.valorTeste.nativeElement.value}`);
    this.valorTeste.nativeElement.value = "";
  }
}
