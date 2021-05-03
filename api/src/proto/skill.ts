/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'framesystem';

export enum Level {
  UNKNOWN = 0,
  INEPT = 1,
  UNSKILLED = 2,
  PROFICIENT = 3,
  TRAINED = 4,
  EXPERT = 5,
  UNRECOGNIZED = -1,
}

export function levelFromJSON(object: any): Level {
  switch (object) {
    case 0:
    case 'UNKNOWN':
      return Level.UNKNOWN;
    case 1:
    case 'INEPT':
      return Level.INEPT;
    case 2:
    case 'UNSKILLED':
      return Level.UNSKILLED;
    case 3:
    case 'PROFICIENT':
      return Level.PROFICIENT;
    case 4:
    case 'TRAINED':
      return Level.TRAINED;
    case 5:
    case 'EXPERT':
      return Level.EXPERT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Level.UNRECOGNIZED;
  }
}

export function levelToJSON(object: Level): string {
  switch (object) {
    case Level.UNKNOWN:
      return 'UNKNOWN';
    case Level.INEPT:
      return 'INEPT';
    case Level.UNSKILLED:
      return 'UNSKILLED';
    case Level.PROFICIENT:
      return 'PROFICIENT';
    case Level.TRAINED:
      return 'TRAINED';
    case Level.EXPERT:
      return 'EXPERT';
    default:
      return 'UNKNOWN';
  }
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  attributes: string[];
  type: string;
  category: string;
  tag: string[];
}

const baseSkill: object = {
  id: '',
  name: '',
  description: '',
  attributes: '',
  type: '',
  category: '',
  tag: '',
};

export const Skill = {
  encode(message: Skill, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== '') {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.attributes) {
      writer.uint32(34).string(v!);
    }
    if (message.type !== '') {
      writer.uint32(42).string(message.type);
    }
    if (message.category !== '') {
      writer.uint32(50).string(message.category);
    }
    for (const v of message.tag) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Skill {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSkill } as Skill;
    message.attributes = [];
    message.tag = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.attributes.push(reader.string());
          break;
        case 5:
          message.type = reader.string();
          break;
        case 6:
          message.category = reader.string();
          break;
        case 7:
          message.tag.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Skill {
    const message = { ...baseSkill } as Skill;
    message.attributes = [];
    message.tag = [];
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
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = '';
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(String(e));
      }
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = '';
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = String(object.category);
    } else {
      message.category = '';
    }
    if (object.tag !== undefined && object.tag !== null) {
      for (const e of object.tag) {
        message.tag.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Skill): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e);
    } else {
      obj.attributes = [];
    }
    message.type !== undefined && (obj.type = message.type);
    message.category !== undefined && (obj.category = message.category);
    if (message.tag) {
      obj.tag = message.tag.map((e) => e);
    } else {
      obj.tag = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Skill>): Skill {
    const message = { ...baseSkill } as Skill;
    message.attributes = [];
    message.tag = [];
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
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = '';
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(e);
      }
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = '';
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = '';
    }
    if (object.tag !== undefined && object.tag !== null) {
      for (const e of object.tag) {
        message.tag.push(e);
      }
    }
    return message;
  },
};

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
