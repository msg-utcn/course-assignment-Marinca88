import { ApiProperty } from '@nestjs/swagger';

export class UpdateAnswerDto {
  @ApiProperty({
    description: 'The content of the answer',
    example: 'The answer is',
    required: true,
  })
  content: string;
  @ApiProperty({
    description: 'The rating of the answer',
    example: 0,
    required: false,
  })
  rating?: number;
}
