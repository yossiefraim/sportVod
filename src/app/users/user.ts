export class User {
    _id?:string;
    id:string;
    favoriteTeams:[
        {
            field:string,
            team:string

        }
    ]    
    profile:{
        firstName:string,
        lastName:string,
        County:string
    }

}
