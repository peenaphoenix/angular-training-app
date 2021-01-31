import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from "@angular/core";

 @Component({
    selector: 'app-manual',
    templateUrl: './manual.component.html',
    styleUrls: ['./manual.component.sass']
})
export class ManualComponent implements OnChanges, OnInit, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck{

    @Input() data = "";
   
    name: String = "Pranav"
    decimal: number = 1233;

    jsonObj = {
        sdsdsd:'sdsdsd',
        sdsdsdsds:"sdsdsdsdsdsds"
    }

    handleChildLoad(event){
        console.log("handleChildLoad invoked")
        console.log(`Child load compleded === ${event}`)
    }

    ngOnInit(): void {
        console.log("ngOnInit invoked")
        setTimeout(() => {
            this.name = "Trainer"
        }, 3000);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("ngOnChanges invoked")
        console.log(changes)
    }

    ngOnDestroy(): void {
        console.log("ngOnDestroy invoked")
    }

    ngAfterContentInit(): void {
        console.log("ngAfterContentInit invoked")
    }

    ngAfterContentChecked(): void {
        console.log("ngAfterContentChecked invoked")
    }

    ngAfterViewInit(): void {
        console.log("ngAfterViewInit invoked")
    }

    ngAfterViewChecked(): void {
        console.log("ngAfterViewChecked invoked")
    }

    ngDoCheck(): void {
        console.log("ngDoCheck invoked")
    }

    onClick(value){
        console.log(value)
    }

    onLogin(value){
        console.log(value)
    }


}