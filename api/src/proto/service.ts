/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { AclLevel, aclLevelFromJSON, aclLevelToJSON } from './acl';
import { Observable } from 'rxjs';
import { Campaign } from './campaign';
import { FieldMask } from './google/protobuf/field_mask';
import { Character } from './character';
import { User } from './user';

export const protobufPackage = 'framesystem';

export interface CreateCampaignRequest {
  name: string;
}

export interface CreateCampaignResponse {
  created: Campaign | undefined;
}

export interface ReadCampaignRequest {
  id: string;
}

export interface ReadCampaignResponse {
  campaign: Campaign | undefined;
}

export interface UpdateCampaignRequest {
  campaign: Campaign | undefined;
  fieldMask: FieldMask | undefined;
}

export interface UpdateCampaignResponse {}

export interface DeleteCampaignRequest {
  id: string;
}

export interface DeleteCampaignResponse {}

export interface ListCampaignsRequest {
  minLevel: AclLevel;
}

export interface ListCampaignsResponse {
  campaigns: Campaign[];
}

export interface CreateCharacterRequest {
  name: string;
}

export interface CreateCharacterResponse {
  character: Character | undefined;
}

export interface ReadCharacterRequest {
  id: string;
}

export interface ReadCharacterResponse {
  character: Character | undefined;
}

export interface UpdateCharacterRequest {
  character: Character | undefined;
  fieldMask: FieldMask | undefined;
}

export interface UpdateCharacterResponse {}

export interface DeleteCharacterRequest {
  id: string;
}

export interface DeleteCharacterResponse {}

export interface ListCharactersRequest {
  minLevel: AclLevel;
}

export interface ListCharactersResponse {
  characters: Character[];
}

export interface ReadUserRequest {
  id: string;
}

export interface ReadUserResponse {
  user: User | undefined;
}

export interface UpdateUserRequest {
  user: User | undefined;
  fieldMask: FieldMask | undefined;
}

export interface UpdateUserResponse {}

const baseCreateCampaignRequest: object = { name: '' };

export const CreateCampaignRequest = {
  encode(
    message: CreateCampaignRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CreateCampaignRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateCampaignRequest } as CreateCampaignRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateCampaignRequest {
    const message = { ...baseCreateCampaignRequest } as CreateCampaignRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = '';
    }
    return message;
  },

  toJSON(message: CreateCampaignRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateCampaignRequest>,
  ): CreateCampaignRequest {
    const message = { ...baseCreateCampaignRequest } as CreateCampaignRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = '';
    }
    return message;
  },
};

const baseCreateCampaignResponse: object = {};

