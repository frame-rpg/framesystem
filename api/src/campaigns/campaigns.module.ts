import { ListController } from './list.controller';
import { Module } from '@nestjs/common';
import { StorageModule } from 'src/storage/storage.module';

@Module({
  imports: [StorageModule],
  controllers: [ListController],
  providers: [],
})
export class CampaignsModule {}
