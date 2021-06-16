/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'framesystem';

export interface PoolCost {}

export interface InitiativeCost {}

export interface DamageCost {}

export interface DepletionCost {}

export interface WoundCost {}

export interface Cost {
  pool: PoolCost | undefined;
  initiative: InitiativeCost | undefined;
  damage: DamageCost | undefined;
  depletion: DepletionCost | undefined;
  wound: WoundCost | undefined;
  type: Cost_CostType;
}

export enum Cost_CostType {
  UNKNOWN = 0,
  POOL = 1,
  INITIATIVE = 2,
  DAMAGE = 3,
  DEPLETION = 4,
  WOUND = 5,
  UNRECOGNIZED = -1,
}

export function cost_CostTypeFromJSON(object: any): Cost_CostType {
  switch (object) {
    case 0:
    case 'UNKNOWN':
      return Cost_CostType.UNKNOWN;
    case 1:
    case 'POOL':
      return Cost_CostType.POOL;
    case 2:
    case 'INITIATIVE':
      return Cost_CostType.INITIATIVE;
    case 3:
    case 'DAMAGE':
      return Cost_CostType.DAMAGE;
    case 4:
    case 'DEPLETION':
      return Cost_CostType.DEPLETION;
    case 5:
    case 'WOUND':
      return Cost_CostType.WOUND;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Cost_CostType.UNRECOGNIZED;
  }
}

export function cost_CostTypeToJSON(object: Cost_CostType): string {
  switch (object) {
    case Cost_CostType.UNKNOWN:
      return 'UNKNOWN';
    case Cost_CostType.POOL:
      return 'POOL';
    case Cost_CostType.INITIATIVE:
      return 'INITIATIVE';
    case Cost_CostType.DAMAGE:
      return 'DAMAGE';
    case Cost_CostType.DEPLETION:
      return 'DEPLETION';
    case Cost_CostType.WOUND:
      return 'WOUND';
    default:
      return 'UNKNOWN';
  }
}

export interface Effect {}

export interface Ability {
  id: string;
  name: string;
  description: string;
  cost: Cost[];
  effect: Effect[];
}

const basePoolCost: object = {};

export const PoolCost = {
  encode(_: PoolCost, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PoolCost {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePoolCost } as PoolCost;
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

  fromJSON(_: any): PoolCost {
    const message = { ...basePoolCost } as PoolCost;
    return message;
  },

  toJSON(_: PoolCost): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<PoolCost>): PoolCost {
    const message = { ...basePoolCost } as PoolCost;
    return message;
  },
};

const baseInitiativeCost: object = {};

export const InitiativeCost = {
  encode(_: InitiativeCost, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): InitiativeCost {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInitiativeCost } as InitiativeCost;
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

  fromJSON(_: any): InitiativeCost {
    const message = { ...baseInitiativeCost } as InitiativeCost;
    return message;
  },

  toJSON(_: InitiativeCost): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<InitiativeCost>): InitiativeCost {
    const message = { ...baseInitiativeCost } as InitiativeCost;
    return message;
  },
};

const baseDamageCost: object = {};

export const DamageCost = {
  encode(_: DamageCost, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DamageCost {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDamageCost } as DamageCost;
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

  fromJSON(_: any): DamageCost {
    const message = { ...baseDamageCost } as DamageCost;
    return message;
  },

  toJSON(_: DamageCost): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<DamageCost>): DamageCost {
    const message = { ...baseDamageCost } as DamageCost;
    return message;
  },
};

const baseDepletionCost: object = {};

export const DepletionCost = {
  encode(_: DepletionCost, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DepletionCost {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDepletionCost } as DepletionCost;
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

  fromJSON(_: any): DepletionCost {
    const message = { ...baseDepletionCost } as DepletionCost;
    return message;
  },

  toJSON(_: DepletionCost): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<DepletionCost>): DepletionCost {
    const message = { ...baseDepletionCost } as DepletionCost;
    return message;
  },
};

const baseWoundCost: object = {};

export const WoundCost = {
  encode(_: WoundCost, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WoundCost {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWoundCost } as WoundCost;
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

  fromJSON(_: any): WoundCost {
    const message = { ...baseWoundCost } as WoundCost;
    return message;
  },

  toJSON(_: WoundCost): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<WoundCost>): WoundCost {
    const message = { ...baseWoundCost } as WoundCost;
    return message;
  },
};

const baseCost: object = { type: 0 };

