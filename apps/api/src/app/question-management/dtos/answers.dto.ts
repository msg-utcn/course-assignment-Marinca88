import { ApiProperty } from '@nestjs/swagger';

export class AnswersDto {
  @ApiProperty({
    description: 'The id of the answer',
    required: true,
  })
  id: string;
  @ApiProperty({
    description: 'The content of the answer',
    example: 'The answer is',
    required: true,
  })
  content: string;
  @ApiProperty({
    description: 'The rating of the answer',
    example: 0,
    required: true,
  })
  rating: number;
  @ApiProperty({
    description: 'The creation date of the answer',
    example: new Date(),
    type: Date,
    required: true,
  })
  creationDate: Date;
  @ApiProperty({
    description: 'The question to witch the answer responds',
    required: true,
  })
  parentId: string;

  constructor(values: Partial<AnswersDto>) {
    if (values) {
      this.content = values.content;
      this.rating = values.rating;
      this.creationDate = values.creationDate;
      this.parentId = values.parentId;
    }
  }
}
