import {API_ROUTE, SWAGGER_FEATURE} from './question-management.config';
import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { QuestionDto } from './dtos/question.dto';
import {QuestionService} from "./question.service";
import {CreateQuestionDto} from "./dtos/create-question.dto";
import {UpdateQuestionDto} from "./dtos/update-question.dto";
import {ApiTags} from "@nestjs/swagger";

@ApiTags(SWAGGER_FEATURE)
@Controller(API_ROUTE)
export class QuestionManagementController {
  constructor(
    private questionService :QuestionService
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

  @Put(':id')
  async upadteQuestion(@Body() dto: UpdateQuestionDto,@Param('id') id:string): Promise<QuestionDto> {
    return this.questionService.update(id,dto);
  }

  @Delete(':id')
  async deleteQuestion(@Param('id') id:string): Promise<void> {
    return  this.questionService.delete(id);
  }


}
