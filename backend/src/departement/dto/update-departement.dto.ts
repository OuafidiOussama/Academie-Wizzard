import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartementDto } from './create-departement.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateDepartementDto extends PartialType(CreateDepartementDto) {
    @IsNotEmpty({message: "Please Provide the departement's name"})
    @IsString()
    label : string

  
}
