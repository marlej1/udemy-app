import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

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
import { ParentComponent } from './parent/parent.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { BuildStructuralDirComponent } from './build-structural-dir/build-structural-dir.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    HomeComponent,
    PlaceholderComponent,
    ParentComponent,
    OneComponent,
    TwoComponent,
    BuildStructuralDirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
    
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
