import { Component, OnInit } from '@angular/core';
import { User} from '../user';
import { FavoriteTeam } from '../favorite-team';
import { Profile } from '../profile';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-favorite',
  templateUrl: './user-favorite.component.html',
  styleUrls: ['./user-favorite.component.css'],
  providers: [UserService]
})
export class UserFavoriteComponent implements OnInit {

    IdAndSport:FavoriteTeam;
    favorite:FavoriteTeam;
    id:string;
    field:string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    
  }
    getUseFavoriteService(){
      this.userService
      .getUserFavoriteBySportField(this.id,this.field)
      .then((IdAndSport:FavoriteTeam)=>{
         this.selectFavorite(IdAndSport);      
         return IdAndSport;
      });
    }
    selectFavorite(favorite:FavoriteTeam){
      this.favorite=favorite;
  }
  favoriteEvent(val){
    this.id=val.val1;
    this.field=val.val2;
    this.getUseFavoriteService();
  }

}
