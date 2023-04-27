import {Column} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";

export class AnswareDto{
  @ApiProperty({
    description:'The id of the answare',
    required:true
  })
  id:string;
  @ApiProperty({
    description:'The content of the answare',
    example:'The answare is',
    required:true
  })
  conetnt:string;
  @ApiProperty({
    description:'The rating of the answare',
    example:0,
    required:true
  })
  rating:number;
  @ApiProperty({
    description:'The creation date of the answare',
    example:new Date(),
    type:Date,
    required:true
  })
  creationDate:Date;

  constructor(values:Partial<AnswareDto>) {
    if(values){
      this.conetnt=values.conetnt;
      this.rating=values.rating;
      this.creationDate=values.creationDate
    }
  }
}
