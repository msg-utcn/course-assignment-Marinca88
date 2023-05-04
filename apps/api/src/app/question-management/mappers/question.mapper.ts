import { CreateQuestionDto } from '../dtos/create-question.dto';
import { QuestionModel } from '../model/question.model';
import { UpdateQuestionDto } from '../dtos/update-question.dto';
import { QuestionDto } from '../dtos/question.dto';
import { UsersModel } from '../../users/model/users.model';

export class QuestionMapper {
  static mapCreateQuestionToModel(
    dto: CreateQuestionDto,
    model: UsersModel
  ): QuestionModel {
    return new QuestionModel({
      id: undefined,
      postedBy: undefined,
      rating: 0,
      title: dto.title,
      content: dto.content,
      topic: dto.topic,
      creationDate: new Date().toISOString(),
      user: model,
    });
  }

  static mapUpdateQuestionToModel(
    dto: UpdateQuestionDto,
    oldModel: QuestionModel
  ): QuestionModel {
    return new QuestionModel({
      ...oldModel,
      title: dto.title,
      content: dto.content,
    });
  }

  static mapToDto(model: QuestionModel): QuestionDto {
    return new QuestionDto({
      id: model.id,
      postedBy: model.postedBy,
      title: model.title,
      content: model.content,
      topic: model.topic,
      creationDate: model.creationDate,
      rating: model.rating,
      userId: model.user.id,
    });
  }
}
