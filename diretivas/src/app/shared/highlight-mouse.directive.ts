import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from "@angular/core";

@Directive({
  selector: "[highlightMouse]",
})
export class HighlightMouseDirective {
  @HostListener("mouseenter") onMouseOver() {
    // this._renderer.setStyle(this._elementRef.nativeElement, "background-color", "blue");
    this.backgroundColor = "blue";
  }

  @HostListener("mouseleave") onMouseLeave() {
    // this._renderer.removeStyle(this._elementRef.nativeElement, "background-color");
    this.backgroundColor = "";
  }

  @HostBinding("style.backgroundColor") backgroundColor: string;

  constructor(/* private _elementRef: ElementRef, private _renderer: Renderer2 */) {}
}
