import {ApiProperty} from "@nestjs/swagger";

export class RegisterUserDto{
  @ApiProperty({
    description:"The name of the users",
    example:"Roko the happy parrot",
    required:true
  })
  name:string;
  @ApiProperty({
    description:"The email of the user",
    example:"roko_the_parrot@yahoo.com",
    required:true
  })
  email:string;
  @ApiProperty({
    description:"The passwor used for the authentication by the user",
    example:"Roko2000_@sfsds",
    required:true
  })
  password:string;
}
