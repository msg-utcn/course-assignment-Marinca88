import {BadRequestException, Injectable, NotFoundException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {AnswareModel} from "../models/answare.model";
import {Repository} from "typeorm";
import {CreateAnswareDto} from "../dto/create-answare.dto";
import {AnswareDto} from "../dto/answare.dto";
import {AnswareMapper} from "../mappers/answare.mapper";
import {QuestionMapper} from "../../mappers/question.mapper";
import {UpdateAnswareDto} from "../dto/update-answare.dto";

@Injectable()
export class AnswareManagementService{
  constructor(@InjectRepository(AnswareModel) private answareRepository:Repository<AnswareModel> ) {
  }

  async createAnsware(dto:CreateAnswareDto):Promise<AnswareDto>{
    const answare = AnswareMapper.mapCreateAnswareDtoToModel(dto);
    try{
      const savedModel= await this.answareRepository.save(answare);
      return AnswareMapper.mapModelToDto(savedModel);
    }catch(error){
      throw new BadRequestException();
    }
  }

  async updateAnsware(id:string,dto:UpdateAnswareDto):Promise<AnswareDto>{
    const foundModel=await this.answareRepository.findOne({where:{id}});
    if(!foundModel){
      throw new NotFoundException();
    }
    const updatedModel = AnswareMapper.mapUpdateAnswareDtoToModel(dto,foundModel);
    try{
      const savedModel=await this.answareRepository.save(updatedModel);
      return AnswareMapper.mapModelToDto(savedModel);
    }catch (error){
      throw new BadRequestException();
    }
  }

  async deleteAnsware(id:string):Promise<void>{
    const deleteResult = await this.answareRepository.delete({id});
    if(deleteResult.affected===0){
      throw new BadRequestException();
    }
  }
}
