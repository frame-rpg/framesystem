import { Metadata, ServerUnaryCall } from 'grpc';
import { ReadCampaignRequest, ReadCampaignResponse } from '../proto/service';
import { map, tap } from 'rxjs/operators';

import { Controller } from '@nestjs/common';
import { FirestoreService } from 'src/storage/firestore/firestore.service';
import { GrpcMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class ReadController {
  constructor(private firestoreService: FirestoreService) {}

  @GrpcMethod('FramesystemService', 'ReadCampaign')
  listCampaigns(
    data: ReadCampaignRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>,
  ): Observable<ReadCampaignResponse> {
    return this.firestoreService.subscribe(`/campaigns/${data.id}`).pipe(
      map((campaign) => {
        return ReadCampaignResponse.fromJSON({ campaign });
      }),
    );
  }
}
