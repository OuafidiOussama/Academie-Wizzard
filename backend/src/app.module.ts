import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './database/connection.config';
import { DepartementModule } from './departement/departement.module';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), DepartementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
