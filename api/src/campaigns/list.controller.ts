import { ListCampaignsRequest, ListCampaignsResponse } from '../proto/service';
import { Metadata, ServerUnaryCall } from 'grpc';

import { Controller } from '@nestjs/common';
import { FirestoreService } from 'src/storage/firestore/firestore.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class ListController {
  constructor(private firestoreService: FirestoreService) {}

  @GrpcMethod('FramesystemService', 'ListCampaigns')
  listCampaigns(
    data: ListCampaignsRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>,
  ): Promise<ListCampaignsResponse> {
    console.log(metadata.get('user'));
    return this.firestoreService.list('/campaigns').then((campaigns) => {
      console.log(campaigns);
      return ListCampaignsResponse.fromJSON({ campaigns });
    });
  }
}
