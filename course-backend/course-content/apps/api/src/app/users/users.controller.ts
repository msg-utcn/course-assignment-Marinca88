import {UsersService} from "./users.service";
import {Body, Controller, Get, Logger, Param, Post} from "@nestjs/common";
import {UserDto} from "./dto/user.dto";
import {RegisterUserDto} from "./dto/register-user.dto";
import {API_USERS_ROUTE, USERS_SWGGER_FEATURE} from "./users.config";
import {ApiTags} from "@nestjs/swagger";


@ApiTags(USERS_SWGGER_FEATURE)
@Controller(API_USERS_ROUTE)
export class UsersController{
  constructor(private usersService:UsersService) {}

  @Get(':id')
  async getUserById(@Param('id')id:string):Promise<UserDto>{
    return  this.usersService.getdUserById(id);
  }

  @Get()
  async getUsers():Promise<UserDto[]>{
    return this.usersService.getUsers();
  }

  @Post()
  async registerUser(@Body() dto:RegisterUserDto):Promise<UserDto>{
    return this.usersService.registerUser(dto);
  }

}
