/* eslint-disable */
import { util, configure, Reader, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { Observable } from 'rxjs';

export const protobufPackage = 'framesystem';

export interface CampaignId {
  id: string;
  name: string;
}

export interface CreateCampaignRequest {}

export interface CreateCampaignResponse {}

export interface ReadCampaignRequest {}

export interface ReadCampaignResponse {}

export interface UpdateCampaignRequest {}

export interface UpdateCampaignResponse {}

export interface DeleteCampaignRequest {}

export interface DeleteCampaignResponse {}

export interface ListCampaignsRequest {}

export interface ListCampaignsResponse {
  campaignId: CampaignId[];
}

export interface CreateCharacterRequest {}

export interface CreateCharacterResponse {}

export interface ReadCharacterRequest {}

export interface ReadCharacterResponse {}

export interface UpdateCharacterRequest {}

export interface UpdateCharacterResponse {}

export interface DeleteCharacterRequest {}

export interface DeleteCharacterResponse {}

export interface ListCharactersRequest {}

export interface ListCharactersResponse {}

const baseCampaignId: object = { id: '', name: '' };

export const CampaignId = {
  encode(message: CampaignId, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CampaignId {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCampaignId } as CampaignId;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CampaignId {
    const message = { ...baseCampaignId } as CampaignId;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = '';
    }
    return message;
  },

  toJSON(message: CampaignId): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<CampaignId>): CampaignId {
    const message = { ...baseCampaignId } as CampaignId;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = '';
    }
    return message;
  },
};

const baseCreateCampaignRequest: object = {};

export const CreateCampaignRequest = {
  encode(_: CreateCampaignRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CreateCampaignRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateCampaignRequest } as CreateCampaignRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CreateCampaignRequest {
    const message = { ...baseCreateCampaignRequest } as CreateCampaignRequest;
    return message;
  },

  toJSON(_: CreateCampaignRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<CreateCampaignRequest>): CreateCampaignRequest {
    const message = { ...baseCreateCampaignRequest } as CreateCampaignRequest;
    return message;
  },
};

const baseCreateCampaignResponse: object = {};

export const CreateCampaignResponse = {
  encode(_: CreateCampaignResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CreateCampaignResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateCampaignResponse } as CreateCampaignResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CreateCampaignResponse {
    const message = { ...baseCreateCampaignResponse } as CreateCampaignResponse;
    return message;
  },

  toJSON(_: CreateCampaignResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<CreateCampaignResponse>): CreateCampaignResponse {
    const message = { ...baseCreateCampaignResponse } as CreateCampaignResponse;
    return message;
  },
};

const baseReadCampaignRequest: object = {};

export const ReadCampaignRequest = {
  encode(_: ReadCampaignRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ReadCampaignRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReadCampaignRequest } as ReadCampaignRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ReadCampaignRequest {
    const message = { ...baseReadCampaignRequest } as ReadCampaignRequest;
    return message;
  },

  toJSON(_: ReadCampaignRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ReadCampaignRequest>): ReadCampaignRequest {
    const message = { ...baseReadCampaignRequest } as ReadCampaignRequest;
    return message;
  },
};

const baseReadCampaignResponse: object = {};

export const ReadCampaignResponse = {
  encode(_: ReadCampaignResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ReadCampaignResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReadCampaignResponse } as ReadCampaignResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ReadCampaignResponse {
    const message = { ...baseReadCampaignResponse } as ReadCampaignResponse;
    return message;
  },

  toJSON(_: ReadCampaignResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ReadCampaignResponse>): ReadCampaignResponse {
    const message = { ...baseReadCampaignResponse } as ReadCampaignResponse;
    return message;
  },
};

const baseUpdateCampaignRequest: object = {};

export const UpdateCampaignRequest = {
  encode(_: UpdateCampaignRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UpdateCampaignRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateCampaignRequest } as UpdateCampaignRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): UpdateCampaignRequest {
    const message = { ...baseUpdateCampaignRequest } as UpdateCampaignRequest;
    return message;
  },

  toJSON(_: UpdateCampaignRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<UpdateCampaignRequest>): UpdateCampaignRequest {
    const message = { ...baseUpdateCampaignRequest } as UpdateCampaignRequest;
    return message;
  },
};

const baseUpdateCampaignResponse: object = {};

export const UpdateCampaignResponse = {
  encode(_: UpdateCampaignResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UpdateCampaignResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateCampaignResponse } as UpdateCampaignResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): UpdateCampaignResponse {
    const message = { ...baseUpdateCampaignResponse } as UpdateCampaignResponse;
    return message;
  },

  toJSON(_: UpdateCampaignResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<UpdateCampaignResponse>): UpdateCampaignResponse {
    const message = { ...baseUpdateCampaignResponse } as UpdateCampaignResponse;
    return message;
  },
};

