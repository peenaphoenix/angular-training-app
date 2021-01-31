import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'exp', pure: false})
export class ExponentialPipe implements PipeTransform{

    prev = null;
    transform(value: any, ...args: any[]) {
        console.log(this.prev)
        this.prev = value;
        return value * value;
    }

}