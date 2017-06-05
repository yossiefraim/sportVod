import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserListComponent } from './users/user-list/user-list.component';
import {RouterModule}  from '@angular/router';
import { UserFavoriteComponent } from './users/user-favorite/user-favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserListComponent,
    UserFavoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
       {
         path:'home',
         component:UserDetailsComponent
       }
      
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
