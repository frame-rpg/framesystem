/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './service.pb';
import { GRPC_FRAMESYSTEM_SERVICE_CLIENT_SETTINGS } from './service.pbconf';
/**
 * Service client implementation for framesystem.FramesystemService
 */
@Injectable({ providedIn: 'any' })
export class FramesystemServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /framesystem.FramesystemService/ListCampaigns
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListCampaignsResponse>>
     */
    listCampaigns: (
      requestData: thisProto.ListCampaignsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListCampaignsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/framesystem.FramesystemService/ListCampaigns',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListCampaignsRequest,
        responseClass: thisProto.ListCampaignsResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_FRAMESYSTEM_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'framesystem.FramesystemService',
      settings
    );
  }

  /**
   * Unary RPC for /framesystem.FramesystemService/ListCampaigns
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListCampaignsResponse>
   */
  listCampaigns(
    requestData: thisProto.ListCampaignsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListCampaignsResponse> {
    return this.$raw
      .listCampaigns(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}