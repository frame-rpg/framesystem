/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'framesystem';

export enum AclLevel {
  ACL_LEVEL_UNKNOWN = 0,
  ACL_LEVEL_VISIT = 1,
  ACL_LEVEL_COLLABORATE = 2,
  ACL_LEVEL_AUTHOR = 3,
  UNRECOGNIZED = -1,
}

export function aclLevelFromJSON(object: any): AclLevel {
  switch (object) {
    case 0:
    case 'ACL_LEVEL_UNKNOWN':
      return AclLevel.ACL_LEVEL_UNKNOWN;
    case 1:
    case 'ACL_LEVEL_VISIT':
      return AclLevel.ACL_LEVEL_VISIT;
    case 2:
    case 'ACL_LEVEL_COLLABORATE':
      return AclLevel.ACL_LEVEL_COLLABORATE;
    case 3:
    case 'ACL_LEVEL_AUTHOR':
      return AclLevel.ACL_LEVEL_AUTHOR;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return AclLevel.UNRECOGNIZED;
  }
}

export function aclLevelToJSON(object: AclLevel): string {
  switch (object) {
    case AclLevel.ACL_LEVEL_UNKNOWN:
      return 'ACL_LEVEL_UNKNOWN';
    case AclLevel.ACL_LEVEL_VISIT:
      return 'ACL_LEVEL_VISIT';
    case AclLevel.ACL_LEVEL_COLLABORATE:
      return 'ACL_LEVEL_COLLABORATE';
    case AclLevel.ACL_LEVEL_AUTHOR:
      return 'ACL_LEVEL_AUTHOR';
    default:
      return 'UNKNOWN';
  }
}

export interface Acl {
  authors: string[];
  collaborators: string[];
  visitors: string[];
}

const baseAcl: object = { authors: '', collaborators: '', visitors: '' };

export const Acl = {
  encode(message: Acl, writer: Writer = Writer.create()): Writer {
    for (const v of message.authors) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.collaborators) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.visitors) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Acl {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAcl } as Acl;
    message.authors = [];
    message.collaborators = [];
    message.visitors = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authors.push(reader.string());
          break;
        case 2:
          message.collaborators.push(reader.string());
          break;
        case 3:
          message.visitors.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Acl {
    const message = { ...baseAcl } as Acl;
    message.authors = [];
    message.collaborators = [];
    message.visitors = [];
    if (object.authors !== undefined && object.authors !== null) {
      for (const e of object.authors) {
        message.authors.push(String(e));
      }
    }
    if (object.collaborators !== undefined && object.collaborators !== null) {
      for (const e of object.collaborators) {
        message.collaborators.push(String(e));
      }
    }
    if (object.visitors !== undefined && object.visitors !== null) {
      for (const e of object.visitors) {
        message.visitors.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Acl): unknown {
    const obj: any = {};
    if (message.authors) {
      obj.authors = message.authors.map((e) => e);
    } else {
      obj.authors = [];
    }
    if (message.collaborators) {
      obj.collaborators = message.collaborators.map((e) => e);
    } else {
      obj.collaborators = [];
    }
    if (message.visitors) {
      obj.visitors = message.visitors.map((e) => e);
    } else {
      obj.visitors = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Acl>): Acl {
    const message = { ...baseAcl } as Acl;
    message.authors = [];
    message.collaborators = [];
    message.visitors = [];
    if (object.authors !== undefined && object.authors !== null) {
      for (const e of object.authors) {
        message.authors.push(e);
      }
    }
    if (object.collaborators !== undefined && object.collaborators !== null) {
      for (const e of object.collaborators) {
        message.collaborators.push(e);
      }
    }
    if (object.visitors !== undefined && object.visitors !== null) {
      for (const e of object.visitors) {
        message.visitors.push(e);
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
