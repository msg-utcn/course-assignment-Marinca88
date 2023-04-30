import {CreateAnswareDto} from "../dto/create-answare.dto";
import {AnswareModel} from "../models/answare.model";
import {UpdateAnswareDto} from "../dto/update-answare.dto";
import {AnswareDto} from "../dto/answare.dto";

export class AnswareMapper{
  static mapCreateAnswareDtoToModel(dto:CreateAnswareDto):AnswareModel{
    return new AnswareModel({
       conetnt:dto.conetnt,
       rating:0,
      creationDate:new Date()
    })
  }

  static mapUpdateAnswareDtoToModel(dto:UpdateAnswareDto,model:AnswareModel):AnswareModel{
    return  new AnswareModel({
      conetnt:dto.conetnt,
      rating:dto.rating,
      id:model.id,
      creationDate:model.creationDate
    })
  }

  static mapModelToDto(model:AnswareModel):AnswareDto{
    return new AnswareDto({
      id:model.id,
      conetnt:model.conetnt,
      rating:model.rating,
      creationDate:model.creationDate
    })
  }
}
