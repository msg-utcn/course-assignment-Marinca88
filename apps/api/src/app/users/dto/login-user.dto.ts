import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({
    description: 'the email used by the user',
    example: 'roko_the_parrot@yahoo.com',
    required: true,
  })
  email: string;

  @ApiProperty({
    description: 'The passwor used for the authentication by the user',
    example: 'Roko2000_@sfsds',
    required: true,
  })
  password: string;

  constructor(values: Partial<LoginUserDto>) {
    if (values) {
      (this.email = values.email), (this.password = values.password);
    }
  }
}
