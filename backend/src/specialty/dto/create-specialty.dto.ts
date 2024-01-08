import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateSpecialtyDto {
    @IsNotEmpty({message: "Please Provide the Specialty's name"})
    @IsString()
    label : string
	@IsNotEmpty({message: "Please Provide the departement's Id"})
    @IsNumber()
     departementId: number;
}
