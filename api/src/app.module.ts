import { CampaignsModule } from './campaigns/campaigns.module';
import { Module } from '@nestjs/common';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [CampaignsModule, StorageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
