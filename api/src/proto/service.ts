/* eslint-disable */
import { util, configure, Reader, Writer } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'framesystem';

export interface ListCampaignsRequest {}

export interface ListCampaignsResponse {
  campaignId: CampaignId[];
}

export interface CampaignId {
  id: string;
  name: string;
}

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

export interface FramesystemService {
  ListCampaigns(request: ListCampaignsRequest): Promise<ListCampaignsResponse>;
}

export class FramesystemServiceClientImpl implements FramesystemService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
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
