import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post, Put,
  UseGuards,
} from '@nestjs/common';
import { QuestionDto } from './dtos/question.dto';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dtos/create-question.dto';
import { UpdateQuestionDto } from './dtos/update-question.dto';
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';
import {API_ROUTE, SWAGGER_FEATURE} from "./question-management.config";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {AnswareDto} from "./answares/dto/answare.dto";
import {UpdateAnswareDto} from "./answares/dto/update-answare.dto";
import {AnswareManagementService} from "./answares/service/answare-management.service";
import {CreateAnswareDto} from "./answares/dto/create-answare.dto";

@ApiTags(SWAGGER_FEATURE)
@Controller(API_ROUTE)
export class QuestionManagementController {
  constructor(private questionService: QuestionService,private answareService:AnswareManagementService) {}

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

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put('/answares/:id')
  async updateAnsware(@Param('id') id:string,@Body() dto:UpdateAnswareDto):Promise<AnswareDto>{
    return this.answareService.updateAnsware(id,dto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('/answares')
  async createAnsware(@Body() dto:CreateAnswareDto):Promise<AnswareDto>{
    return this.answareService.createAnsware(dto);
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete('/answares/:id')
  async deleteAnsware(@Param('id')id:string):Promise<void>{
    return  this.answareService.deleteAnsware(id);
  }
}
