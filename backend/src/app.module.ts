import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './database/connection.config';
import { FacultyModule } from './faculty/faculty.module';
import { SubjectModule } from './subject/subject.module';
import { SpecialtyModule } from './specialty/specialty.module';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), FacultyModule, SubjectModule, SpecialtyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
