import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  name:string = "Thinesh";
  constructor(private route:Router) {
   }

  ngOnInit(): void { 
  }

  getLogin(){
    console.log("scac")
    this.route.navigate(["/","user","home","login","profile",this.name]);
  }

}
