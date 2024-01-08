import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { IsNotEmpty, IsString ,IsDate} from 'class-validator';


export class UpdateStudentDto extends PartialType(CreateStudentDto) {

    @IsNotEmpty({ message: "Please Provide the student age" })
    @IsString()
    age: string
    @IsDate()
    inscriptionDate: Date
}
