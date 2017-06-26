import { Component, OnInit } from '@angular/core';
import { User} from '../user';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [UserService]
})
export class UserDetailsComponent implements OnInit {
      id:string;
      users:User 
      profile:User

  constructor(private userService: UserService) { }

  ngOnInit() {
     
      
  }

 
  getUserService(){
      let data1=""; 
      this.userService
      .getUserById(this.id,data1)
      .then((user:User)=>{
          this.selectProfile(user);
          return user;
      });  
  }

  selectProfile(profile:User){
      this.profile=profile;
  }
    userIdEvent(val) {
    this.id=val;
    this.getUserService();
  }

}
