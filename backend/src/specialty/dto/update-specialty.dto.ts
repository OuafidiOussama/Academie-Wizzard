import { PartialType } from '@nestjs/mapped-types';
import { CreateSpecialtyDto } from './create-specialty.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateSpecialtyDto extends PartialType(CreateSpecialtyDto) {
    @IsNotEmpty({message: "Please Provide the Specialty's name"})
    @IsString()
    label ?: string

}
