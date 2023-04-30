
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {UsersService} from "./users.service";
import {UserDto} from "./dto/user.dto";
import {API_USERS_ROUTE, USERS_SWGGER_FEATURE} from "./users.config";


@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags(USERS_SWGGER_FEATURE)
@Controller(API_USERS_ROUTE)
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<UserDto> {
    return this.usersService.getdUserById(id);
  }

  @Get()
  async getUsers(): Promise<UserDto[]> {
    return this.usersService.getUsers();
  }

}
