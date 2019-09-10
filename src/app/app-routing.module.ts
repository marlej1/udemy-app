import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { ParentComponent } from './parent/parent.component';
import { BuildStructuralDirComponent } from './build-structural-dir/build-structural-dir.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'users', component:UserListComponent, children: 
  [{path:':id', component:UserDetailsComponent},
  {path:'', component:PlaceholderComponent}]
},
{ path: 'parent', component: ParentComponent },
{path:'directives', component:BuildStructuralDirComponent},
  { path: '**', component: HomeComponent, pathMatch: 'full' },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
