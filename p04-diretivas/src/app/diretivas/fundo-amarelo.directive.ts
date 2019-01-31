import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[FundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _remderer: Renderer2    
    ) {
    //console.log(this._elementRef);
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow' //evitar. vunerabilidade
      this._remderer.setStyle(this._elementRef.nativeElement,'background-color','yellow')
   }

}
