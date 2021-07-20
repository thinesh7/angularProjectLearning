import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  name:any;

  constructor(private arouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.arouter.params.subscribe(data=>this.name=data.name);
  }

}
