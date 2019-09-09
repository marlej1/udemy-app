import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {HttpClientModule} from '@angular/common/http'
  import { from } from 'rxjs';
import { UsersService } from './users.service';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { PlaceholderComponent } from './placeholder/placeholder.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    HomeComponent,
    PlaceholderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
