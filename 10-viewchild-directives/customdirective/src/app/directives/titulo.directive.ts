import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitulo]'
})
export class TituloDirective {

  constructor(el: ElementRef) {
    console.log(el.nativeElement.childNodes);
    console.log(el.nativeElement.childNodes.length);
    el.nativeElement.style.border = "1px solid blue";
    el.nativeElement.style.backgroundColor = "lightblue";

    const childNodes  = Array.from(el.nativeElement.childNodes);

    console.log(childNodes);

    for (let index = 0; index < childNodes.length; index++) {
      console.log(childNodes[index]);
      childNodes[index].innerText = index + "-" + childNodes[index].innerText;
    }
   // el.nativeElement.children = el.nativeElement.children.map((i, index) => i.innerText = index + " --- "+i.innerText       )
   // el.nativeElement.innerText = el.nativeElement.innerText.toUpperCase();
  }

}
