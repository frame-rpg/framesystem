/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'framesystem';

export enum SkillLevel {
  LEVEL_UNKNOWN = 0,
  LEVEL_INEPT = 1,
  LEVEL_UNSKILLED = 2,
  LEVEL_PROFICIENT = 3,
  LEVEL_TRAINED = 4,
  LEVEL_EXPERT = 5,
}

export function skillLevelFromJSON(object: any): SkillLevel {
  switch (object) {
    case 0:
    case 'LEVEL_UNKNOWN':
      return SkillLevel.LEVEL_UNKNOWN;
    case 1:
    case 'LEVEL_INEPT':
      return SkillLevel.LEVEL_INEPT;
    case 2:
    case 'LEVEL_UNSKILLED':
      return SkillLevel.LEVEL_UNSKILLED;
    case 3:
    case 'LEVEL_PROFICIENT':
      return SkillLevel.LEVEL_PROFICIENT;
    case 4:
    case 'LEVEL_TRAINED':
      return SkillLevel.LEVEL_TRAINED;
    case 5:
    case 'LEVEL_EXPERT':
      return SkillLevel.LEVEL_EXPERT;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum SkillLevel',
      );
  }
}

export function skillLevelToJSON(object: SkillLevel): string {
  switch (object) {
    case SkillLevel.LEVEL_UNKNOWN:
      return 'LEVEL_UNKNOWN';
    case SkillLevel.LEVEL_INEPT:
      return 'LEVEL_INEPT';
    case SkillLevel.LEVEL_UNSKILLED:
      return 'LEVEL_UNSKILLED';
    case SkillLevel.LEVEL_PROFICIENT:
      return 'LEVEL_PROFICIENT';
    case SkillLevel.LEVEL_TRAINED:
      return 'LEVEL_TRAINED';
    case SkillLevel.LEVEL_EXPERT:
      return 'LEVEL_EXPERT';
    default:
      return 'UNKNOWN';
  }
}

export enum SkillType {
  SKILLTYPE_UNKNOWN = 0,
  SKILLTYPE_DEFENSE = 1,
  SKILLTYPE_ATTACK = 2,
  SKILLTYPE_INITIATIVE = 3,
  SKILLTYPE_NONCOMBAT = 4,
}

export function skillTypeFromJSON(object: any): SkillType {
  switch (object) {
    case 0:
    case 'SKILLTYPE_UNKNOWN':
      return SkillType.SKILLTYPE_UNKNOWN;
    case 1:
    case 'SKILLTYPE_DEFENSE':
      return SkillType.SKILLTYPE_DEFENSE;
    case 2:
    case 'SKILLTYPE_ATTACK':
      return SkillType.SKILLTYPE_ATTACK;
    case 3:
    case 'SKILLTYPE_INITIATIVE':
      return SkillType.SKILLTYPE_INITIATIVE;
    case 4:
    case 'SKILLTYPE_NONCOMBAT':
      return SkillType.SKILLTYPE_NONCOMBAT;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum SkillType',
      );
  }
}

export function skillTypeToJSON(object: SkillType): string {
  switch (object) {
    case SkillType.SKILLTYPE_UNKNOWN:
      return 'SKILLTYPE_UNKNOWN';
    case SkillType.SKILLTYPE_DEFENSE:
      return 'SKILLTYPE_DEFENSE';
    case SkillType.SKILLTYPE_ATTACK:
      return 'SKILLTYPE_ATTACK';
    case SkillType.SKILLTYPE_INITIATIVE:
      return 'SKILLTYPE_INITIATIVE';
    case SkillType.SKILLTYPE_NONCOMBAT:
      return 'SKILLTYPE_NONCOMBAT';
    default:
      return 'UNKNOWN';
  }
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  type: SkillType;
  category: string;
  tag: string[];
  attributes: string[];
}

const baseSkill: object = {
  id: '',
  name: '',
  description: '',
  type: 0,
  category: '',
  tag: '',
  attributes: '',
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
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    if (message.category !== '') {
      writer.uint32(42).string(message.category);
    }
    for (const v of message.tag) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.attributes) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Skill {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSkill } as Skill;
    message.tag = [];
    message.attributes = [];
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
          message.type = reader.int32() as any;
          break;
        case 5:
          message.category = reader.string();
          break;
        case 6:
          message.tag.push(reader.string());
          break;
        case 7:
          message.attributes.push(reader.string());
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
    message.tag = [];
    message.attributes = [];
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
    if (object.type !== undefined && object.type !== null) {
      message.type = skillTypeFromJSON(object.type);
    } else {
      message.type = 0;
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
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(String(e));
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
    message.type !== undefined && (obj.type = skillTypeToJSON(message.type));
    message.category !== undefined && (obj.category = message.category);
    if (message.tag) {
      obj.tag = message.tag.map((e) => e);
    } else {
      obj.tag = [];
    }
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e);
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Skill>): Skill {
    const message = { ...baseSkill } as Skill;
    message.tag = [];
    message.attributes = [];
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
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
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
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(e);
      }
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
})();

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
