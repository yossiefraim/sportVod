import { Component, OnInit } from '@angular/core';
import { User} from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [UserService]
})
export class UserDetailsComponent implements OnInit {

      users:User 
      profile:User

  constructor(private userService: UserService) { }

  ngOnInit() {
     this.getUserService();
      
  }

 
  getUserService(){
      let data1=""; 
      this.userService
      .getUserById(data1)
      .then((user:User)=>{
          console.log("user id "+user.profile.firstName);
          this.selectProfile(user);
          return user;
      });  
  }

  selectProfile(profile:User){
      this.profile=profile;
      console.log("profile "+profile.profile.County);
  }

}
