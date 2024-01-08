import { IsNotEmpty, IsString } from "class-validator"

export class CreateFacultyDto {
    @IsNotEmpty({message: "Please Provide the faculty's name"})
    @IsString()
    label : string

    @IsNotEmpty({message: "Please Providethe faculty's Address"})
    @IsString()
    address : string

	
}