export const Cost = {
  encode(message: Cost, writer: Writer = Writer.create()): Writer {
    if (message.pool !== undefined) {
      PoolCost.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    if (message.initiative !== undefined) {
      InitiativeCost.encode(
        message.initiative,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.damage !== undefined) {
      DamageCost.encode(message.damage, writer.uint32(26).fork()).ldelim();
    }
    if (message.depletion !== undefined) {
      DepletionCost.encode(
        message.depletion,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.wound !== undefined) {
      WoundCost.encode(message.wound, writer.uint32(42).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(48).int32(message.type);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Cost {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCost } as Cost;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = PoolCost.decode(reader, reader.uint32());
          break;
        case 2:
          message.initiative = InitiativeCost.decode(reader, reader.uint32());
          break;
        case 3:
          message.damage = DamageCost.decode(reader, reader.uint32());
          break;
        case 4:
          message.depletion = DepletionCost.decode(reader, reader.uint32());
          break;
        case 5:
          message.wound = WoundCost.decode(reader, reader.uint32());
          break;
        case 6:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Cost {
    const message = { ...baseCost } as Cost;
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = PoolCost.fromJSON(object.pool);
    } else {
      message.pool = undefined;
    }
    if (object.initiative !== undefined && object.initiative !== null) {
      message.initiative = InitiativeCost.fromJSON(object.initiative);
    } else {
      message.initiative = undefined;
    }
    if (object.damage !== undefined && object.damage !== null) {
      message.damage = DamageCost.fromJSON(object.damage);
    } else {
      message.damage = undefined;
    }
    if (object.depletion !== undefined && object.depletion !== null) {
      message.depletion = DepletionCost.fromJSON(object.depletion);
    } else {
      message.depletion = undefined;
    }
    if (object.wound !== undefined && object.wound !== null) {
      message.wound = WoundCost.fromJSON(object.wound);
    } else {
      message.wound = undefined;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = cost_CostTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    return message;
  },

  toJSON(message: Cost): unknown {
    const obj: any = {};
    message.pool !== undefined &&
      (obj.pool = message.pool ? PoolCost.toJSON(message.pool) : undefined);
    message.initiative !== undefined &&
      (obj.initiative = message.initiative
        ? InitiativeCost.toJSON(message.initiative)
        : undefined);
    message.damage !== undefined &&
      (obj.damage = message.damage
        ? DamageCost.toJSON(message.damage)
        : undefined);
    message.depletion !== undefined &&
      (obj.depletion = message.depletion
        ? DepletionCost.toJSON(message.depletion)
        : undefined);
    message.wound !== undefined &&
      (obj.wound = message.wound ? WoundCost.toJSON(message.wound) : undefined);
    message.type !== undefined &&
      (obj.type = cost_CostTypeToJSON(message.type));
    return obj;
  },

  fromPartial(object: DeepPartial<Cost>): Cost {
    const message = { ...baseCost } as Cost;
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = PoolCost.fromPartial(object.pool);
    } else {
      message.pool = undefined;
    }
    if (object.initiative !== undefined && object.initiative !== null) {
      message.initiative = InitiativeCost.fromPartial(object.initiative);
    } else {
      message.initiative = undefined;
    }
    if (object.damage !== undefined && object.damage !== null) {
      message.damage = DamageCost.fromPartial(object.damage);
    } else {
      message.damage = undefined;
    }
    if (object.depletion !== undefined && object.depletion !== null) {
      message.depletion = DepletionCost.fromPartial(object.depletion);
    } else {
      message.depletion = undefined;
    }
    if (object.wound !== undefined && object.wound !== null) {
      message.wound = WoundCost.fromPartial(object.wound);
    } else {
      message.wound = undefined;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    return message;
  },
};

const baseEffect: object = {};

export const Effect = {
  encode(_: Effect, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Effect {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEffect } as Effect;
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

  fromJSON(_: any): Effect {
    const message = { ...baseEffect } as Effect;
    return message;
  },

  toJSON(_: Effect): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<Effect>): Effect {
    const message = { ...baseEffect } as Effect;
    return message;
  },
};

const baseAbility: object = { id: '', name: '', description: '' };

export const Ability = {
  encode(message: Ability, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== '') {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.cost) {
      Cost.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.effect) {
      Effect.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Ability {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAbility } as Ability;
    message.cost = [];
    message.effect = [];
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
          message.cost.push(Cost.decode(reader, reader.uint32()));
          break;
        case 5:
          message.effect.push(Effect.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Ability {
    const message = { ...baseAbility } as Ability;
    message.cost = [];
    message.effect = [];
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
    if (object.cost !== undefined && object.cost !== null) {
      for (const e of object.cost) {
        message.cost.push(Cost.fromJSON(e));
      }
    }
    if (object.effect !== undefined && object.effect !== null) {
      for (const e of object.effect) {
        message.effect.push(Effect.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Ability): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.cost) {
      obj.cost = message.cost.map((e) => (e ? Cost.toJSON(e) : undefined));
    } else {
      obj.cost = [];
    }
    if (message.effect) {
      obj.effect = message.effect.map((e) =>
        e ? Effect.toJSON(e) : undefined,
      );
    } else {
      obj.effect = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Ability>): Ability {
    const message = { ...baseAbility } as Ability;
    message.cost = [];
    message.effect = [];
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
    if (object.cost !== undefined && object.cost !== null) {
      for (const e of object.cost) {
        message.cost.push(Cost.fromPartial(e));
      }
    }
    if (object.effect !== undefined && object.effect !== null) {
      for (const e of object.effect) {
        message.effect.push(Effect.fromPartial(e));
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
