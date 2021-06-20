/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';

/**
 * Message implementation for framesystem.PoolCost
 */
export class PoolCost implements GrpcMessage {
  static id = 'framesystem.PoolCost';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PoolCost();
    PoolCost.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PoolCost) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PoolCost,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    PoolCost.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: PoolCost, _writer: BinaryWriter) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PoolCost to deeply clone from
   */
  constructor(_value?: RecursivePartial<PoolCost.AsObject>) {
    _value = _value || {};
    PoolCost.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PoolCost.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PoolCost.AsObject {
    return {};
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): PoolCost.AsProtobufJSON {
    return {};
  }
}
export module PoolCost {
  /**
   * Standard JavaScript object representation for PoolCost
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for PoolCost
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for framesystem.InitiativeCost
 */
export class InitiativeCost implements GrpcMessage {
  static id = 'framesystem.InitiativeCost';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new InitiativeCost();
    InitiativeCost.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: InitiativeCost) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: InitiativeCost,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    InitiativeCost.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: InitiativeCost,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of InitiativeCost to deeply clone from
   */
  constructor(_value?: RecursivePartial<InitiativeCost.AsObject>) {
    _value = _value || {};
    InitiativeCost.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    InitiativeCost.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): InitiativeCost.AsObject {
    return {};
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): InitiativeCost.AsProtobufJSON {
    return {};
  }
}
export module InitiativeCost {
  /**
   * Standard JavaScript object representation for InitiativeCost
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for InitiativeCost
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for framesystem.DamageCost
 */
export class DamageCost implements GrpcMessage {
  static id = 'framesystem.DamageCost';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DamageCost();
    DamageCost.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DamageCost) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DamageCost,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    DamageCost.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DamageCost,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DamageCost to deeply clone from
   */
  constructor(_value?: RecursivePartial<DamageCost.AsObject>) {
    _value = _value || {};
    DamageCost.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DamageCost.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DamageCost.AsObject {
    return {};
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DamageCost.AsProtobufJSON {
    return {};
  }
}
export module DamageCost {
  /**
   * Standard JavaScript object representation for DamageCost
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for DamageCost
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for framesystem.DepletionCost
 */
export class DepletionCost implements GrpcMessage {
  static id = 'framesystem.DepletionCost';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DepletionCost();
    DepletionCost.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DepletionCost) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DepletionCost,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    DepletionCost.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DepletionCost,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DepletionCost to deeply clone from
   */
  constructor(_value?: RecursivePartial<DepletionCost.AsObject>) {
    _value = _value || {};
    DepletionCost.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DepletionCost.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DepletionCost.AsObject {
    return {};
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DepletionCost.AsProtobufJSON {
    return {};
  }
}
export module DepletionCost {
  /**
   * Standard JavaScript object representation for DepletionCost
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for DepletionCost
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for framesystem.WoundCost
 */
export class WoundCost implements GrpcMessage {
  static id = 'framesystem.WoundCost';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WoundCost();
    WoundCost.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WoundCost) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WoundCost,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    WoundCost.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: WoundCost, _writer: BinaryWriter) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WoundCost to deeply clone from
   */
  constructor(_value?: RecursivePartial<WoundCost.AsObject>) {
    _value = _value || {};
    WoundCost.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WoundCost.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WoundCost.AsObject {
    return {};
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): WoundCost.AsProtobufJSON {
    return {};
  }
}
export module WoundCost {
  /**
   * Standard JavaScript object representation for WoundCost
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for WoundCost
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for framesystem.Cost
 */
export class Cost implements GrpcMessage {
  static id = 'framesystem.Cost';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Cost();
    Cost.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Cost) {
    _instance.type = _instance.type || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Cost, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pool = new PoolCost();
          _reader.readMessage(
            _instance.pool,
            PoolCost.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.initiative = new InitiativeCost();
          _reader.readMessage(
            _instance.initiative,
            InitiativeCost.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.damage = new DamageCost();
          _reader.readMessage(
            _instance.damage,
            DamageCost.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.depletion = new DepletionCost();
          _reader.readMessage(
            _instance.depletion,
            DepletionCost.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.wound = new WoundCost();
          _reader.readMessage(
            _instance.wound,
            WoundCost.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.type = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    Cost.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Cost, _writer: BinaryWriter) {
    if (_instance.pool) {
      _writer.writeMessage(
        1,
        _instance.pool as any,
        PoolCost.serializeBinaryToWriter
      );
    }
    if (_instance.initiative) {
      _writer.writeMessage(
        2,
        _instance.initiative as any,
        InitiativeCost.serializeBinaryToWriter
      );
    }
    if (_instance.damage) {
      _writer.writeMessage(
        3,
        _instance.damage as any,
        DamageCost.serializeBinaryToWriter
      );
    }
    if (_instance.depletion) {
      _writer.writeMessage(
        4,
        _instance.depletion as any,
        DepletionCost.serializeBinaryToWriter
      );
    }
    if (_instance.wound) {
      _writer.writeMessage(
        5,
        _instance.wound as any,
        WoundCost.serializeBinaryToWriter
      );
    }
    if (_instance.type) {
      _writer.writeEnum(6, _instance.type);
    }
  }

  private _pool?: PoolCost;
  private _initiative?: InitiativeCost;
  private _damage?: DamageCost;
  private _depletion?: DepletionCost;
  private _wound?: WoundCost;
  private _type?: Cost.CostType;

  private _cost: Cost.CostCase = Cost.CostCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Cost to deeply clone from
   */
  constructor(_value?: RecursivePartial<Cost.AsObject>) {
    _value = _value || {};
    this.pool = _value.pool ? new PoolCost(_value.pool) : undefined;
    this.initiative = _value.initiative
      ? new InitiativeCost(_value.initiative)
      : undefined;
    this.damage = _value.damage ? new DamageCost(_value.damage) : undefined;
    this.depletion = _value.depletion
      ? new DepletionCost(_value.depletion)
      : undefined;
    this.wound = _value.wound ? new WoundCost(_value.wound) : undefined;
    this.type = _value.type;
    Cost.refineValues(this);
  }
  get pool(): PoolCost | undefined {
    return this._pool;
  }
  set pool(value: PoolCost | undefined) {
    if (value !== undefined && value !== null) {
      this._initiative = this._damage = this._depletion = this._wound = undefined;
      this._cost = Cost.CostCase.pool;
    }
    this._pool = value;
  }
  get initiative(): InitiativeCost | undefined {
    return this._initiative;
  }
  set initiative(value: InitiativeCost | undefined) {
    if (value !== undefined && value !== null) {
      this._pool = this._damage = this._depletion = this._wound = undefined;
      this._cost = Cost.CostCase.initiative;
    }
    this._initiative = value;
  }
  get damage(): DamageCost | undefined {
    return this._damage;
  }
  set damage(value: DamageCost | undefined) {
    if (value !== undefined && value !== null) {
      this._pool = this._initiative = this._depletion = this._wound = undefined;
      this._cost = Cost.CostCase.damage;
    }
    this._damage = value;
  }
  get depletion(): DepletionCost | undefined {
    return this._depletion;
  }
  set depletion(value: DepletionCost | undefined) {
    if (value !== undefined && value !== null) {
      this._pool = this._initiative = this._damage = this._wound = undefined;
      this._cost = Cost.CostCase.depletion;
    }
    this._depletion = value;
  }
  get wound(): WoundCost | undefined {
    return this._wound;
  }
  set wound(value: WoundCost | undefined) {
    if (value !== undefined && value !== null) {
      this._pool = this._initiative = this._damage = this._depletion = undefined;
      this._cost = Cost.CostCase.wound;
    }
    this._wound = value;
  }
  get type(): Cost.CostType | undefined {
    return this._type;
  }
  set type(value: Cost.CostType | undefined) {
    this._type = value;
  }
  get cost() {
    return this._cost;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Cost.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Cost.AsObject {
    return {
      pool: this.pool ? this.pool.toObject() : undefined,
      initiative: this.initiative ? this.initiative.toObject() : undefined,
      damage: this.damage ? this.damage.toObject() : undefined,
      depletion: this.depletion ? this.depletion.toObject() : undefined,
      wound: this.wound ? this.wound.toObject() : undefined,
      type: this.type
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Cost.AsProtobufJSON {
    return {
      pool: this.pool ? this.pool.toProtobufJSON(options) : null,
      initiative: this.initiative
        ? this.initiative.toProtobufJSON(options)
        : null,
      damage: this.damage ? this.damage.toProtobufJSON(options) : null,
      depletion: this.depletion ? this.depletion.toProtobufJSON(options) : null,
      wound: this.wound ? this.wound.toProtobufJSON(options) : null,
      type: Cost.CostType[this.type ?? 0]
    };
  }
}
export module Cost {
  /**
   * Standard JavaScript object representation for Cost
   */
  export interface AsObject {
    pool?: PoolCost.AsObject;
    initiative?: InitiativeCost.AsObject;
    damage?: DamageCost.AsObject;
    depletion?: DepletionCost.AsObject;
    wound?: WoundCost.AsObject;
    type?: Cost.CostType;
  }

  /**
   * Protobuf JSON representation for Cost
   */
  export interface AsProtobufJSON {
    pool?: PoolCost.AsProtobufJSON | null;
    initiative?: InitiativeCost.AsProtobufJSON | null;
    damage?: DamageCost.AsProtobufJSON | null;
    depletion?: DepletionCost.AsProtobufJSON | null;
    wound?: WoundCost.AsProtobufJSON | null;
    type?: string;
  }
  export enum CostCase {
    none = 0,
    pool = 1,
    initiative = 2,
    damage = 3,
    depletion = 4,
    wound = 5
  }
  export enum CostType {
    COST_UNKNOWN = 0,
    COST_POOL = 1,
    COST_INITIATIVE = 2,
    COST_DAMAGE = 3,
    COST_DEPLETION = 4,
    COST_WOUND = 5
  }
}

/**
 * Message implementation for framesystem.Effect
 */
export class Effect implements GrpcMessage {
  static id = 'framesystem.Effect';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Effect();
    Effect.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Effect) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Effect, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    Effect.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Effect, _writer: BinaryWriter) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Effect to deeply clone from
   */
  constructor(_value?: RecursivePartial<Effect.AsObject>) {
    _value = _value || {};
    Effect.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Effect.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Effect.AsObject {
    return {};
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Effect.AsProtobufJSON {
    return {};
  }
}
export module Effect {
  /**
   * Standard JavaScript object representation for Effect
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for Effect
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for framesystem.Ability
 */
export class Ability implements GrpcMessage {
  static id = 'framesystem.Ability';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Ability();
    Ability.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Ability) {
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
    _instance.description = _instance.description || '';
    _instance.cost = _instance.cost || [];
    _instance.effect = _instance.effect || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Ability,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.description = _reader.readString();
          break;
        case 4:
          const messageInitializer4 = new Cost();
          _reader.readMessage(
            messageInitializer4,
            Cost.deserializeBinaryFromReader
          );
          (_instance.cost = _instance.cost || []).push(messageInitializer4);
          break;
        case 5:
          const messageInitializer5 = new Effect();
          _reader.readMessage(
            messageInitializer5,
            Effect.deserializeBinaryFromReader
          );
          (_instance.effect = _instance.effect || []).push(messageInitializer5);
          break;
        default:
          _reader.skipField();
      }
    }

    Ability.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Ability, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.description) {
      _writer.writeString(3, _instance.description);
    }
    if (_instance.cost && _instance.cost.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.cost as any,
        Cost.serializeBinaryToWriter
      );
    }
    if (_instance.effect && _instance.effect.length) {
      _writer.writeRepeatedMessage(
        5,
        _instance.effect as any,
        Effect.serializeBinaryToWriter
      );
    }
  }

  private _id?: string;
  private _name?: string;
  private _description?: string;
  private _cost?: Cost[];
  private _effect?: Effect[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Ability to deeply clone from
   */
  constructor(_value?: RecursivePartial<Ability.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    this.description = _value.description;
    this.cost = (_value.cost || []).map(m => new Cost(m));
    this.effect = (_value.effect || []).map(m => new Effect(m));
    Ability.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get description(): string | undefined {
    return this._description;
  }
  set description(value: string | undefined) {
    this._description = value;
  }
  get cost(): Cost[] | undefined {
    return this._cost;
  }
  set cost(value: Cost[] | undefined) {
    this._cost = value;
  }
  get effect(): Effect[] | undefined {
    return this._effect;
  }
  set effect(value: Effect[] | undefined) {
    this._effect = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Ability.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Ability.AsObject {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      cost: (this.cost || []).map(m => m.toObject()),
      effect: (this.effect || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Ability.AsProtobufJSON {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      cost: (this.cost || []).map(m => m.toProtobufJSON(options)),
      effect: (this.effect || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module Ability {
  /**
   * Standard JavaScript object representation for Ability
   */
  export interface AsObject {
    id?: string;
    name?: string;
    description?: string;
    cost?: Cost.AsObject[];
    effect?: Effect.AsObject[];
  }

  /**
   * Protobuf JSON representation for Ability
   */
  export interface AsProtobufJSON {
    id?: string;
    name?: string;
    description?: string;
    cost?: Cost.AsProtobufJSON[] | null;
    effect?: Effect.AsProtobufJSON[] | null;
  }
}
