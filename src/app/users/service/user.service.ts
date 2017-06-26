import { Injectable } from '@angular/core';
import { User } from '../schemes/user';
import { FavoriteTeam } from '../schemes/favorite-team';
import { Profile } from '../schemes/profile';

import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/toPromise'; 


@Injectable()
export class UserService {

  private userUrl = 'https://sportsvod.herokuapp.com/';
  
  constructor(private http: Http) { }

  getUserById(id,temp):Promise<User>{
      return this.http.post(this.userUrl+'getUserProfileData/'+id,temp)
                 .toPromise()
                 .then(response => response.json() as User)
                 .catch(this.handleError);
  }
  getAllFavorites():Promise<FavoriteTeam[]>{
      return this.http.get(this.userUrl+'getAllFavorites')
                 .toPromise()
                 .then(response => response.json() as FavoriteTeam[])
                 .catch(this.handleError);
  }
  
   getUserFavoriteBySportField(param1,param2):Promise<FavoriteTeam>{
      return this.http.get(this.userUrl+'getUserFavoriteBySportField/'+param1+'?field='+param2)
                 .toPromise()
                 .then(response => response.json() as FavoriteTeam)
                 .catch(this.handleError);
  }



    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}
