import { ApiProperty } from '@nestjs/swagger';

export class CreateAnswerDto {
  @ApiProperty({
    description: 'The content of the answer',
    example: 'The answer is',
    required: true,
  })
  content: string;
  @ApiProperty({
    description: 'The question to witch the answer responds',
    required: true,
  })
  parentId: string;
}
