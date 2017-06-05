import { Component, OnInit } from '@angular/core';
import { User} from '../user';
import { FavoriteTeam } from '../favorite-team';
import { Profile } from '../profile';
import { UserService } from '../user.service';
import { UserDetailsComponent } from '../user-details/user-details.component';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

    //users:User
    FavoriteTeams:FavoriteTeam[]
    //IdAndSport:FavoriteTeam[]
    //profiles:Profile
   // selectedUser: User

  constructor(private userService: UserService) { }

  ngOnInit() {
     //  var data1="";
       // var data2="333";
       // var data3={field:"soccer"}

      // this.userService
      // .getUserById(data1)
      // .then((users:User)=>{
      //   console.log("user "+users.id +" name: "+users.profile.firstName+" team: "+users.favoriteTeams[0].team);
      //   //console.log(this.users);
      //     return users;
      // });
      
     
      this.userService
      .getAllFavorites()
      .then((FavoriteTeams:FavoriteTeam[])=>{
          this.FavoriteTeams=FavoriteTeams.map((favorite)=>{
                  console.log("favorite"+favorite);
                 return favorite;
          });
      });


      // this.userService
      // .getUserFavoriteBySportField(data2,data3)
      // .then((IdAndSport:FavoriteTeam[])=>{
      //     this.IdAndSport=IdAndSport.map((favorite)=>{
               
      //            return favorite;
      //     });
      // });
  }


  //selectContact(user: User) {
 //   this.selectedUser = user
 // }

}
