/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { Acl } from './acl';
import { Skill } from './skill';

export const protobufPackage = 'framesystem';

export interface Campaign {
  id: string;
  acl: Acl | undefined;
  name: string;
  description: string;
  skills: { [key: string]: Skill };
  characters: string[];
}

export interface Campaign_SkillsEntry {
  key: string;
  value: Skill | undefined;
}

const baseCampaign: object = {
  id: '',
  name: '',
  description: '',
  characters: '',
};

export const Campaign = {
  encode(message: Campaign, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.acl !== undefined) {
      Acl.encode(message.acl, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== '') {
      writer.uint32(34).string(message.description);
    }
    Object.entries(message.skills).forEach(([key, value]) => {
      Campaign_SkillsEntry.encode(
        { key: key as any, value },
        writer.uint32(42).fork(),
      ).ldelim();
    });
    for (const v of message.characters) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Campaign {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCampaign } as Campaign;
    message.skills = {};
    message.characters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.acl = Acl.decode(reader, reader.uint32());
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          const entry5 = Campaign_SkillsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.skills[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.characters.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Campaign {
    const message = { ...baseCampaign } as Campaign;
    message.skills = {};
    message.characters = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    if (object.acl !== undefined && object.acl !== null) {
      message.acl = Acl.fromJSON(object.acl);
    } else {
      message.acl = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = '';
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = '';
    }
    if (object.skills !== undefined && object.skills !== null) {
      Object.entries(object.skills).forEach(([key, value]) => {
        message.skills[key] = Skill.fromJSON(value);
      });
    }
    if (object.characters !== undefined && object.characters !== null) {
      for (const e of object.characters) {
        message.characters.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Campaign): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.acl !== undefined &&
      (obj.acl = message.acl ? Acl.toJSON(message.acl) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.skills = {};
    if (message.skills) {
      Object.entries(message.skills).forEach(([k, v]) => {
        obj.skills[k] = Skill.toJSON(v);
      });
    }
    if (message.characters) {
      obj.characters = message.characters.map((e) => e);
    } else {
      obj.characters = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Campaign>): Campaign {
    const message = { ...baseCampaign } as Campaign;
    message.skills = {};
    message.characters = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    if (object.acl !== undefined && object.acl !== null) {
      message.acl = Acl.fromPartial(object.acl);
    } else {
      message.acl = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = '';
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = '';
    }
    if (object.skills !== undefined && object.skills !== null) {
      Object.entries(object.skills).forEach(([key, value]) => {
        if (value !== undefined) {
          message.skills[key] = Skill.fromPartial(value);
        }
      });
    }
    if (object.characters !== undefined && object.characters !== null) {
      for (const e of object.characters) {
        message.characters.push(e);
      }
    }
    return message;
  },
};

const baseCampaign_SkillsEntry: object = { key: '' };

export const Campaign_SkillsEntry = {
  encode(
    message: Campaign_SkillsEntry,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Skill.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Campaign_SkillsEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCampaign_SkillsEntry } as Campaign_SkillsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Skill.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Campaign_SkillsEntry {
    const message = { ...baseCampaign_SkillsEntry } as Campaign_SkillsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = '';
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Skill.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: Campaign_SkillsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Skill.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Campaign_SkillsEntry>): Campaign_SkillsEntry {
    const message = { ...baseCampaign_SkillsEntry } as Campaign_SkillsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = '';
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Skill.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

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
