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

@Injectable()
export class AnswersService {
  constructor(
    @InjectRepository(AnswerModel)
    private answerModelRepository: Repository<AnswerModel>
  ) {}

  async createAnswer(dto: CreateAnswerDto): Promise<AnswersDto> {
    const answerModel = AnswerMapper.mapCreateAnswerDtoToModel(dto);
    try {
      const savedModel = await this.answerModelRepository.save(answerModel);
      return AnswerMapper.mapModelToDto(savedModel);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async updateAnswer(id: string, dto: UpdateAnswerDto): Promise<AnswersDto> {
    const foundModel = await this.answerModelRepository.findOne({
      where: { id },
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
