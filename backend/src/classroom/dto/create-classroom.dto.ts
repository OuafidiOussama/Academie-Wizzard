import { IsNumber, IsNotEmpty} from "class-validator";
export class CreateClassroomDto {
	@IsNotEmpty({message: "Please Provide the Classroom's Number"})
    @IsNumber()
    Number : number
	@IsNotEmpty({message: "Please Provide the Classroom's Capaciy"})
    @IsNumber()
    Capacity : number
}
