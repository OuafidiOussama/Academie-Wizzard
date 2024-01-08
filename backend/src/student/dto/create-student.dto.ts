import { IsNotEmpty, IsString, IsDate } from "class-validator"


export class CreateStudentDto {
    @IsNotEmpty({ message: "Please Provide the student age" })
    @IsString()
    age: string
    @IsDate()
    inscriptionDate: Date
}
