import { IsNotEmpty, IsString } from "class-validator"

export class CreateSpecialtyDto {
    @IsNotEmpty({message: "Please Provide the Specialty's name"})
    @IsString()
    label : string
}
