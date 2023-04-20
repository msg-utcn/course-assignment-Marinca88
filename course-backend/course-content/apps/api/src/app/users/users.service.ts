import {InjectRepository} from "@nestjs/typeorm";
import {UsersModel} from "./model/users.model";
import {Repository} from "typeorm";
import {UsersMappers} from "./mappers/users.mappers";
import {UserDto} from "./dto/user.dto";
import {RegisterUserDto} from "./dto/register-user.dto";
import {BadRequestException, Injectable, Logger, NotFoundException} from "@nestjs/common";

@Injectable()
export class UsersService{
  constructor(@InjectRepository(UsersModel) private usersModelRepository:Repository<UsersModel>) {
  }

  async getUsers():Promise<UserDto[]>{
    const foundUsers = await this.usersModelRepository.find();
    if(!foundUsers){
      return [];
    }
    return foundUsers.map((user) => UsersMappers.mapModelToDto(user))
  }

  async registerUser(dto:RegisterUserDto):Promise<UserDto>{
    const user= UsersMappers.mapRegisterUsertoModel(dto);
    try{
      const savedUser= await this.usersModelRepository.save(user);
      return UsersMappers.mapModelToDto(savedUser);
    }catch (error){
      Logger.log(error,"UsersService.regsiterUser");
      throw  new BadRequestException();
    }
  }

  async getdUserById(id:string):Promise<UserDto>{
    const foundUser= await this.usersModelRepository.findOne({where:{id}});
    if(!foundUser){
      throw new NotFoundException();
    }
    return UsersMappers.mapModelToDto(foundUser);
  }

  async getUsersByEmail(email:string):Promise<UserDto>{
    const foundUser = await this.usersModelRepository.findOne(({where:{email}}));
    if(!foundUser){
      throw new  NotFoundException();
    }
    return  UsersMappers.mapModelToDto(foundUser);
  }

}
