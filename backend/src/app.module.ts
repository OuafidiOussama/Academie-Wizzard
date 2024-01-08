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
import { TeacherModule } from './teacher/teacher.module';
import { ClassroomModule } from './classroom/classroom.module';
import { DeanModule } from './dean/dean.module';
import { SuperAdminModule } from './super-admin/super-admin.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), FacultyModule, ResultModule, StudentModule, TeacherModule, ClassroomModule, DeanModule, SuperAdminModule,DepartementModule,SubjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
