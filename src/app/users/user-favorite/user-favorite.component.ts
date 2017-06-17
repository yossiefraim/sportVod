import { Component, OnInit } from '@angular/core';
import { User} from '../user';
import { FavoriteTeam } from '../favorite-team';
import { Profile } from '../profile';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-favorite',
  templateUrl: './user-favorite.component.html',
  styleUrls: ['./user-favorite.component.css'],
  providers: [UserService]
})
export class UserFavoriteComponent implements OnInit {

    IdAndSport:FavoriteTeam
    favorite:FavoriteTeam

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUseFavoriteService();
      
  }
    getUseFavoriteService(){
      let data2="123";
      let data3="soccer";
      this.userService
      .getUserFavoriteBySportField(data2,data3)
      .then((IdAndSport:FavoriteTeam)=>{
         this.selectFavorite(IdAndSport);      
         return IdAndSport;
      });
    }
    selectFavorite(favorite:FavoriteTeam){
      this.favorite=favorite;
      console.log("favorite team "+this.favorite.team);
  }

}
