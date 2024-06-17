import { Role } from "./role";
export class Users {
    idUser?:number=0
    username:string=''
    email:string=''
    password:string=''
    enabled:boolean=false
    //roles:Role=new Role()
    address:string=''
    weight:number=0
    height:number=0
    subscription:string=''
    healthProfessional:string=''
}