import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  { 
    path: 'users', 
    component: UserListComponent 
  },
  { 
    path: 'add', 
    component: UserAddComponent 
  },
  { 
    path: 'details/:user', 
    component: UserDetailsComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