const baseDeleteCampaignRequest: object = {};

export const DeleteCampaignRequest = {
  encode(_: DeleteCampaignRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DeleteCampaignRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteCampaignRequest } as DeleteCampaignRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): DeleteCampaignRequest {
    const message = { ...baseDeleteCampaignRequest } as DeleteCampaignRequest;
    return message;
  },

  toJSON(_: DeleteCampaignRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<DeleteCampaignRequest>): DeleteCampaignRequest {
    const message = { ...baseDeleteCampaignRequest } as DeleteCampaignRequest;
    return message;
  },
};

const baseDeleteCampaignResponse: object = {};

export const DeleteCampaignResponse = {
  encode(_: DeleteCampaignResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DeleteCampaignResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteCampaignResponse } as DeleteCampaignResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): DeleteCampaignResponse {
    const message = { ...baseDeleteCampaignResponse } as DeleteCampaignResponse;
    return message;
  },

  toJSON(_: DeleteCampaignResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<DeleteCampaignResponse>): DeleteCampaignResponse {
    const message = { ...baseDeleteCampaignResponse } as DeleteCampaignResponse;
    return message;
  },
};

const baseListCampaignsRequest: object = {};

export const ListCampaignsRequest = {
  encode(_: ListCampaignsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ListCampaignsRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListCampaignsRequest } as ListCampaignsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ListCampaignsRequest {
    const message = { ...baseListCampaignsRequest } as ListCampaignsRequest;
    return message;
  },

  toJSON(_: ListCampaignsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ListCampaignsRequest>): ListCampaignsRequest {
    const message = { ...baseListCampaignsRequest } as ListCampaignsRequest;
    return message;
  },
};

const baseListCampaignsResponse: object = {};

