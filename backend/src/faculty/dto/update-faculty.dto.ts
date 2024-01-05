import { PartialType } from '@nestjs/mapped-types';
import { CreateFacultyDto } from './create-faculty.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateFacultyDto extends PartialType(CreateFacultyDto) {
    @IsNotEmpty({message: "Please Provide the faculty's name"})
    @IsString()
    label : string

    @IsNotEmpty({message: "Please Providethe faculty's Address"})
    @IsString()
    address : string
}
