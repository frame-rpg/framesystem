/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'framesystem';

export interface Attribute {
  id: string;
  name: string;
  description: string;
  pool: number;
  edge: number;
  current: number;
  wound: boolean;
}

const baseAttribute: object = {
  id: '',
  name: '',
  description: '',
  pool: 0,
  edge: 0,
  current: 0,
  wound: false,
};

export const Attribute = {
  encode(message: Attribute, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== '') {
      writer.uint32(26).string(message.description);
    }
    if (message.pool !== 0) {
      writer.uint32(32).int32(message.pool);
    }
    if (message.edge !== 0) {
      writer.uint32(40).int32(message.edge);
    }
    if (message.current !== 0) {
      writer.uint32(48).int32(message.current);
    }
    if (message.wound === true) {
      writer.uint32(56).bool(message.wound);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Attribute {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAttribute } as Attribute;
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
          message.pool = reader.int32();
          break;
        case 5:
          message.edge = reader.int32();
          break;
        case 6:
          message.current = reader.int32();
          break;
        case 7:
          message.wound = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Attribute {
    const message = { ...baseAttribute } as Attribute;
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
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Number(object.pool);
    } else {
      message.pool = 0;
    }
    if (object.edge !== undefined && object.edge !== null) {
      message.edge = Number(object.edge);
    } else {
      message.edge = 0;
    }
    if (object.current !== undefined && object.current !== null) {
      message.current = Number(object.current);
    } else {
      message.current = 0;
    }
    if (object.wound !== undefined && object.wound !== null) {
      message.wound = Boolean(object.wound);
    } else {
      message.wound = false;
    }
    return message;
  },

  toJSON(message: Attribute): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.pool !== undefined && (obj.pool = message.pool);
    message.edge !== undefined && (obj.edge = message.edge);
    message.current !== undefined && (obj.current = message.current);
    message.wound !== undefined && (obj.wound = message.wound);
    return obj;
  },

  fromPartial(object: DeepPartial<Attribute>): Attribute {
    const message = { ...baseAttribute } as Attribute;
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
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = object.pool;
    } else {
      message.pool = 0;
    }
    if (object.edge !== undefined && object.edge !== null) {
      message.edge = object.edge;
    } else {
      message.edge = 0;
    }
    if (object.current !== undefined && object.current !== null) {
      message.current = object.current;
    } else {
      message.current = 0;
    }
    if (object.wound !== undefined && object.wound !== null) {
      message.wound = object.wound;
    } else {
      message.wound = false;
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