export const ListCampaignsResponse = {
  encode(
    message: ListCampaignsResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    for (const v of message.campaignId) {
      CampaignId.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ListCampaignsResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListCampaignsResponse } as ListCampaignsResponse;
    message.campaignId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignId.push(CampaignId.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListCampaignsResponse {
    const message = { ...baseListCampaignsResponse } as ListCampaignsResponse;
    message.campaignId = [];
    if (object.campaignId !== undefined && object.campaignId !== null) {
      for (const e of object.campaignId) {
        message.campaignId.push(CampaignId.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ListCampaignsResponse): unknown {
    const obj: any = {};
    if (message.campaignId) {
      obj.campaignId = message.campaignId.map((e) =>
        e ? CampaignId.toJSON(e) : undefined,
      );
    } else {
      obj.campaignId = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListCampaignsResponse>,
  ): ListCampaignsResponse {
    const message = { ...baseListCampaignsResponse } as ListCampaignsResponse;
    message.campaignId = [];
    if (object.campaignId !== undefined && object.campaignId !== null) {
      for (const e of object.campaignId) {
        message.campaignId.push(CampaignId.fromPartial(e));
      }
    }
    return message;
  },
};

const baseCreateCharacterRequest: object = {};

export const CreateCharacterRequest = {
  encode(_: CreateCharacterRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CreateCharacterRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateCharacterRequest } as CreateCharacterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CreateCharacterRequest {
    const message = { ...baseCreateCharacterRequest } as CreateCharacterRequest;
    return message;
  },

  toJSON(_: CreateCharacterRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<CreateCharacterRequest>): CreateCharacterRequest {
    const message = { ...baseCreateCharacterRequest } as CreateCharacterRequest;
    return message;
  },
};

const baseCreateCharacterResponse: object = {};

export const CreateCharacterResponse = {
  encode(_: CreateCharacterResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CreateCharacterResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateCharacterResponse,
    } as CreateCharacterResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CreateCharacterResponse {
    const message = {
      ...baseCreateCharacterResponse,
    } as CreateCharacterResponse;
    return message;
  },

  toJSON(_: CreateCharacterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<CreateCharacterResponse>,
  ): CreateCharacterResponse {
    const message = {
      ...baseCreateCharacterResponse,
    } as CreateCharacterResponse;
    return message;
  },
};

const baseReadCharacterRequest: object = {};

export const ReadCharacterRequest = {
  encode(_: ReadCharacterRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ReadCharacterRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReadCharacterRequest } as ReadCharacterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ReadCharacterRequest {
    const message = { ...baseReadCharacterRequest } as ReadCharacterRequest;
    return message;
  },

  toJSON(_: ReadCharacterRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ReadCharacterRequest>): ReadCharacterRequest {
    const message = { ...baseReadCharacterRequest } as ReadCharacterRequest;
    return message;
  },
};

const baseReadCharacterResponse: object = {};

export const ReadCharacterResponse = {
  encode(_: ReadCharacterResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ReadCharacterResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReadCharacterResponse } as ReadCharacterResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ReadCharacterResponse {
    const message = { ...baseReadCharacterResponse } as ReadCharacterResponse;
    return message;
  },

  toJSON(_: ReadCharacterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ReadCharacterResponse>): ReadCharacterResponse {
    const message = { ...baseReadCharacterResponse } as ReadCharacterResponse;
    return message;
  },
};

const baseUpdateCharacterRequest: object = {};

export const UpdateCharacterRequest = {
  encode(_: UpdateCharacterRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UpdateCharacterRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateCharacterRequest } as UpdateCharacterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): UpdateCharacterRequest {
    const message = { ...baseUpdateCharacterRequest } as UpdateCharacterRequest;
    return message;
  },

  toJSON(_: UpdateCharacterRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<UpdateCharacterRequest>): UpdateCharacterRequest {
    const message = { ...baseUpdateCharacterRequest } as UpdateCharacterRequest;
    return message;
  },
};

const baseUpdateCharacterResponse: object = {};

export const UpdateCharacterResponse = {
  encode(_: UpdateCharacterResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UpdateCharacterResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateCharacterResponse,
    } as UpdateCharacterResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): UpdateCharacterResponse {
    const message = {
      ...baseUpdateCharacterResponse,
    } as UpdateCharacterResponse;
    return message;
  },

  toJSON(_: UpdateCharacterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<UpdateCharacterResponse>,
  ): UpdateCharacterResponse {
    const message = {
      ...baseUpdateCharacterResponse,
    } as UpdateCharacterResponse;
    return message;
  },
};

const baseDeleteCharacterRequest: object = {};

export const DeleteCharacterRequest = {
  encode(_: DeleteCharacterRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DeleteCharacterRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteCharacterRequest } as DeleteCharacterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): DeleteCharacterRequest {
    const message = { ...baseDeleteCharacterRequest } as DeleteCharacterRequest;
    return message;
  },

  toJSON(_: DeleteCharacterRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<DeleteCharacterRequest>): DeleteCharacterRequest {
    const message = { ...baseDeleteCharacterRequest } as DeleteCharacterRequest;
    return message;
  },
};

const baseDeleteCharacterResponse: object = {};

export const DeleteCharacterResponse = {
  encode(_: DeleteCharacterResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DeleteCharacterResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteCharacterResponse,
    } as DeleteCharacterResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): DeleteCharacterResponse {
    const message = {
      ...baseDeleteCharacterResponse,
    } as DeleteCharacterResponse;
    return message;
  },

  toJSON(_: DeleteCharacterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<DeleteCharacterResponse>,
  ): DeleteCharacterResponse {
    const message = {
      ...baseDeleteCharacterResponse,
    } as DeleteCharacterResponse;
    return message;
  },
};

const baseListCharactersRequest: object = {};

export const ListCharactersRequest = {
  encode(_: ListCharactersRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ListCharactersRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListCharactersRequest } as ListCharactersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ListCharactersRequest {
    const message = { ...baseListCharactersRequest } as ListCharactersRequest;
    return message;
  },

  toJSON(_: ListCharactersRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ListCharactersRequest>): ListCharactersRequest {
    const message = { ...baseListCharactersRequest } as ListCharactersRequest;
    return message;
  },
};

const baseListCharactersResponse: object = {};

export const ListCharactersResponse = {
  encode(_: ListCharactersResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ListCharactersResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListCharactersResponse } as ListCharactersResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ListCharactersResponse {
    const message = { ...baseListCharactersResponse } as ListCharactersResponse;
    return message;
  },

  toJSON(_: ListCharactersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ListCharactersResponse>): ListCharactersResponse {
    const message = { ...baseListCharactersResponse } as ListCharactersResponse;
    return message;
  },
};

export interface FramesystemService {
  CreateCampaign(
    request: CreateCampaignRequest,
  ): Promise<CreateCampaignResponse>;
  ReadCampaign(request: ReadCampaignRequest): Observable<ReadCampaignResponse>;
  UpdateCampaign(
    request: UpdateCampaignRequest,
  ): Promise<UpdateCampaignResponse>;
  DeleteCampaign(
    request: DeleteCampaignRequest,
  ): Promise<DeleteCampaignResponse>;
  ListCampaigns(request: ListCampaignsRequest): Promise<ListCampaignsResponse>;
  CreateCharacter(
    request: CreateCharacterRequest,
  ): Promise<CreateCharacterResponse>;
  ReadCharacter(
    request: ReadCharacterRequest,
  ): Observable<ReadCharacterResponse>;
  UpdateCharacter(
    request: UpdateCharacterRequest,
  ): Promise<UpdateCharacterResponse>;
  DeleteCharacter(
    request: DeleteCharacterRequest,
  ): Promise<DeleteCharacterResponse>;
  ListCharacters(
    request: ListCharactersRequest,
  ): Promise<ListCharactersResponse>;
}

export class FramesystemServiceClientImpl implements FramesystemService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateCampaign(
    request: CreateCampaignRequest,
  ): Promise<CreateCampaignResponse> {
    const data = CreateCampaignRequest.encode(request).finish();
    const promise = this.rpc.request(
      'framesystem.FramesystemService',
      'CreateCampaign',
      data,
    );
    return promise.then((data) =>
      CreateCampaignResponse.decode(new Reader(data)),
    );
  }

  ReadCampaign(request: ReadCampaignRequest): Promise<ReadCampaignResponse> {
    const data = ReadCampaignRequest.encode(request).finish();
    const promise = this.rpc.request(
      'framesystem.FramesystemService',
      'ReadCampaign',
      data,
    );
    return promise.then((data) =>
      ReadCampaignResponse.decode(new Reader(data)),
    );
  }

  UpdateCampaign(
    request: UpdateCampaignRequest,
  ): Promise<UpdateCampaignResponse> {
    const data = UpdateCampaignRequest.encode(request).finish();
    const promise = this.rpc.request(
      'framesystem.FramesystemService',
      'UpdateCampaign',
      data,
    );
    return promise.then((data) =>
      UpdateCampaignResponse.decode(new Reader(data)),
    );
  }

  DeleteCampaign(
    request: DeleteCampaignRequest,
  ): Promise<DeleteCampaignResponse> {
    const data = DeleteCampaignRequest.encode(request).finish();
    const promise = this.rpc.request(
      'framesystem.FramesystemService',
      'DeleteCampaign',
      data,
    );
    return promise.then((data) =>
      DeleteCampaignResponse.decode(new Reader(data)),
    );
  }

  ListCampaigns(request: ListCampaignsRequest): Promise<ListCampaignsResponse> {
    const data = ListCampaignsRequest.encode(request).finish();
    const promise = this.rpc.request(
      'framesystem.FramesystemService',
      'ListCampaigns',
      data,
    );
    return promise.then((data) =>
      ListCampaignsResponse.decode(new Reader(data)),
    );
  }

  CreateCharacter(
    request: CreateCharacterRequest,
  ): Promise<CreateCharacterResponse> {
    const data = CreateCharacterRequest.encode(request).finish();
    const promise = this.rpc.request(
      'framesystem.FramesystemService',
      'CreateCharacter',
      data,
    );
    return promise.then((data) =>
      CreateCharacterResponse.decode(new Reader(data)),
    );
  }

  ReadCharacter(request: ReadCharacterRequest): Promise<ReadCharacterResponse> {
    const data = ReadCharacterRequest.encode(request).finish();
    const promise = this.rpc.request(
      'framesystem.FramesystemService',
      'ReadCharacter',
      data,
    );
    return promise.then((data) =>
      ReadCharacterResponse.decode(new Reader(data)),
    );
  }

  UpdateCharacter(
    request: UpdateCharacterRequest,
  ): Promise<UpdateCharacterResponse> {
    const data = UpdateCharacterRequest.encode(request).finish();
    const promise = this.rpc.request(
      'framesystem.FramesystemService',
      'UpdateCharacter',
      data,
    );
    return promise.then((data) =>
      UpdateCharacterResponse.decode(new Reader(data)),
    );
  }

  DeleteCharacter(
    request: DeleteCharacterRequest,
  ): Promise<DeleteCharacterResponse> {
    const data = DeleteCharacterRequest.encode(request).finish();
    const promise = this.rpc.request(
      'framesystem.FramesystemService',
      'DeleteCharacter',
      data,
    );
    return promise.then((data) =>
      DeleteCharacterResponse.decode(new Reader(data)),
    );
  }

  ListCharacters(
    request: ListCharactersRequest,
  ): Promise<ListCharactersResponse> {
    const data = ListCharactersRequest.encode(request).finish();
    const promise = this.rpc.request(
      'framesystem.FramesystemService',
      'ListCharacters',
      data,
    );
    return promise.then((data) =>
      ListCharactersResponse.decode(new Reader(data)),
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
