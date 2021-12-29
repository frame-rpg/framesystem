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
import * as framesystem000 from './attribute.pb';
export enum SkillLevel {
  LEVEL_UNKNOWN = 0,
  LEVEL_INEPT = 1,
  LEVEL_UNSKILLED = 2,
  LEVEL_PROFICIENT = 3,
  LEVEL_TRAINED = 4,
  LEVEL_EXPERT = 5
}
export enum SkillType {
  SKILLTYPE_UNKNOWN = 0,
  SKILLTYPE_DEFENSE = 1,
  SKILLTYPE_ATTACK = 2,
  SKILLTYPE_INITIATIVE = 3,
  SKILLTYPE_NONCOMBAT = 4
}
/**
 * Message implementation for framesystem.Skill
 */
export class Skill implements GrpcMessage {
  static id = 'framesystem.Skill';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Skill();
    Skill.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Skill) {
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
    _instance.description = _instance.description || '';
    _instance.type = _instance.type || 0;
    _instance.category = _instance.category || '';
    _instance.tag = _instance.tag || [];
    _instance.attributes = _instance.attributes || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Skill, _reader: BinaryReader) {
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
          _instance.type = _reader.readEnum();
          break;
        case 5:
          _instance.category = _reader.readString();
          break;
        case 6:
          (_instance.tag = _instance.tag || []).push(_reader.readString());
          break;
        case 7:
          (_instance.attributes = _instance.attributes || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Skill.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Skill, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.description) {
      _writer.writeString(3, _instance.description);
    }
    if (_instance.type) {
      _writer.writeEnum(4, _instance.type);
    }
    if (_instance.category) {
      _writer.writeString(5, _instance.category);
    }
    if (_instance.tag && _instance.tag.length) {
      _writer.writeRepeatedString(6, _instance.tag);
    }
    if (_instance.attributes && _instance.attributes.length) {
      _writer.writeRepeatedString(7, _instance.attributes);
    }
  }

  private _id?: string;
  private _name?: string;
  private _description?: string;
  private _type?: SkillType;
  private _category?: string;
  private _tag?: string[];
  private _attributes?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Skill to deeply clone from
   */
  constructor(_value?: RecursivePartial<Skill.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    this.description = _value.description;
    this.type = _value.type;
    this.category = _value.category;
    this.tag = (_value.tag || []).slice();
    this.attributes = (_value.attributes || []).slice();
    Skill.refineValues(this);
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
  get type(): SkillType | undefined {
    return this._type;
  }
  set type(value: SkillType | undefined) {
    this._type = value;
  }
  get category(): string | undefined {
    return this._category;
  }
  set category(value: string | undefined) {
    this._category = value;
  }
  get tag(): string[] | undefined {
    return this._tag;
  }
  set tag(value: string[] | undefined) {
    this._tag = value;
  }
  get attributes(): string[] | undefined {
    return this._attributes;
  }
  set attributes(value: string[] | undefined) {
    this._attributes = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Skill.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Skill.AsObject {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      type: this.type,
      category: this.category,
      tag: (this.tag || []).slice(),
      attributes: (this.attributes || []).slice()
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
  ): Skill.AsProtobufJSON {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      type: SkillType[this.type ?? 0],
      category: this.category,
      tag: (this.tag || []).slice(),
      attributes: (this.attributes || []).slice()
    };
  }
}
export module Skill {
  /**
   * Standard JavaScript object representation for Skill
   */
  export interface AsObject {
    id?: string;
    name?: string;
    description?: string;
    type?: SkillType;
    category?: string;
    tag?: string[];
    attributes?: string[];
  }

  /**
   * Protobuf JSON representation for Skill
   */
  export interface AsProtobufJSON {
    id?: string;
    name?: string;
    description?: string;
    type?: string;
    category?: string;
    tag?: string[];
    attributes?: string[];
  }
}
