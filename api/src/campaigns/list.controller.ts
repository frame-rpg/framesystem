import { ListCampaignsRequest, ListCampaignsResponse } from '../proto/service';
import { Metadata, ServerUnaryCall } from 'grpc';

import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class ListController {
  @GrpcMethod('FramesystemService', 'ListCampaigns')
  listCampaigns(
    data: ListCampaignsRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>,
  ): ListCampaignsResponse {
    return ListCampaignsResponse.fromPartial({
      campaigns: [{ id: '1' }],
    });
  }
}
