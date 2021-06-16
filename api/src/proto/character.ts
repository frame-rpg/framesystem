/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { Acl } from './acl';
import { Attribute, AttributeStatus } from './attribute';
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
  status: PlayerStatus | undefined;
  skills: Skill[];
}

export interface PlayerStatus {
  might: AttributeStatus | undefined;
  speed: AttributeStatus | undefined;
  conviction: AttributeStatus | undefined;
  focus: AttributeStatus | undefined;
  health: AttributeStatus | undefined;
  initiative: number;
}

export interface NonplayerCharacter {
  id: string;
  acl: Acl | undefined;
  name: string;
  description: string;
  attack: number;
  defend: number;
  health: number;
  armor: number;
  initiative: number;
}

export interface NonplayerStatus {
  initiative: number;
  health: number;
}

export interface Companion {
  id: string;
  acl: Acl | undefined;
  name: string;
  description: string;
  loyalty: Attribute | undefined;
  health: Attribute | undefined;
  attack: number;
  defend: number;
  initiative: number;
  armor: number;
  status: CompanionStatus | undefined;
  skills: Skill[];
}

export interface CompanionStatus {
  loyalty: AttributeStatus | undefined;
  health: AttributeStatus | undefined;
  initiative: number;
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
    if (message.status !== undefined) {
      PlayerStatus.encode(message.status, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.skills) {
      Skill.encode(v!, writer.uint32(90).fork()).ldelim();
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
          message.status = PlayerStatus.decode(reader, reader.uint32());
          break;
        case 11:
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
    if (object.status !== undefined && object.status !== null) {
      message.status = PlayerStatus.fromJSON(object.status);
    } else {
      message.status = undefined;
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
    message.status !== undefined &&
      (obj.status = message.status
        ? PlayerStatus.toJSON(message.status)
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
    if (object.status !== undefined && object.status !== null) {
      message.status = PlayerStatus.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    if (object.skills !== undefined && object.skills !== null) {
      for (const e of object.skills) {
        message.skills.push(Skill.fromPartial(e));
      }
    }
    return message;
  },
};

const basePlayerStatus: object = { initiative: 0 };

export const PlayerStatus = {
  encode(message: PlayerStatus, writer: Writer = Writer.create()): Writer {
    if (message.might !== undefined) {
      AttributeStatus.encode(message.might, writer.uint32(10).fork()).ldelim();
    }
    if (message.speed !== undefined) {
      AttributeStatus.encode(message.speed, writer.uint32(18).fork()).ldelim();
    }
    if (message.conviction !== undefined) {
      AttributeStatus.encode(
        message.conviction,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.focus !== undefined) {
      AttributeStatus.encode(message.focus, writer.uint32(34).fork()).ldelim();
    }
    if (message.health !== undefined) {
      AttributeStatus.encode(message.health, writer.uint32(42).fork()).ldelim();
    }
    if (message.initiative !== 0) {
      writer.uint32(48).int32(message.initiative);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PlayerStatus {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlayerStatus } as PlayerStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.might = AttributeStatus.decode(reader, reader.uint32());
          break;
        case 2:
          message.speed = AttributeStatus.decode(reader, reader.uint32());
          break;
        case 3:
          message.conviction = AttributeStatus.decode(reader, reader.uint32());
          break;
        case 4:
          message.focus = AttributeStatus.decode(reader, reader.uint32());
          break;
        case 5:
          message.health = AttributeStatus.decode(reader, reader.uint32());
          break;
        case 6:
          message.initiative = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayerStatus {
    const message = { ...basePlayerStatus } as PlayerStatus;
    if (object.might !== undefined && object.might !== null) {
      message.might = AttributeStatus.fromJSON(object.might);
    } else {
      message.might = undefined;
    }
    if (object.speed !== undefined && object.speed !== null) {
      message.speed = AttributeStatus.fromJSON(object.speed);
    } else {
      message.speed = undefined;
    }
    if (object.conviction !== undefined && object.conviction !== null) {
      message.conviction = AttributeStatus.fromJSON(object.conviction);
    } else {
      message.conviction = undefined;
    }
    if (object.focus !== undefined && object.focus !== null) {
      message.focus = AttributeStatus.fromJSON(object.focus);
    } else {
      message.focus = undefined;
    }
    if (object.health !== undefined && object.health !== null) {
      message.health = AttributeStatus.fromJSON(object.health);
    } else {
      message.health = undefined;
    }
    if (object.initiative !== undefined && object.initiative !== null) {
      message.initiative = Number(object.initiative);
    } else {
      message.initiative = 0;
    }
    return message;
  },

  toJSON(message: PlayerStatus): unknown {
    const obj: any = {};
    message.might !== undefined &&
      (obj.might = message.might
        ? AttributeStatus.toJSON(message.might)
        : undefined);
    message.speed !== undefined &&
      (obj.speed = message.speed
        ? AttributeStatus.toJSON(message.speed)
        : undefined);
    message.conviction !== undefined &&
      (obj.conviction = message.conviction
        ? AttributeStatus.toJSON(message.conviction)
        : undefined);
    message.focus !== undefined &&
      (obj.focus = message.focus
        ? AttributeStatus.toJSON(message.focus)
        : undefined);
    message.health !== undefined &&
      (obj.health = message.health
        ? AttributeStatus.toJSON(message.health)
        : undefined);
    message.initiative !== undefined && (obj.initiative = message.initiative);
    return obj;
  },

  fromPartial(object: DeepPartial<PlayerStatus>): PlayerStatus {
    const message = { ...basePlayerStatus } as PlayerStatus;
    if (object.might !== undefined && object.might !== null) {
      message.might = AttributeStatus.fromPartial(object.might);
    } else {
      message.might = undefined;
    }
    if (object.speed !== undefined && object.speed !== null) {
      message.speed = AttributeStatus.fromPartial(object.speed);
    } else {
      message.speed = undefined;
    }
    if (object.conviction !== undefined && object.conviction !== null) {
      message.conviction = AttributeStatus.fromPartial(object.conviction);
    } else {
      message.conviction = undefined;
    }
    if (object.focus !== undefined && object.focus !== null) {
      message.focus = AttributeStatus.fromPartial(object.focus);
    } else {
      message.focus = undefined;
    }
    if (object.health !== undefined && object.health !== null) {
      message.health = AttributeStatus.fromPartial(object.health);
    } else {
      message.health = undefined;
    }
    if (object.initiative !== undefined && object.initiative !== null) {
      message.initiative = object.initiative;
    } else {
      message.initiative = 0;
    }
    return message;
  },
};

const baseNonplayerCharacter: object = {
  id: '',
  name: '',
  description: '',
  attack: 0,
  defend: 0,
  health: 0,
  armor: 0,
  initiative: 0,
};

export const NonplayerCharacter = {
  encode(
    message: NonplayerCharacter,
    writer: Writer = Writer.create(),
  ): Writer {
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
    if (message.attack !== 0) {
      writer.uint32(40).int32(message.attack);
    }
    if (message.defend !== 0) {
      writer.uint32(48).int32(message.defend);
    }
    if (message.health !== 0) {
      writer.uint32(56).int32(message.health);
    }
    if (message.armor !== 0) {
      writer.uint32(64).int32(message.armor);
    }
    if (message.initiative !== 0) {
      writer.uint32(72).int32(message.initiative);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NonplayerCharacter {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNonplayerCharacter } as NonplayerCharacter;
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
          message.attack = reader.int32();
          break;
        case 6:
          message.defend = reader.int32();
          break;
        case 7:
          message.health = reader.int32();
          break;
        case 8:
          message.armor = reader.int32();
          break;
        case 9:
          message.initiative = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NonplayerCharacter {
    const message = { ...baseNonplayerCharacter } as NonplayerCharacter;
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
    if (object.attack !== undefined && object.attack !== null) {
      message.attack = Number(object.attack);
    } else {
      message.attack = 0;
    }
    if (object.defend !== undefined && object.defend !== null) {
      message.defend = Number(object.defend);
    } else {
      message.defend = 0;
    }
    if (object.health !== undefined && object.health !== null) {
      message.health = Number(object.health);
    } else {
      message.health = 0;
    }
    if (object.armor !== undefined && object.armor !== null) {
      message.armor = Number(object.armor);
    } else {
      message.armor = 0;
    }
    if (object.initiative !== undefined && object.initiative !== null) {
      message.initiative = Number(object.initiative);
    } else {
      message.initiative = 0;
    }
    return message;
  },

  toJSON(message: NonplayerCharacter): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.acl !== undefined &&
      (obj.acl = message.acl ? Acl.toJSON(message.acl) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.attack !== undefined && (obj.attack = message.attack);
    message.defend !== undefined && (obj.defend = message.defend);
    message.health !== undefined && (obj.health = message.health);
    message.armor !== undefined && (obj.armor = message.armor);
    message.initiative !== undefined && (obj.initiative = message.initiative);
    return obj;
  },

  fromPartial(object: DeepPartial<NonplayerCharacter>): NonplayerCharacter {
    const message = { ...baseNonplayerCharacter } as NonplayerCharacter;
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
    if (object.attack !== undefined && object.attack !== null) {
      message.attack = object.attack;
    } else {
      message.attack = 0;
    }
    if (object.defend !== undefined && object.defend !== null) {
      message.defend = object.defend;
    } else {
      message.defend = 0;
    }
    if (object.health !== undefined && object.health !== null) {
      message.health = object.health;
    } else {
      message.health = 0;
    }
    if (object.armor !== undefined && object.armor !== null) {
      message.armor = object.armor;
    } else {
      message.armor = 0;
    }
    if (object.initiative !== undefined && object.initiative !== null) {
      message.initiative = object.initiative;
    } else {
      message.initiative = 0;
    }
    return message;
  },
};

const baseNonplayerStatus: object = { initiative: 0, health: 0 };

export const NonplayerStatus = {
  encode(message: NonplayerStatus, writer: Writer = Writer.create()): Writer {
    if (message.initiative !== 0) {
      writer.uint32(24).int32(message.initiative);
    }
    if (message.health !== 0) {
      writer.uint32(16).int32(message.health);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NonplayerStatus {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNonplayerStatus } as NonplayerStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.initiative = reader.int32();
          break;
        case 2:
          message.health = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NonplayerStatus {
    const message = { ...baseNonplayerStatus } as NonplayerStatus;
    if (object.initiative !== undefined && object.initiative !== null) {
      message.initiative = Number(object.initiative);
    } else {
      message.initiative = 0;
    }
    if (object.health !== undefined && object.health !== null) {
      message.health = Number(object.health);
    } else {
      message.health = 0;
    }
    return message;
  },

  toJSON(message: NonplayerStatus): unknown {
    const obj: any = {};
    message.initiative !== undefined && (obj.initiative = message.initiative);
    message.health !== undefined && (obj.health = message.health);
    return obj;
  },

  fromPartial(object: DeepPartial<NonplayerStatus>): NonplayerStatus {
    const message = { ...baseNonplayerStatus } as NonplayerStatus;
    if (object.initiative !== undefined && object.initiative !== null) {
      message.initiative = object.initiative;
    } else {
      message.initiative = 0;
    }
    if (object.health !== undefined && object.health !== null) {
      message.health = object.health;
    } else {
      message.health = 0;
    }
    return message;
  },
};

const baseCompanion: object = {
  id: '',
  name: '',
  description: '',
  attack: 0,
  defend: 0,
  initiative: 0,
  armor: 0,
};

export const Companion = {
  encode(message: Companion, writer: Writer = Writer.create()): Writer {
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
    if (message.loyalty !== undefined) {
      Attribute.encode(message.loyalty, writer.uint32(42).fork()).ldelim();
    }
    if (message.health !== undefined) {
      Attribute.encode(message.health, writer.uint32(50).fork()).ldelim();
    }
    if (message.attack !== 0) {
      writer.uint32(56).int32(message.attack);
    }
    if (message.defend !== 0) {
      writer.uint32(64).int32(message.defend);
    }
    if (message.initiative !== 0) {
      writer.uint32(72).int32(message.initiative);
    }
    if (message.armor !== 0) {
      writer.uint32(80).int32(message.armor);
    }
    if (message.status !== undefined) {
      CompanionStatus.encode(message.status, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.skills) {
      Skill.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Companion {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCompanion } as Companion;
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
          message.loyalty = Attribute.decode(reader, reader.uint32());
          break;
        case 6:
          message.health = Attribute.decode(reader, reader.uint32());
          break;
        case 7:
          message.attack = reader.int32();
          break;
        case 8:
          message.defend = reader.int32();
          break;
        case 9:
          message.initiative = reader.int32();
          break;
        case 10:
          message.armor = reader.int32();
          break;
        case 11:
          message.status = CompanionStatus.decode(reader, reader.uint32());
          break;
        case 12:
          message.skills.push(Skill.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Companion {
    const message = { ...baseCompanion } as Companion;
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
    if (object.loyalty !== undefined && object.loyalty !== null) {
      message.loyalty = Attribute.fromJSON(object.loyalty);
    } else {
      message.loyalty = undefined;
    }
    if (object.health !== undefined && object.health !== null) {
      message.health = Attribute.fromJSON(object.health);
    } else {
      message.health = undefined;
    }
    if (object.attack !== undefined && object.attack !== null) {
      message.attack = Number(object.attack);
    } else {
      message.attack = 0;
    }
    if (object.defend !== undefined && object.defend !== null) {
      message.defend = Number(object.defend);
    } else {
      message.defend = 0;
    }
    if (object.initiative !== undefined && object.initiative !== null) {
      message.initiative = Number(object.initiative);
    } else {
      message.initiative = 0;
    }
    if (object.armor !== undefined && object.armor !== null) {
      message.armor = Number(object.armor);
    } else {
      message.armor = 0;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = CompanionStatus.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    if (object.skills !== undefined && object.skills !== null) {
      for (const e of object.skills) {
        message.skills.push(Skill.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Companion): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.acl !== undefined &&
      (obj.acl = message.acl ? Acl.toJSON(message.acl) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.loyalty !== undefined &&
      (obj.loyalty = message.loyalty
        ? Attribute.toJSON(message.loyalty)
        : undefined);
    message.health !== undefined &&
      (obj.health = message.health
        ? Attribute.toJSON(message.health)
        : undefined);
    message.attack !== undefined && (obj.attack = message.attack);
    message.defend !== undefined && (obj.defend = message.defend);
    message.initiative !== undefined && (obj.initiative = message.initiative);
    message.armor !== undefined && (obj.armor = message.armor);
    message.status !== undefined &&
      (obj.status = message.status
        ? CompanionStatus.toJSON(message.status)
        : undefined);
    if (message.skills) {
      obj.skills = message.skills.map((e) => (e ? Skill.toJSON(e) : undefined));
    } else {
      obj.skills = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Companion>): Companion {
    const message = { ...baseCompanion } as Companion;
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
    if (object.loyalty !== undefined && object.loyalty !== null) {
      message.loyalty = Attribute.fromPartial(object.loyalty);
    } else {
      message.loyalty = undefined;
    }
    if (object.health !== undefined && object.health !== null) {
      message.health = Attribute.fromPartial(object.health);
    } else {
      message.health = undefined;
    }
    if (object.attack !== undefined && object.attack !== null) {
      message.attack = object.attack;
    } else {
      message.attack = 0;
    }
    if (object.defend !== undefined && object.defend !== null) {
      message.defend = object.defend;
    } else {
      message.defend = 0;
    }
    if (object.initiative !== undefined && object.initiative !== null) {
      message.initiative = object.initiative;
    } else {
      message.initiative = 0;
    }
    if (object.armor !== undefined && object.armor !== null) {
      message.armor = object.armor;
    } else {
      message.armor = 0;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = CompanionStatus.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    if (object.skills !== undefined && object.skills !== null) {
      for (const e of object.skills) {
        message.skills.push(Skill.fromPartial(e));
      }
    }
    return message;
  },
};

const baseCompanionStatus: object = { initiative: 0 };

export const CompanionStatus = {
  encode(message: CompanionStatus, writer: Writer = Writer.create()): Writer {
    if (message.loyalty !== undefined) {
      AttributeStatus.encode(
        message.loyalty,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.health !== undefined) {
      AttributeStatus.encode(message.health, writer.uint32(18).fork()).ldelim();
    }
    if (message.initiative !== 0) {
      writer.uint32(24).int32(message.initiative);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CompanionStatus {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCompanionStatus } as CompanionStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loyalty = AttributeStatus.decode(reader, reader.uint32());
          break;
        case 2:
          message.health = AttributeStatus.decode(reader, reader.uint32());
          break;
        case 3:
          message.initiative = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompanionStatus {
    const message = { ...baseCompanionStatus } as CompanionStatus;
    if (object.loyalty !== undefined && object.loyalty !== null) {
      message.loyalty = AttributeStatus.fromJSON(object.loyalty);
    } else {
      message.loyalty = undefined;
    }
    if (object.health !== undefined && object.health !== null) {
      message.health = AttributeStatus.fromJSON(object.health);
    } else {
      message.health = undefined;
    }
    if (object.initiative !== undefined && object.initiative !== null) {
      message.initiative = Number(object.initiative);
    } else {
      message.initiative = 0;
    }
    return message;
  },

  toJSON(message: CompanionStatus): unknown {
    const obj: any = {};
    message.loyalty !== undefined &&
      (obj.loyalty = message.loyalty
        ? AttributeStatus.toJSON(message.loyalty)
        : undefined);
    message.health !== undefined &&
      (obj.health = message.health
        ? AttributeStatus.toJSON(message.health)
        : undefined);
    message.initiative !== undefined && (obj.initiative = message.initiative);
    return obj;
  },

  fromPartial(object: DeepPartial<CompanionStatus>): CompanionStatus {
    const message = { ...baseCompanionStatus } as CompanionStatus;
    if (object.loyalty !== undefined && object.loyalty !== null) {
      message.loyalty = AttributeStatus.fromPartial(object.loyalty);
    } else {
      message.loyalty = undefined;
    }
    if (object.health !== undefined && object.health !== null) {
      message.health = AttributeStatus.fromPartial(object.health);
    } else {
      message.health = undefined;
    }
    if (object.initiative !== undefined && object.initiative !== null) {
      message.initiative = object.initiative;
    } else {
      message.initiative = 0;
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
