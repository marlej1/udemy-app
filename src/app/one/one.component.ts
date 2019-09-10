import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {


  prop:string;
  constructor(private userService:UsersService) { }

  ngOnInit() {
    
  this.userService.propChanged.subscribe(
      prop => {
        this.prop = prop;
      }
      )
    
  }

  setPropValue(){
    this.userService.setProp('bar');
    
  }

}
