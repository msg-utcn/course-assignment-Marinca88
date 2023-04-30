import { CreateAnswerDto } from '../dtos/create-answer.dto';
import { AnswerModel } from '../model/answer.model';
import { UpdateAnswerDto } from '../dtos/update-answer.dto';
import { AnswersDto } from '../dtos/answers.dto';

export class AnswerMapper {
  static mapCreateAnswerDtoToModel(dto: CreateAnswerDto): AnswerModel {
    return new AnswerModel({
      content: dto.content,
      rating: 0,
      creationDate: new Date(),
    });
  }

  static mapUpdateAnswerDtoToModel(
    dto: UpdateAnswerDto,
    model: AnswerModel
  ): AnswerModel {
    return new AnswerModel({
      content: dto.content,
      rating: dto.rating,
      id: model.id,
      creationDate: model.creationDate,
    });
  }

  static mapModelToDto(model: AnswerModel): AnswersDto {
    return new AnswersDto({
      id: model.id,
      content: model.content,
      rating: model.rating,
      creationDate: model.creationDate,
    });
  }
}
