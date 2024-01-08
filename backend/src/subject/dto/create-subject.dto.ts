import { IsNotEmpty, IsString } from "class-validator"
export class CreateSubjectDto {
	


    @IsNotEmpty({message: "Please Provide the Subject's name"})
    @IsString()
    label : string
	@IsNotEmpty({message: "Please Provide the Subject's description"})
    @IsString()
    description : string
}


