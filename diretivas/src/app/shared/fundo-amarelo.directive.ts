import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[fundoAmarelo]",
})
export class FundoAmareloDirective {
  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    // this._elementRef.nativeElement.style.backgroundColor = "yellow";  -> Não é seguro utilizar essa abordagem!

    // Fazer dessa forma!
    this._renderer.setStyle(this._elementRef.nativeElement, "background-color", "yellow");
  }
}
