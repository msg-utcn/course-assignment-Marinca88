import {ApiProperty} from "@nestjs/swagger";

export class CreateAnswareDto{
  @ApiProperty({
    description:'The content of the answare',
    example:'The answare is',
    required:true
  })
  conetnt:string;

}
