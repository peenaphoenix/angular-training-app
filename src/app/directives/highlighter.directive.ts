import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: "[highlighter]"
})
export class Highlight {
    @Input("highlighter")
    highlightColor: string;

    constructor(private element: ElementRef){
        console.log(element.nativeElement)
        element.nativeElement.style.backgroundColor=this.highlightColor || 'yellow'
    }

    @HostListener('mouseenter')
    onMouseOver(){
        this.element.nativeElement.style.backgroundColor=
         this.element.nativeElement.style.backgroundColor==='green'?'yellow':'green'
    }
}