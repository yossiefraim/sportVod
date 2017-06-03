export class User {
    _id?:string;
    id:string;
    profile:{
        firstName:string,
        lastName:string,
        Country:string
    };
    favoriteTeams:[
        {
            field:string,
            team:string

        }
    ]
}
