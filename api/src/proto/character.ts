/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { SkillLevel, skillLevelToJSON, skillLevelFromJSON } from './skill';
import { Acl } from './acl';
import { Attribute } from './attribute';
import { Ability } from './ability';

export const protobufPackage = 'framesystem';

export enum CharacterType {
  CHARACTERTYPE_UNKNOWN = 0,
  CHARACTERTYPE_PLAYER = 1,
  CHARACTERTYPE_NONPLAYER = 2,
  CHARACTERTYPE_COMPANION = 3,
}

export function characterTypeFromJSON(object: any): CharacterType {
  switch (object) {
    case 0:
    case 'CHARACTERTYPE_UNKNOWN':
      return CharacterType.CHARACTERTYPE_UNKNOWN;
    case 1:
    case 'CHARACTERTYPE_PLAYER':
      return CharacterType.CHARACTERTYPE_PLAYER;
    case 2:
    case 'CHARACTERTYPE_NONPLAYER':
      return CharacterType.CHARACTERTYPE_NONPLAYER;
    case 3:
    case 'CHARACTERTYPE_COMPANION':
      return CharacterType.CHARACTERTYPE_COMPANION;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum CharacterType',
      );
  }
}

export function characterTypeToJSON(object: CharacterType): string {
  switch (object) {
    case CharacterType.CHARACTERTYPE_UNKNOWN:
      return 'CHARACTERTYPE_UNKNOWN';
    case CharacterType.CHARACTERTYPE_PLAYER:
      return 'CHARACTERTYPE_PLAYER';
    case CharacterType.CHARACTERTYPE_NONPLAYER:
      return 'CHARACTERTYPE_NONPLAYER';
    case CharacterType.CHARACTERTYPE_COMPANION:
      return 'CHARACTERTYPE_COMPANION';
    default:
      return 'UNKNOWN';
  }
}

export interface Character {
  id: string;
  type: CharacterType;
  name: string;
  description: string;
  acl: Acl | undefined;
  attributes: { [key: string]: Attribute };
  skills: { [key: string]: SkillLevel };
  abilities: Ability[];
}

export interface Character_AttributesEntry {
  key: string;
  value: Attribute | undefined;
}

export interface Character_SkillsEntry {
  key: string;
  value: SkillLevel;
}

const baseCharacter: object = { id: '', type: 0, name: '', description: '' };

export const Character = {
  encode(message: Character, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== '') {
      writer.uint32(34).string(message.description);
    }
    if (message.acl !== undefined) {
      Acl.encode(message.acl, writer.uint32(42).fork()).ldelim();
    }
    Object.entries(message.attributes).forEach(([key, value]) => {
      Character_AttributesEntry.encode(
        { key: key as any, value },
        writer.uint32(50).fork(),
      ).ldelim();
    });
    Object.entries(message.skills).forEach(([key, value]) => {
      Character_SkillsEntry.encode(
        { key: key as any, value },
        writer.uint32(58).fork(),
      ).ldelim();
    });
    for (const v of message.abilities) {
      Ability.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Character {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCharacter } as Character;
    message.attributes = {};
    message.skills = {};
    message.abilities = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.acl = Acl.decode(reader, reader.uint32());
          break;
        case 6:
          const entry6 = Character_AttributesEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry6.value !== undefined) {
            message.attributes[entry6.key] = entry6.value;
          }
          break;
        case 7:
          const entry7 = Character_SkillsEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.skills[entry7.key] = entry7.value;
          }
          break;
        case 8:
          message.abilities.push(Ability.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Character {
    const message = { ...baseCharacter } as Character;
    message.attributes = {};
    message.skills = {};
    message.abilities = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = characterTypeFromJSON(object.type);
    } else {
      message.type = 0;
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
    if (object.acl !== undefined && object.acl !== null) {
      message.acl = Acl.fromJSON(object.acl);
    } else {
      message.acl = undefined;
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      Object.entries(object.attributes).forEach(([key, value]) => {
        message.attributes[key] = Attribute.fromJSON(value);
      });
    }
    if (object.skills !== undefined && object.skills !== null) {
      Object.entries(object.skills).forEach(([key, value]) => {
        message.skills[key] = value as number;
      });
    }
    if (object.abilities !== undefined && object.abilities !== null) {
      for (const e of object.abilities) {
        message.abilities.push(Ability.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Character): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined &&
      (obj.type = characterTypeToJSON(message.type));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.acl !== undefined &&
      (obj.acl = message.acl ? Acl.toJSON(message.acl) : undefined);
    obj.attributes = {};
    if (message.attributes) {
      Object.entries(message.attributes).forEach(([k, v]) => {
        obj.attributes[k] = Attribute.toJSON(v);
      });
    }
    obj.skills = {};
    if (message.skills) {
      Object.entries(message.skills).forEach(([k, v]) => {
        obj.skills[k] = skillLevelToJSON(v);
      });
    }
    if (message.abilities) {
      obj.abilities = message.abilities.map((e) =>
        e ? Ability.toJSON(e) : undefined,
      );
    } else {
      obj.abilities = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Character>): Character {
    const message = { ...baseCharacter } as Character;
    message.attributes = {};
    message.skills = {};
    message.abilities = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
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
    if (object.acl !== undefined && object.acl !== null) {
      message.acl = Acl.fromPartial(object.acl);
    } else {
      message.acl = undefined;
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      Object.entries(object.attributes).forEach(([key, value]) => {
        if (value !== undefined) {
          message.attributes[key] = Attribute.fromPartial(value);
        }
      });
    }
    if (object.skills !== undefined && object.skills !== null) {
      Object.entries(object.skills).forEach(([key, value]) => {
        if (value !== undefined) {
          message.skills[key] = value as number;
        }
      });
    }
    if (object.abilities !== undefined && object.abilities !== null) {
      for (const e of object.abilities) {
        message.abilities.push(Ability.fromPartial(e));
      }
    }
    return message;
  },
};

const baseCharacter_AttributesEntry: object = { key: '' };

export const Character_AttributesEntry = {
  encode(
    message: Character_AttributesEntry,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Attribute.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): Character_AttributesEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCharacter_AttributesEntry,
    } as Character_AttributesEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Attribute.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Character_AttributesEntry {
    const message = {
      ...baseCharacter_AttributesEntry,
    } as Character_AttributesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = '';
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Attribute.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: Character_AttributesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Attribute.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<Character_AttributesEntry>,
  ): Character_AttributesEntry {
    const message = {
      ...baseCharacter_AttributesEntry,
    } as Character_AttributesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = '';
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Attribute.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseCharacter_SkillsEntry: object = { key: '', value: 0 };

export const Character_SkillsEntry = {
  encode(
    message: Character_SkillsEntry,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Character_SkillsEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCharacter_SkillsEntry } as Character_SkillsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Character_SkillsEntry {
    const message = { ...baseCharacter_SkillsEntry } as Character_SkillsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = '';
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = skillLevelFromJSON(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: Character_SkillsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = skillLevelToJSON(message.value));
    return obj;
  },

  fromPartial(
    object: DeepPartial<Character_SkillsEntry>,
  ): Character_SkillsEntry {
    const message = { ...baseCharacter_SkillsEntry } as Character_SkillsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = '';
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
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
