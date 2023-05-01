import { QuestionTopic } from '../model/question-topic';
import { ApiProperty } from '@nestjs/swagger';

export class QuestionDto {
  @ApiProperty({
    description: 'The id of the question',
    required: false,
  })
  id?: string;
  @ApiProperty({
    description: 'The title of the question',
    example: 'Why am I here?',
    required: true,
  })
  title: string;
  @ApiProperty({
    description: 'The author of the question',
    example: 'Rokko',
    required: true,
  })
  postedBy: string;
  @ApiProperty({
    description: 'The content of the question',
    example: 'What is a promise in JavaScript?',
    required: true,
  })
  content: string;
  @ApiProperty({
    description: 'The topic of the question',
    enum: QuestionTopic,
    example: QuestionTopic.JavaScript,
    required: true,
  })
  topic: QuestionTopic;
  @ApiProperty({
    description: 'The rating of the question',
    example: 0,
    required: true,
  })
  rating: number;
  @ApiProperty({
    description: 'The creation date of the question',
    example: new Date(),
    type: Date,
    required: true,
  })
  creationDate: string;

  constructor(values: Partial<QuestionDto>) {
    if (values) {
      this.id = values.id;
      this.title = values.title;
      this.postedBy = values.postedBy;
      this.content = values.content;
      this.topic = values.topic;
      this.rating = values.rating;
      this.creationDate = values.creationDate;
    }
  }
}
