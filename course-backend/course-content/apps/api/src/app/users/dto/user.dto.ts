import {UsersRole} from "../model/users-role";
import {ApiProperty} from "@nestjs/swagger";

export class UserDto{
  @ApiProperty({
    description:"the id of the user",
    example:"e214f2bb-0df7-4861-a546-91fdbe9547ed",
    required:false
  })
  id?:string;
  @ApiProperty({
    description:"the name of the user",
    example:"Roko the happy parrot",
    required:true
  })
  name:string;
  @ApiProperty({
    description:"the email used by the user",
    example:"Roko_the_parrot@yahoo.com",
    required:true
  })
  email:string;
  @ApiProperty({
    description:"the users  roles in application",
    enum:UsersRole,
    example:[UsersRole.USER,UsersRole.ADMIN],
    required:true
  })
  roles:UsersRole[];

  constructor(values:Partial<UserDto>) {
     if(!values){
       this.id=values.id,
         this.name=values.name,
         this.email= values.email,
         this.roles = values.roles
     }
  }
}
