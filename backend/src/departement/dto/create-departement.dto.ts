import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
export class CreateDepartementDto {

    @IsNotEmpty({message: "Please Provide the departement's name"})
    @IsString()
    label : string

	@IsNotEmpty({message: "Please Providethe faculty's Id"})
	@IsNumber()
    facultyId: number;
}


