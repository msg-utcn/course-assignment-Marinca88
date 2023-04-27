import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class AnswareModel{
  @PrimaryGeneratedColumn('uuid')
  id?:string;
  @Column({ nullable: false })
  conetnt:string;
  @Column({ nullable: true })
  rating?:number;
  @Column({ nullable: false })
  creationDate:Date;

  constructor(values : Partial<AnswareModel>) {
    if(values){
      this.id=values.id;
      this.conetnt=values.conetnt;
      this.rating=values.rating;
      this.creationDate=values.creationDate;
    }
  }
}
