import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsersRole } from './users-role';
import { AnswerModel } from '../../question-management/model/answer.model';
import { QuestionModel } from '../../question-management/model/question.model';

@Entity()
export class UsersModel {
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  @Column({ nullable: false })
  name: string;
  @Column({ nullable: false })
  email: string;
  @Column({ nullable: false, enum: UsersRole, type: 'enum' })
  roles: UsersRole[];
  @Column({ nullable: false })
  password: string;
  @OneToMany(() => QuestionModel, (question) => question.user)
  questions?: QuestionModel[];
  @OneToMany(() => AnswerModel, (answer) => answer.user)
  answers?: AnswerModel[];

  constructor(values: Partial<UsersModel>) {
    if (values) {
      this.id = values.id;
      this.name = values.name;
      this.roles = values.roles;
      this.email = values.email;
      this.password = values.password;
      this.questions = values.questions;
      this.answers = values.answers;
    }
  }
}
