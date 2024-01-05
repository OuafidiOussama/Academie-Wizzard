import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';
import { FacultyModule } from './faculty/faculty.module';
import { SubjectModule } from './subject/subject.module';
import { SpecialtyModule } from './specialty/specialty.module';
import { UserModule } from './user/user.module';
import { DepartementModule } from './departement/departement.module';
import { ResultModule } from './result/result.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), FacultyModule, ResultModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
