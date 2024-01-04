import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './database/connection.config';
import { NoteModule } from './note/note.module';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), NoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
