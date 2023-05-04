import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { QuestionModel } from './question.model';
import { UsersModel } from '../../users/model/users.model';

@Entity()
export class AnswerModel {
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  @Column({ nullable: false })
  content: string;
  @Column({ nullable: true })
  rating?: number;
  @Column({ nullable: false })
  creationDate: Date;
  @ManyToOne(() => QuestionModel, (question) => question.answers, {
    nullable: false,
    cascade: true,
  })
  parent: QuestionModel;
  @ManyToOne(() => UsersModel, (user) => user.answers, {
    nullable: false,
    cascade: true,
  })
  user: UsersModel;

  constructor(values: Partial<AnswerModel>) {
    if (values) {
      this.id = values.id;
      this.content = values.content;
      this.rating = values.rating;
      this.creationDate = values.creationDate;
      this.parent = values.parent;
      this.user = values.user;
    }
  }
}
