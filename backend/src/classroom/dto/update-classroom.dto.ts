import { PartialType } from '@nestjs/mapped-types';
import { CreateClassroomDto } from './create-classroom.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';
export class UpdateClassroomDto extends PartialType(CreateClassroomDto) {
	@IsNotEmpty({message: "Please Provide the Classroom's Number"})
    @IsNumber()
    Number ?: number
	@IsNotEmpty({message: "Please Provide the Classroom's Capaciy"})
    @IsNumber()
    Capacity?: number
}
