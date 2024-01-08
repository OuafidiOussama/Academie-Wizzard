import { PartialType } from '@nestjs/mapped-types';
import { CreateSubjectDto } from './create-subject.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateSubjectDto extends PartialType(CreateSubjectDto) {
    @IsNotEmpty({message: "Please Provide the Subject's name"})
    @IsString()
    label : string
	@IsNotEmpty({message: "Please Provide the Subject's description"})
    @IsString()
    description : string

  
}
