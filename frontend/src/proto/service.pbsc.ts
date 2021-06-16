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
     * Unary RPC for /framesystem.FramesystemService/CreateCampaign
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CreateCampaignResponse>>
     */
    createCampaign: (
      requestData: thisProto.CreateCampaignRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CreateCampaignResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/framesystem.FramesystemService/CreateCampaign',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateCampaignRequest,
        responseClass: thisProto.CreateCampaignResponse
      });
    },
    /**
     * Server streaming RPC for /framesystem.FramesystemService/ReadCampaign
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ReadCampaignResponse>>
     */
    readCampaign: (
      requestData: thisProto.ReadCampaignRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ReadCampaignResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/framesystem.FramesystemService/ReadCampaign',
        requestData,
        requestMetadata,
        requestClass: thisProto.ReadCampaignRequest,
        responseClass: thisProto.ReadCampaignResponse
      });
    },
    /**
     * Unary RPC for /framesystem.FramesystemService/UpdateCampaign
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UpdateCampaignResponse>>
     */
    updateCampaign: (
      requestData: thisProto.UpdateCampaignRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UpdateCampaignResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/framesystem.FramesystemService/UpdateCampaign',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateCampaignRequest,
        responseClass: thisProto.UpdateCampaignResponse
      });
    },
    /**
     * Unary RPC for /framesystem.FramesystemService/DeleteCampaign
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DeleteCampaignResponse>>
     */
    deleteCampaign: (
      requestData: thisProto.DeleteCampaignRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DeleteCampaignResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/framesystem.FramesystemService/DeleteCampaign',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteCampaignRequest,
        responseClass: thisProto.DeleteCampaignResponse
      });
    },
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
    },
    /**
     * Unary RPC for /framesystem.FramesystemService/CreateCharacter
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CreateCharacterResponse>>
     */
    createCharacter: (
      requestData: thisProto.CreateCharacterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CreateCharacterResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/framesystem.FramesystemService/CreateCharacter',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateCharacterRequest,
        responseClass: thisProto.CreateCharacterResponse
      });
    },
    /**
     * Server streaming RPC for /framesystem.FramesystemService/ReadCharacter
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ReadCharacterResponse>>
     */
    readCharacter: (
      requestData: thisProto.ReadCharacterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ReadCharacterResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/framesystem.FramesystemService/ReadCharacter',
        requestData,
        requestMetadata,
        requestClass: thisProto.ReadCharacterRequest,
        responseClass: thisProto.ReadCharacterResponse
      });
    },
    /**
     * Unary RPC for /framesystem.FramesystemService/UpdateCharacter
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UpdateCharacterResponse>>
     */
    updateCharacter: (
      requestData: thisProto.UpdateCharacterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UpdateCharacterResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/framesystem.FramesystemService/UpdateCharacter',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateCharacterRequest,
        responseClass: thisProto.UpdateCharacterResponse
      });
    },
    /**
     * Unary RPC for /framesystem.FramesystemService/DeleteCharacter
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DeleteCharacterResponse>>
     */
    deleteCharacter: (
      requestData: thisProto.DeleteCharacterRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DeleteCharacterResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/framesystem.FramesystemService/DeleteCharacter',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteCharacterRequest,
        responseClass: thisProto.DeleteCharacterResponse
      });
    },
    /**
     * Unary RPC for /framesystem.FramesystemService/ListCharacters
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListCharactersResponse>>
     */
    listCharacters: (
      requestData: thisProto.ListCharactersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListCharactersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/framesystem.FramesystemService/ListCharacters',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListCharactersRequest,
        responseClass: thisProto.ListCharactersResponse
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
   * Unary RPC for /framesystem.FramesystemService/CreateCampaign
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CreateCampaignResponse>
   */
  createCampaign(
    requestData: thisProto.CreateCampaignRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CreateCampaignResponse> {
    return this.$raw
      .createCampaign(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming RPC for /framesystem.FramesystemService/ReadCampaign
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ReadCampaignResponse>
   */
  readCampaign(
    requestData: thisProto.ReadCampaignRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ReadCampaignResponse> {
    return this.$raw
      .readCampaign(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /framesystem.FramesystemService/UpdateCampaign
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UpdateCampaignResponse>
   */
  updateCampaign(
    requestData: thisProto.UpdateCampaignRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UpdateCampaignResponse> {
    return this.$raw
      .updateCampaign(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /framesystem.FramesystemService/DeleteCampaign
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeleteCampaignResponse>
   */
  deleteCampaign(
    requestData: thisProto.DeleteCampaignRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DeleteCampaignResponse> {
    return this.$raw
      .deleteCampaign(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
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

  /**
   * Unary RPC for /framesystem.FramesystemService/CreateCharacter
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CreateCharacterResponse>
   */
  createCharacter(
    requestData: thisProto.CreateCharacterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CreateCharacterResponse> {
    return this.$raw
      .createCharacter(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming RPC for /framesystem.FramesystemService/ReadCharacter
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ReadCharacterResponse>
   */
  readCharacter(
    requestData: thisProto.ReadCharacterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ReadCharacterResponse> {
    return this.$raw
      .readCharacter(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /framesystem.FramesystemService/UpdateCharacter
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UpdateCharacterResponse>
   */
  updateCharacter(
    requestData: thisProto.UpdateCharacterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UpdateCharacterResponse> {
    return this.$raw
      .updateCharacter(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /framesystem.FramesystemService/DeleteCharacter
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeleteCharacterResponse>
   */
  deleteCharacter(
    requestData: thisProto.DeleteCharacterRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DeleteCharacterResponse> {
    return this.$raw
      .deleteCharacter(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /framesystem.FramesystemService/ListCharacters
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListCharactersResponse>
   */
  listCharacters(
    requestData: thisProto.ListCharactersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListCharactersResponse> {
    return this.$raw
      .listCharacters(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
