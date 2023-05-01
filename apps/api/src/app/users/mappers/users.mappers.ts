import { RegisterUserDto } from '../dto/register-user.dto';
import { UsersModel } from '../model/users.model';
import { UserDto } from '../dto/user.dto';
import { UsersRole } from '../model/users-role';

export class UsersMappers {
  static mapRegisterUsertoModel(
    dto: RegisterUserDto,
    password: string
  ): UsersModel {
    return new UsersModel({
      roles: [UsersRole.USER],
      email: dto.email,
      name: dto.name,
      password: password,
    });
  }

  static mapModelToDto(model: UsersModel): UserDto {
    return new UserDto({
      id: model.id,
      name: model.name,
      email: model.email,
      roles: model.roles,
    });
  }
}
