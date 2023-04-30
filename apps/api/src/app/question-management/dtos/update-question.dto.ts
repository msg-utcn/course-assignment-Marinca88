import { ApiProperty } from '@nestjs/swagger';

export class UpdateQuestionDto {
  @ApiProperty({
    description: 'The title of the question',
    example: 'What is a promise in JavaScript?',
    required: false,
  })
  title: string;
  @ApiProperty({
    description: 'The content of the question',
    example: 'What is a promise in JavaScript?',
    required: true,
  })
  content: string;
}
