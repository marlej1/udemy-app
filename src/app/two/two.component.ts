import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users.service';
import { Subscription } from 'rxjs';

declare let alertify:any;
@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit, OnDestroy {


  constructor(private userService:UsersService) 
  { 
    
  }
  subsciption:Subscription;

  prop:string;
  ngOnInit() {
 
   
  this.subsciption =  this.userService.propChanged.subscribe(
     prop => {
      this.prop = prop;
    }
    )
  }

  ngOnDestroy(): void {
    this.subsciption.unsubscribe();
    console.log("component two unsubscribed.");
  }

}
