import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './profile/profile.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { UsersComponent } from './users/users.component';
import { DocumentsComponent } from './documents/documents.component';
import { LoginComponent } from './login/login.component';
import { InscrireComponent } from './inscrire/inscrire.component';

const routes: Routes = [

  {path:'dashboard',component:LayoutComponent,children:
  [
    {path:'profile',component:ProfileComponent},
    {path:'users',component:UsersComponent},
    {path:'reclamation',component:ReclamationComponent},
    {path:'documents',component:DocumentsComponent},
  
  ],
},
  {path:'',component:LoginComponent},
  {path:"signup",component:InscrireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
