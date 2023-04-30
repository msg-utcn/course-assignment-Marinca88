import {ApiProperty} from "@nestjs/swagger";

export  class UpdateAnswareDto{
@ApiProperty({
  description:'The content of the answare',
  example:'The answare is',
  required:true
})
conetnt:string;
  @ApiProperty({
    description:'The rating of the answare',
    example:0,
    required:false
  })
rating?:number;

}
