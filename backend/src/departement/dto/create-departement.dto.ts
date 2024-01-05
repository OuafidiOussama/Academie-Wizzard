import { IsNotEmpty, IsString } from "class-validator"
export class CreateDepartementDto {
	


    @IsNotEmpty({message: "Please Provide the departement's name"})
    @IsString()
    label : string
}


