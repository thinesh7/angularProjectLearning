import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ButtonComponent } from "./button.component";
import { IncrementAndDecrementComponent } from "./inc-dec-component/inc-dec.component";
import { RootComponent } from "./root.component";

@NgModule({
    imports:[BrowserModule,FormsModule],
    providers:[],
    bootstrap:[RootComponent],
    declarations:[RootComponent,ButtonComponent,IncrementAndDecrementComponent]
})
export class RootModule{}