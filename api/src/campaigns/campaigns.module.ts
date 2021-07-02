import { ListController } from './list.controller';
import { Module } from '@nestjs/common';
import { ReadController } from './read.controller';
import { StorageModule } from 'src/storage/storage.module';

@Module({
  imports: [StorageModule],
  controllers: [ListController, ReadController],
  providers: [],
})
export class CampaignsModule {}
