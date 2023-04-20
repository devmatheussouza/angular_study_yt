import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-output-property",
  templateUrl: "./output-property.component.html",
  styleUrls: ["./output-property.component.css"],
})
export class OutputPropertyComponent implements OnInit {
  valorAtual: number = 0;

  @Output() valorAtualEventEmitter = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  somarValorAtual() {
    this.valorAtual++;
    this.onChangeValorAtual();
  }

  subtrairValorAtual() {
    this.valorAtual--;
    this.onChangeValorAtual();
  }

  onChangeValorAtual() {
    this.valorAtualEventEmitter.emit(this.valorAtual);
  }
}
