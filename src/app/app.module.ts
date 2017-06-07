import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserFavoriteComponent } from './users/user-favorite/user-favorite.component';
import { HeaderComponent } from './users/header/header.component';
import { PageNotFoundComponent } from './users/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserListComponent,
    UserFavoriteComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
         {
           path:'Get-User-Profile-Data',
           component:UserDetailsComponent
         },
         {
           path:'All-Favorite-Teams-and-filed-list',
           component:UserListComponent
         },
         {
           path:'Get-User-Favorites-By-Sport-Field',
           component:UserFavoriteComponent
         },
         { path: '**',
          component: PageNotFoundComponent
         }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
