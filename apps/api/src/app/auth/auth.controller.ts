import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthConfig } from './auth.config';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtTokenDto } from './dto/jwt-token.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { RegisterUserDto } from '../users/dto/register-user.dto';
import { UserDto } from '../users/dto/user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import {UsersService} from "../users/users.service";

@ApiTags(AuthConfig.AUTH_SWAGGER_FEATURE)
@Controller(AuthConfig.API_ROUTE)
export class AuthController {
  constructor(private authService: AuthService, private usersService: UsersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOkResponse({
    description: 'The Jwt Access Token',
    type: JwtTokenDto,
  })
  @ApiBody({ type: LoginUserDto })
  async login(@Request() req): Promise<JwtTokenDto> {
    return this.authService.login(req.user);
  }

  @Post('register')
  async registerUser(@Body() dto: RegisterUserDto): Promise<UserDto> {
    return this.usersService.registerUser(dto);
  }
}
