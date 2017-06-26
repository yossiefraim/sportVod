import { Component, OnInit } from '@angular/core';
import { User} from '../user';
import { FavoriteTeam } from '../favorite-team';
import { Profile } from '../profile';
import { UserService } from '../service/user.service';
import { UserDetailsComponent } from '../user-details/user-details.component';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})

export class UserListComponent implements OnInit {

    FavoriteTeams:FavoriteTeam[]

  constructor(private userService: UserService) { }

  ngOnInit() { 
    this.getAllFavoriteService();
  }
  getAllFavoriteService(){
    this.userService
      .getAllFavorites()
      .then((FavoriteTeams:FavoriteTeam[])=>{
          this.FavoriteTeams=FavoriteTeams.map((favorite)=>{
                 return favorite;
          });
      });
  }

}
