import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  user:any;
  constructor(private activatedRoute:ActivatedRoute, private userService:UsersService)
   {
   

    }
    
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.userService.getUserById(+params['id']).subscribe(
          (user)=>{
            this.user = user;   });
      }
    )
  }


  createUser()
  {
    this.userService.createUser()
  }
deleteUser(){}
updateUser(){}
getUsersPosts(){}

}
