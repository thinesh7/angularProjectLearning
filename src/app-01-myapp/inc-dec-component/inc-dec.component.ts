import { Component } from "@angular/core";

@Component({
    selector:"inc-dec-out",
    templateUrl:"./inc-dec.component.html",
    styleUrls:["./inc-dec.component.sass"]
})
export class IncrementAndDecrementComponent{

    count:number = 10;

    increment(){
        ++this.count;
    }
    
    decrement(){
        --this.count;
    }

    update(n:number){
        this.count =n;
    }
}