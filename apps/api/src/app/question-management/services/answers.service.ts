import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnswerModel } from '../model/answer.model';
import { Repository } from 'typeorm';
import { CreateAnswerDto } from '../dtos/create-answer.dto';
import { AnswersDto } from '../dtos/answers.dto';
import { AnswerMapper } from '../mappers/answer.mapper';
import { UpdateAnswerDto } from '../dtos/update-answer.dto';
import { QuestionModel } from '../model/question.model';

@Injectable()
export class AnswersService {
  constructor(
    @InjectRepository(AnswerModel)
    private answerModelRepository: Repository<AnswerModel>,
    @InjectRepository(QuestionModel)
    private questionModelRepository: Repository<QuestionModel>
  ) {}

  async createAnswer(
    dto: CreateAnswerDto,
    questionId: string
  ): Promise<AnswersDto> {
    const foundQuestion = await this.questionModelRepository.findOneBy({
      id: questionId,
    });
    if (!foundQuestion) {
      throw new BadRequestException();
    }
    try {
      const answerModel = AnswerMapper.mapCreateAnswerDtoToModel(
        dto,
        foundQuestion
      );
      const savedModel = await this.answerModelRepository.save(answerModel);
      return AnswerMapper.mapModelToDto(savedModel);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async readAllByQuestionId(questionId: string): Promise<AnswersDto[]> {
    const foundModels: AnswerModel[] = await this.answerModelRepository.find({
      where: { parent: { id: questionId } },
      relations: ['parent'],
    });
    return foundModels.map((model: AnswerModel) =>
      AnswerMapper.mapModelToDto(model)
    );
  }

  async updateAnswer(id: string, dto: UpdateAnswerDto): Promise<AnswersDto> {
    const foundModel = await this.answerModelRepository.findOne({
      where: { id },
      relations: ['parent'],
    });
    if (!foundModel) {
      throw new NotFoundException();
    }
    const updatedModel = AnswerMapper.mapUpdateAnswerDtoToModel(
      dto,
      foundModel
    );
    try {
      const savedModel = await this.answerModelRepository.save(updatedModel);
      return AnswerMapper.mapModelToDto(savedModel);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async deleteAnswer(id: string): Promise<void> {
    const deleteResult = await this.answerModelRepository.delete({ id });
    if (deleteResult.affected === 0) {
      throw new BadRequestException();
    }
  }
}
