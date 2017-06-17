import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserFavoriteComponent } from './users/user-favorite/user-favorite.component';
import { HeaderComponent } from './users/header/header.component';
import { PageNotFoundComponent } from './users/page-not-found/page-not-found.component';



const appRoutes: Routes = [
{ path: '', redirectTo: '/AllFavoriteTeamsAndFiledList', pathMatch:'full' },
{ path:'GetUserProfileData', component:UserDetailsComponent },
{ path:'AllFavoriteTeamsAndFiledList', component:UserListComponent },
{ path:'GetUserFavoritesBySportField', component:UserFavoriteComponent },
{ path:'**', component:PageNotFoundComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}