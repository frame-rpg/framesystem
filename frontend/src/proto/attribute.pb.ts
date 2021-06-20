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
 * Message implementation for framesystem.Attribute
 */
export class Attribute implements GrpcMessage {
  static id = 'framesystem.Attribute';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Attribute();
    Attribute.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Attribute) {
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
    _instance.description = _instance.description || '';
    _instance.pool = _instance.pool || 0;
    _instance.edge = _instance.edge || 0;
    _instance.current = _instance.current || 0;
    _instance.wound = _instance.wound || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Attribute,
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
          _instance.pool = _reader.readInt32();
          break;
        case 5:
          _instance.edge = _reader.readInt32();
          break;
        case 6:
          _instance.current = _reader.readInt32();
          break;
        case 7:
          _instance.wound = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    Attribute.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Attribute, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.description) {
      _writer.writeString(3, _instance.description);
    }
    if (_instance.pool) {
      _writer.writeInt32(4, _instance.pool);
    }
    if (_instance.edge) {
      _writer.writeInt32(5, _instance.edge);
    }
    if (_instance.current) {
      _writer.writeInt32(6, _instance.current);
    }
    if (_instance.wound) {
      _writer.writeBool(7, _instance.wound);
    }
  }

  private _id?: string;
  private _name?: string;
  private _description?: string;
  private _pool?: number;
  private _edge?: number;
  private _current?: number;
  private _wound?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Attribute to deeply clone from
   */
  constructor(_value?: RecursivePartial<Attribute.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    this.description = _value.description;
    this.pool = _value.pool;
    this.edge = _value.edge;
    this.current = _value.current;
    this.wound = _value.wound;
    Attribute.refineValues(this);
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
  get pool(): number | undefined {
    return this._pool;
  }
  set pool(value: number | undefined) {
    this._pool = value;
  }
  get edge(): number | undefined {
    return this._edge;
  }
  set edge(value: number | undefined) {
    this._edge = value;
  }
  get current(): number | undefined {
    return this._current;
  }
  set current(value: number | undefined) {
    this._current = value;
  }
  get wound(): boolean | undefined {
    return this._wound;
  }
  set wound(value: boolean | undefined) {
    this._wound = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Attribute.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Attribute.AsObject {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      pool: this.pool,
      edge: this.edge,
      current: this.current,
      wound: this.wound
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
  ): Attribute.AsProtobufJSON {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      pool: this.pool,
      edge: this.edge,
      current: this.current,
      wound: this.wound
    };
  }
}
export module Attribute {
  /**
   * Standard JavaScript object representation for Attribute
   */
  export interface AsObject {
    id?: string;
    name?: string;
    description?: string;
    pool?: number;
    edge?: number;
    current?: number;
    wound?: boolean;
  }

  /**
   * Protobuf JSON representation for Attribute
   */
  export interface AsProtobufJSON {
    id?: string;
    name?: string;
    description?: string;
    pool?: number;
    edge?: number;
    current?: number;
    wound?: boolean;
  }
}
