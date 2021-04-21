import { CampaignsModule } from './campaigns/campaigns.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [CampaignsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
