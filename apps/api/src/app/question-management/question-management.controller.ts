import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { QuestionDto } from './dtos/question.dto';
import { QuestionService } from './services/question.service';
import { CreateQuestionDto } from './dtos/create-question.dto';
import { UpdateQuestionDto } from './dtos/update-question.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { API_ROUTE, SWAGGER_FEATURE } from './question-management.config';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AnswersDto } from './dtos/answers.dto';
import { UpdateAnswerDto } from './dtos/update-answer.dto';
import { AnswersService } from './services/answers.service';
import { CreateAnswerDto } from './dtos/create-answer.dto';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags(SWAGGER_FEATURE)
@Controller(API_ROUTE)
export class QuestionManagementController {
  constructor(
    private questionService: QuestionService,
    private answersService: AnswersService
  ) {}

  @Get()
  async getAllQuestions(): Promise<QuestionDto[]> {
    return this.questionService.readAll();
  }

  @Get(':id')
  async getQuestionById(@Param('id') id: string): Promise<QuestionDto> {
    return this.questionService.readById(id);
  }

  @Post()
  async createQuestion(@Body() dto: CreateQuestionDto): Promise<QuestionDto> {
    return this.questionService.create(dto);
  }

  @Patch(':id')
  async deleteQuestion(
    @Param('id') id: string,
    @Body() dto: UpdateQuestionDto
  ): Promise<QuestionDto> {
    return this.questionService.update(id, dto);
  }

  @Delete(':id')
  async updateQuestion(@Param('id') id: string): Promise<void> {
    return this.questionService.delete(id);
  }

  @Put('/answers/:id')
  async updateAnswer(
    @Param('id') id: string,
    @Body() dto: UpdateAnswerDto
  ): Promise<AnswersDto> {
    return this.answersService.updateAnswer(id, dto);
  }

  @Post('/answers')
  async createAnswer(@Body() dto: CreateAnswerDto): Promise<AnswersDto> {
    return this.answersService.createAnswer(dto);
  }

  @Delete('/answers/:id')
  async deleteAnswer(@Param('id') id: string): Promise<void> {
    return this.answersService.deleteAnswer(id);
  }
}
