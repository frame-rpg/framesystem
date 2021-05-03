/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { Acl } from './acl';
import { Attribute } from './attribute';
import { Skill } from './skill';

export const protobufPackage = 'framesystem';

export interface PlayerCharacter {
  id: string;
  acl: Acl | undefined;
  name: string;
  description: string;
  might: Attribute | undefined;
  speed: Attribute | undefined;
  conviction: Attribute | undefined;
  focus: Attribute | undefined;
  health: Attribute | undefined;
  skills: Skill[];
}

const basePlayerCharacter: object = { id: '', name: '', description: '' };

export const PlayerCharacter = {
  encode(message: PlayerCharacter, writer: Writer = Writer.create()): Writer {
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
    if (message.might !== undefined) {
      Attribute.encode(message.might, writer.uint32(42).fork()).ldelim();
    }
    if (message.speed !== undefined) {
      Attribute.encode(message.speed, writer.uint32(50).fork()).ldelim();
    }
    if (message.conviction !== undefined) {
      Attribute.encode(message.conviction, writer.uint32(58).fork()).ldelim();
    }
    if (message.focus !== undefined) {
      Attribute.encode(message.focus, writer.uint32(66).fork()).ldelim();
    }
    if (message.health !== undefined) {
      Attribute.encode(message.health, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.skills) {
      Skill.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PlayerCharacter {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlayerCharacter } as PlayerCharacter;
    message.skills = [];
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
          message.might = Attribute.decode(reader, reader.uint32());
          break;
        case 6:
          message.speed = Attribute.decode(reader, reader.uint32());
          break;
        case 7:
          message.conviction = Attribute.decode(reader, reader.uint32());
          break;
        case 8:
          message.focus = Attribute.decode(reader, reader.uint32());
          break;
        case 9:
          message.health = Attribute.decode(reader, reader.uint32());
          break;
        case 10:
          message.skills.push(Skill.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayerCharacter {
    const message = { ...basePlayerCharacter } as PlayerCharacter;
    message.skills = [];
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
    if (object.might !== undefined && object.might !== null) {
      message.might = Attribute.fromJSON(object.might);
    } else {
      message.might = undefined;
    }
    if (object.speed !== undefined && object.speed !== null) {
      message.speed = Attribute.fromJSON(object.speed);
    } else {
      message.speed = undefined;
    }
    if (object.conviction !== undefined && object.conviction !== null) {
      message.conviction = Attribute.fromJSON(object.conviction);
    } else {
      message.conviction = undefined;
    }
    if (object.focus !== undefined && object.focus !== null) {
      message.focus = Attribute.fromJSON(object.focus);
    } else {
      message.focus = undefined;
    }
    if (object.health !== undefined && object.health !== null) {
      message.health = Attribute.fromJSON(object.health);
    } else {
      message.health = undefined;
    }
    if (object.skills !== undefined && object.skills !== null) {
      for (const e of object.skills) {
        message.skills.push(Skill.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: PlayerCharacter): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.acl !== undefined &&
      (obj.acl = message.acl ? Acl.toJSON(message.acl) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.might !== undefined &&
      (obj.might = message.might ? Attribute.toJSON(message.might) : undefined);
    message.speed !== undefined &&
      (obj.speed = message.speed ? Attribute.toJSON(message.speed) : undefined);
    message.conviction !== undefined &&
      (obj.conviction = message.conviction
        ? Attribute.toJSON(message.conviction)
        : undefined);
    message.focus !== undefined &&
      (obj.focus = message.focus ? Attribute.toJSON(message.focus) : undefined);
    message.health !== undefined &&
      (obj.health = message.health
        ? Attribute.toJSON(message.health)
        : undefined);
    if (message.skills) {
      obj.skills = message.skills.map((e) => (e ? Skill.toJSON(e) : undefined));
    } else {
      obj.skills = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<PlayerCharacter>): PlayerCharacter {
    const message = { ...basePlayerCharacter } as PlayerCharacter;
    message.skills = [];
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
    if (object.might !== undefined && object.might !== null) {
      message.might = Attribute.fromPartial(object.might);
    } else {
      message.might = undefined;
    }
    if (object.speed !== undefined && object.speed !== null) {
      message.speed = Attribute.fromPartial(object.speed);
    } else {
      message.speed = undefined;
    }
    if (object.conviction !== undefined && object.conviction !== null) {
      message.conviction = Attribute.fromPartial(object.conviction);
    } else {
      message.conviction = undefined;
    }
    if (object.focus !== undefined && object.focus !== null) {
      message.focus = Attribute.fromPartial(object.focus);
    } else {
      message.focus = undefined;
    }
    if (object.health !== undefined && object.health !== null) {
      message.health = Attribute.fromPartial(object.health);
    } else {
      message.health = undefined;
    }
    if (object.skills !== undefined && object.skills !== null) {
      for (const e of object.skills) {
        message.skills.push(Skill.fromPartial(e));
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
