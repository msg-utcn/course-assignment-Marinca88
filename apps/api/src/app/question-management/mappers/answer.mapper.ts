import { CreateAnswerDto } from '../dtos/create-answer.dto';
import { AnswerModel } from '../model/answer.model';
import { UpdateAnswerDto } from '../dtos/update-answer.dto';
import { AnswersDto } from '../dtos/answers.dto';
import { QuestionModel } from '../model/question.model';
import { UsersModel } from '../../users/model/users.model';

export class AnswerMapper {
  static mapCreateAnswerDtoToModel(
    dto: CreateAnswerDto,
    parent: QuestionModel,
    user: UsersModel
  ): AnswerModel {
    return new AnswerModel({
      content: dto.content,
      rating: 0,
      creationDate: new Date(),
      id: undefined,
      parent: parent,
      user: user,
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
      parent: model.parent,
      user: model.user,
    });
  }

  static mapModelToDto(model: AnswerModel): AnswersDto {
    return new AnswersDto({
      id: model.id,
      content: model.content,
      rating: model.rating,
      creationDate: model.creationDate,
      parentId: model.parent.id,
      userId: model.user.id,
    });
  }
}