export const CreateCampaignResponse = {
  encode(
    message: CreateCampaignResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.created !== undefined) {
      Campaign.encode(message.created, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CreateCampaignResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateCampaignResponse } as CreateCampaignResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.created = Campaign.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateCampaignResponse {
    const message = { ...baseCreateCampaignResponse } as CreateCampaignResponse;
    if (object.created !== undefined && object.created !== null) {
      message.created = Campaign.fromJSON(object.created);
    } else {
      message.created = undefined;
    }
    return message;
  },

  toJSON(message: CreateCampaignResponse): unknown {
    const obj: any = {};
    message.created !== undefined &&
      (obj.created = message.created
        ? Campaign.toJSON(message.created)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateCampaignResponse>,
  ): CreateCampaignResponse {
    const message = { ...baseCreateCampaignResponse } as CreateCampaignResponse;
    if (object.created !== undefined && object.created !== null) {
      message.created = Campaign.fromPartial(object.created);
    } else {
      message.created = undefined;
    }
    return message;
  },
};

const baseReadCampaignRequest: object = { id: '' };

export const ReadCampaignRequest = {
  encode(
    message: ReadCampaignRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ReadCampaignRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReadCampaignRequest } as ReadCampaignRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadCampaignRequest {
    const message = { ...baseReadCampaignRequest } as ReadCampaignRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: ReadCampaignRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<ReadCampaignRequest>): ReadCampaignRequest {
    const message = { ...baseReadCampaignRequest } as ReadCampaignRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
};

const baseReadCampaignResponse: object = {};

export const ReadCampaignResponse = {
  encode(
    message: ReadCampaignResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.campaign !== undefined) {
      Campaign.encode(message.campaign, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ReadCampaignResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReadCampaignResponse } as ReadCampaignResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaign = Campaign.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadCampaignResponse {
    const message = { ...baseReadCampaignResponse } as ReadCampaignResponse;
    if (object.campaign !== undefined && object.campaign !== null) {
      message.campaign = Campaign.fromJSON(object.campaign);
    } else {
      message.campaign = undefined;
    }
    return message;
  },

  toJSON(message: ReadCampaignResponse): unknown {
    const obj: any = {};
    message.campaign !== undefined &&
      (obj.campaign = message.campaign
        ? Campaign.toJSON(message.campaign)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ReadCampaignResponse>): ReadCampaignResponse {
    const message = { ...baseReadCampaignResponse } as ReadCampaignResponse;
    if (object.campaign !== undefined && object.campaign !== null) {
      message.campaign = Campaign.fromPartial(object.campaign);
    } else {
      message.campaign = undefined;
    }
    return message;
  },
};

const baseUpdateCampaignRequest: object = {};

export const UpdateCampaignRequest = {
  encode(
    message: UpdateCampaignRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.campaign !== undefined) {
      Campaign.encode(message.campaign, writer.uint32(10).fork()).ldelim();
    }
    if (message.fieldMask !== undefined) {
      FieldMask.encode(message.fieldMask, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UpdateCampaignRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateCampaignRequest } as UpdateCampaignRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaign = Campaign.decode(reader, reader.uint32());
          break;
        case 2:
          message.fieldMask = FieldMask.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateCampaignRequest {
    const message = { ...baseUpdateCampaignRequest } as UpdateCampaignRequest;
    if (object.campaign !== undefined && object.campaign !== null) {
      message.campaign = Campaign.fromJSON(object.campaign);
    } else {
      message.campaign = undefined;
    }
    if (object.fieldMask !== undefined && object.fieldMask !== null) {
      message.fieldMask = FieldMask.fromJSON(object.fieldMask);
    } else {
      message.fieldMask = undefined;
    }
    return message;
  },

  toJSON(message: UpdateCampaignRequest): unknown {
    const obj: any = {};
    message.campaign !== undefined &&
      (obj.campaign = message.campaign
        ? Campaign.toJSON(message.campaign)
        : undefined);
    message.fieldMask !== undefined &&
      (obj.fieldMask = message.fieldMask
        ? FieldMask.toJSON(message.fieldMask)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateCampaignRequest>,
  ): UpdateCampaignRequest {
    const message = { ...baseUpdateCampaignRequest } as UpdateCampaignRequest;
    if (object.campaign !== undefined && object.campaign !== null) {
      message.campaign = Campaign.fromPartial(object.campaign);
    } else {
      message.campaign = undefined;
    }
    if (object.fieldMask !== undefined && object.fieldMask !== null) {
      message.fieldMask = FieldMask.fromPartial(object.fieldMask);
    } else {
      message.fieldMask = undefined;
    }
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

const baseDeleteCampaignRequest: object = { id: '' };

export const DeleteCampaignRequest = {
  encode(
    message: DeleteCampaignRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DeleteCampaignRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteCampaignRequest } as DeleteCampaignRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteCampaignRequest {
    const message = { ...baseDeleteCampaignRequest } as DeleteCampaignRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: DeleteCampaignRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteCampaignRequest>,
  ): DeleteCampaignRequest {
    const message = { ...baseDeleteCampaignRequest } as DeleteCampaignRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
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

const baseListCampaignsRequest: object = { minLevel: 0 };

export const ListCampaignsRequest = {
  encode(
    message: ListCampaignsRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.minLevel !== 0) {
      writer.uint32(8).int32(message.minLevel);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ListCampaignsRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListCampaignsRequest } as ListCampaignsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minLevel = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListCampaignsRequest {
    const message = { ...baseListCampaignsRequest } as ListCampaignsRequest;
    if (object.minLevel !== undefined && object.minLevel !== null) {
      message.minLevel = aclLevelFromJSON(object.minLevel);
    } else {
      message.minLevel = 0;
    }
    return message;
  },

  toJSON(message: ListCampaignsRequest): unknown {
    const obj: any = {};
    message.minLevel !== undefined &&
      (obj.minLevel = aclLevelToJSON(message.minLevel));
    return obj;
  },

  fromPartial(object: DeepPartial<ListCampaignsRequest>): ListCampaignsRequest {
    const message = { ...baseListCampaignsRequest } as ListCampaignsRequest;
    if (object.minLevel !== undefined && object.minLevel !== null) {
      message.minLevel = object.minLevel;
    } else {
      message.minLevel = 0;
    }
    return message;
  },
};

const baseListCampaignsResponse: object = {};

export const ListCampaignsResponse = {
  encode(
    message: ListCampaignsResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    for (const v of message.campaigns) {
      Campaign.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ListCampaignsResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListCampaignsResponse } as ListCampaignsResponse;
    message.campaigns = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaigns.push(Campaign.decode(reader, reader.uint32()));
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
    message.campaigns = [];
    if (object.campaigns !== undefined && object.campaigns !== null) {
      for (const e of object.campaigns) {
        message.campaigns.push(Campaign.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ListCampaignsResponse): unknown {
    const obj: any = {};
    if (message.campaigns) {
      obj.campaigns = message.campaigns.map((e) =>
        e ? Campaign.toJSON(e) : undefined,
      );
    } else {
      obj.campaigns = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListCampaignsResponse>,
  ): ListCampaignsResponse {
    const message = { ...baseListCampaignsResponse } as ListCampaignsResponse;
    message.campaigns = [];
    if (object.campaigns !== undefined && object.campaigns !== null) {
      for (const e of object.campaigns) {
        message.campaigns.push(Campaign.fromPartial(e));
      }
    }
    return message;
  },
};

const baseCreateCharacterRequest: object = { name: '' };

export const CreateCharacterRequest = {
  encode(
    message: CreateCharacterRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CreateCharacterRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateCharacterRequest } as CreateCharacterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateCharacterRequest {
    const message = { ...baseCreateCharacterRequest } as CreateCharacterRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = '';
    }
    return message;
  },

  toJSON(message: CreateCharacterRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateCharacterRequest>,
  ): CreateCharacterRequest {
    const message = { ...baseCreateCharacterRequest } as CreateCharacterRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = '';
    }
    return message;
  },
};

const baseCreateCharacterResponse: object = {};

export const CreateCharacterResponse = {
  encode(
    message: CreateCharacterResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.character !== undefined) {
      Character.encode(message.character, writer.uint32(10).fork()).ldelim();
    }
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
        case 1:
          message.character = Character.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateCharacterResponse {
    const message = {
      ...baseCreateCharacterResponse,
    } as CreateCharacterResponse;
    if (object.character !== undefined && object.character !== null) {
      message.character = Character.fromJSON(object.character);
    } else {
      message.character = undefined;
    }
    return message;
  },

  toJSON(message: CreateCharacterResponse): unknown {
    const obj: any = {};
    message.character !== undefined &&
      (obj.character = message.character
        ? Character.toJSON(message.character)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateCharacterResponse>,
  ): CreateCharacterResponse {
    const message = {
      ...baseCreateCharacterResponse,
    } as CreateCharacterResponse;
    if (object.character !== undefined && object.character !== null) {
      message.character = Character.fromPartial(object.character);
    } else {
      message.character = undefined;
    }
    return message;
  },
};

const baseReadCharacterRequest: object = { id: '' };

export const ReadCharacterRequest = {
  encode(
    message: ReadCharacterRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ReadCharacterRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReadCharacterRequest } as ReadCharacterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadCharacterRequest {
    const message = { ...baseReadCharacterRequest } as ReadCharacterRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: ReadCharacterRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<ReadCharacterRequest>): ReadCharacterRequest {
    const message = { ...baseReadCharacterRequest } as ReadCharacterRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
};

const baseReadCharacterResponse: object = {};

export const ReadCharacterResponse = {
  encode(
    message: ReadCharacterResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.character !== undefined) {
      Character.encode(message.character, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ReadCharacterResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReadCharacterResponse } as ReadCharacterResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.character = Character.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadCharacterResponse {
    const message = { ...baseReadCharacterResponse } as ReadCharacterResponse;
    if (object.character !== undefined && object.character !== null) {
      message.character = Character.fromJSON(object.character);
    } else {
      message.character = undefined;
    }
    return message;
  },

  toJSON(message: ReadCharacterResponse): unknown {
    const obj: any = {};
    message.character !== undefined &&
      (obj.character = message.character
        ? Character.toJSON(message.character)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ReadCharacterResponse>,
  ): ReadCharacterResponse {
    const message = { ...baseReadCharacterResponse } as ReadCharacterResponse;
    if (object.character !== undefined && object.character !== null) {
      message.character = Character.fromPartial(object.character);
    } else {
      message.character = undefined;
    }
    return message;
  },
};

const baseUpdateCharacterRequest: object = {};

export const UpdateCharacterRequest = {
  encode(
    message: UpdateCharacterRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.character !== undefined) {
      Character.encode(message.character, writer.uint32(10).fork()).ldelim();
    }
    if (message.fieldMask !== undefined) {
      FieldMask.encode(message.fieldMask, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UpdateCharacterRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateCharacterRequest } as UpdateCharacterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.character = Character.decode(reader, reader.uint32());
          break;
        case 2:
          message.fieldMask = FieldMask.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateCharacterRequest {
    const message = { ...baseUpdateCharacterRequest } as UpdateCharacterRequest;
    if (object.character !== undefined && object.character !== null) {
      message.character = Character.fromJSON(object.character);
    } else {
      message.character = undefined;
    }
    if (object.fieldMask !== undefined && object.fieldMask !== null) {
      message.fieldMask = FieldMask.fromJSON(object.fieldMask);
    } else {
      message.fieldMask = undefined;
    }
    return message;
  },

  toJSON(message: UpdateCharacterRequest): unknown {
    const obj: any = {};
    message.character !== undefined &&
      (obj.character = message.character
        ? Character.toJSON(message.character)
        : undefined);
    message.fieldMask !== undefined &&
      (obj.fieldMask = message.fieldMask
        ? FieldMask.toJSON(message.fieldMask)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateCharacterRequest>,
  ): UpdateCharacterRequest {
    const message = { ...baseUpdateCharacterRequest } as UpdateCharacterRequest;
    if (object.character !== undefined && object.character !== null) {
      message.character = Character.fromPartial(object.character);
    } else {
      message.character = undefined;
    }
    if (object.fieldMask !== undefined && object.fieldMask !== null) {
      message.fieldMask = FieldMask.fromPartial(object.fieldMask);
    } else {
      message.fieldMask = undefined;
    }
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

const baseDeleteCharacterRequest: object = { id: '' };

export const DeleteCharacterRequest = {
  encode(
    message: DeleteCharacterRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DeleteCharacterRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteCharacterRequest } as DeleteCharacterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteCharacterRequest {
    const message = { ...baseDeleteCharacterRequest } as DeleteCharacterRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: DeleteCharacterRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteCharacterRequest>,
  ): DeleteCharacterRequest {
    const message = { ...baseDeleteCharacterRequest } as DeleteCharacterRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
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

const baseListCharactersRequest: object = { minLevel: 0 };

export const ListCharactersRequest = {
  encode(
    message: ListCharactersRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.minLevel !== 0) {
      writer.uint32(8).int32(message.minLevel);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ListCharactersRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListCharactersRequest } as ListCharactersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minLevel = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListCharactersRequest {
    const message = { ...baseListCharactersRequest } as ListCharactersRequest;
    if (object.minLevel !== undefined && object.minLevel !== null) {
      message.minLevel = aclLevelFromJSON(object.minLevel);
    } else {
      message.minLevel = 0;
    }
    return message;
  },

  toJSON(message: ListCharactersRequest): unknown {
    const obj: any = {};
    message.minLevel !== undefined &&
      (obj.minLevel = aclLevelToJSON(message.minLevel));
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListCharactersRequest>,
  ): ListCharactersRequest {
    const message = { ...baseListCharactersRequest } as ListCharactersRequest;
    if (object.minLevel !== undefined && object.minLevel !== null) {
      message.minLevel = object.minLevel;
    } else {
      message.minLevel = 0;
    }
    return message;
  },
};

const baseListCharactersResponse: object = {};

export const ListCharactersResponse = {
  encode(
    message: ListCharactersResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    for (const v of message.characters) {
      Character.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ListCharactersResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListCharactersResponse } as ListCharactersResponse;
    message.characters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.characters.push(Character.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListCharactersResponse {
    const message = { ...baseListCharactersResponse } as ListCharactersResponse;
    message.characters = [];
    if (object.characters !== undefined && object.characters !== null) {
      for (const e of object.characters) {
        message.characters.push(Character.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ListCharactersResponse): unknown {
    const obj: any = {};
    if (message.characters) {
      obj.characters = message.characters.map((e) =>
        e ? Character.toJSON(e) : undefined,
      );
    } else {
      obj.characters = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListCharactersResponse>,
  ): ListCharactersResponse {
    const message = { ...baseListCharactersResponse } as ListCharactersResponse;
    message.characters = [];
    if (object.characters !== undefined && object.characters !== null) {
      for (const e of object.characters) {
        message.characters.push(Character.fromPartial(e));
      }
    }
    return message;
  },
};

const baseReadUserRequest: object = { id: '' };

export const ReadUserRequest = {
  encode(message: ReadUserRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ReadUserRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReadUserRequest } as ReadUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadUserRequest {
    const message = { ...baseReadUserRequest } as ReadUserRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: ReadUserRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<ReadUserRequest>): ReadUserRequest {
    const message = { ...baseReadUserRequest } as ReadUserRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
};

const baseReadUserResponse: object = {};

export const ReadUserResponse = {
  encode(message: ReadUserResponse, writer: Writer = Writer.create()): Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ReadUserResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReadUserResponse } as ReadUserResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadUserResponse {
    const message = { ...baseReadUserResponse } as ReadUserResponse;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },

  toJSON(message: ReadUserResponse): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ReadUserResponse>): ReadUserResponse {
    const message = { ...baseReadUserResponse } as ReadUserResponse;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },
};

const baseUpdateUserRequest: object = {};

export const UpdateUserRequest = {
  encode(message: UpdateUserRequest, writer: Writer = Writer.create()): Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.fieldMask !== undefined) {
      FieldMask.encode(message.fieldMask, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UpdateUserRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateUserRequest } as UpdateUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        case 2:
          message.fieldMask = FieldMask.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateUserRequest {
    const message = { ...baseUpdateUserRequest } as UpdateUserRequest;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    if (object.fieldMask !== undefined && object.fieldMask !== null) {
      message.fieldMask = FieldMask.fromJSON(object.fieldMask);
    } else {
      message.fieldMask = undefined;
    }
    return message;
  },

  toJSON(message: UpdateUserRequest): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    message.fieldMask !== undefined &&
      (obj.fieldMask = message.fieldMask
        ? FieldMask.toJSON(message.fieldMask)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateUserRequest>): UpdateUserRequest {
    const message = { ...baseUpdateUserRequest } as UpdateUserRequest;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    if (object.fieldMask !== undefined && object.fieldMask !== null) {
      message.fieldMask = FieldMask.fromPartial(object.fieldMask);
    } else {
      message.fieldMask = undefined;
    }
    return message;
  },
};

const baseUpdateUserResponse: object = {};

export const UpdateUserResponse = {
  encode(_: UpdateUserResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UpdateUserResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateUserResponse } as UpdateUserResponse;
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

  fromJSON(_: any): UpdateUserResponse {
    const message = { ...baseUpdateUserResponse } as UpdateUserResponse;
    return message;
  },

  toJSON(_: UpdateUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<UpdateUserResponse>): UpdateUserResponse {
    const message = { ...baseUpdateUserResponse } as UpdateUserResponse;
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
  ReadUser(request: ReadUserRequest): Promise<ReadUserResponse>;
  UpdateUser(request: UpdateUserRequest): Promise<UpdateUserResponse>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
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
