import { Module } from '@nestjs/common';
import { QuestionManagementController } from './question-management.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModel } from './model/question.model';
import { QuestionService } from './services/question.service';
import { AnswersService } from './services/answers.service';
import { AnswerModel } from './model/answer.model';
import { UsersModel } from '../users/model/users.model';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionModel, AnswerModel, UsersModel])],
  controllers: [QuestionManagementController],
  providers: [QuestionService, AnswersService],
})
export class QuestionManagementModule {}
