import { Module } from '@nestjs/common';
import { QuestionManagementController } from './question-management.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModel } from './model/question.model';
import {QuestionService} from "./question.service";
import {AnswareManagementService} from "./answares/service/answare-management.service";
import {AnswareModel} from "./answares/models/answare.model";

@Module({
  imports: [TypeOrmModule.forFeature([QuestionModel,AnswareModel])],
  controllers: [QuestionManagementController],
  providers: [QuestionService,AnswareManagementService],
})
export class QuestionManagementModule {}
