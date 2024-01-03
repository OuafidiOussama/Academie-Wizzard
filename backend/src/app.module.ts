import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './database/connection.config';
import { FacultyModule } from './faculty/faculty.module';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), FacultyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
