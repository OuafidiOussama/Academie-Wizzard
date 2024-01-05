import { Module } from '@nestjs/common';
import { DeanService } from './dean.service';
import { DeanController } from './dean.controller';

@Module({
  controllers: [DeanController],
  providers: [DeanService],
})
export class DeanModule {}
