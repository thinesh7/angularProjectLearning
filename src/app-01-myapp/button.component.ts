import { Component, Input } from "@angular/core";

@Component({
    selector:"button-selector",
    templateUrl:"./button.component.html",
    styleUrls:["./button.component.sass"]
})
export class ButtonComponent{

    ButtonComponent(){}

    @Input()
    buttonColor:string = "green";

}