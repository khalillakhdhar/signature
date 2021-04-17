import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { DocumentsComponent } from './documents/documents.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { LoginComponent } from './login/login.component';
import { InscrireComponent } from './inscrire/inscrire.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ProfileComponent,
    UsersComponent,
    DocumentsComponent,
    ReclamationComponent,
    LoginComponent,
    InscrireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
