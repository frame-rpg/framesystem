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
import * as framesystem001 from './acl.pb';
import * as framesystem002 from './skill.pb';
import * as framesystem003 from './ability.pb';
export enum CharacterType {
  CHARACTERTYPE_UNKNOWN = 0,
  CHARACTERTYPE_PLAYER = 1,
  CHARACTERTYPE_NONPLAYER = 2,
  CHARACTERTYPE_COMPANION = 3
}
/**
 * Message implementation for framesystem.Character
 */
export class Character implements GrpcMessage {
  static id = 'framesystem.Character';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Character();
    Character.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Character) {
    _instance.id = _instance.id || '';
    _instance.type = _instance.type || 0;
    _instance.name = _instance.name || '';
    _instance.description = _instance.description || '';
    _instance.acl = _instance.acl || undefined;
    _instance.attributes = _instance.attributes || {};
    _instance.skills = _instance.skills || {};
    _instance.abilities = _instance.abilities || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Character,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.type = _reader.readEnum();
          break;
        case 3:
          _instance.name = _reader.readString();
          break;
        case 4:
          _instance.description = _reader.readString();
          break;
        case 5:
          _instance.acl = new framesystem001.Acl();
          _reader.readMessage(
            _instance.acl,
            framesystem001.Acl.deserializeBinaryFromReader
          );
          break;
        case 6:
          const msg_6 = {} as any;
          _reader.readMessage(
            msg_6,
            Character.AttributesEntry.deserializeBinaryFromReader
          );
          _instance.attributes = _instance.attributes || {};
          _instance.attributes[msg_6.key] = msg_6.value;
          break;
        case 7:
          const msg_7 = {} as any;
          _reader.readMessage(
            msg_7,
            Character.SkillsEntry.deserializeBinaryFromReader
          );
          _instance.skills = _instance.skills || {};
          _instance.skills[msg_7.key] = msg_7.value;
          break;
        case 8:
          const messageInitializer8 = new framesystem003.Ability();
          _reader.readMessage(
            messageInitializer8,
            framesystem003.Ability.deserializeBinaryFromReader
          );
          (_instance.abilities = _instance.abilities || []).push(
            messageInitializer8
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Character.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Character, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.type) {
      _writer.writeEnum(2, _instance.type);
    }
    if (_instance.name) {
      _writer.writeString(3, _instance.name);
    }
    if (_instance.description) {
      _writer.writeString(4, _instance.description);
    }
    if (_instance.acl) {
      _writer.writeMessage(
        5,
        _instance.acl as any,
        framesystem001.Acl.serializeBinaryToWriter
      );
    }
    if (!!_instance.attributes) {
      const keys_6 = Object.keys(_instance.attributes as any);

      if (keys_6.length) {
        const repeated_6 = keys_6
          .map(key => ({ key: key, value: (_instance.attributes as any)[key] }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          6,
          repeated_6,
          Character.AttributesEntry.serializeBinaryToWriter
        );
      }
    }
    if (!!_instance.skills) {
      const keys_7 = Object.keys(_instance.skills as any);

      if (keys_7.length) {
        const repeated_7 = keys_7
          .map(key => ({ key: key, value: (_instance.skills as any)[key] }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          7,
          repeated_7,
          Character.SkillsEntry.serializeBinaryToWriter
        );
      }
    }
    if (_instance.abilities && _instance.abilities.length) {
      _writer.writeRepeatedMessage(
        8,
        _instance.abilities as any,
        framesystem003.Ability.serializeBinaryToWriter
      );
    }
  }

  private _id?: string;
  private _type?: CharacterType;
  private _name?: string;
  private _description?: string;
  private _acl?: framesystem001.Acl;
  private _attributes?: { [prop: string]: framesystem000.Attribute };
  private _skills?: { [prop: string]: framesystem002.SkillLevel };
  private _abilities?: framesystem003.Ability[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Character to deeply clone from
   */
  constructor(_value?: RecursivePartial<Character.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.type = _value.type;
    this.name = _value.name;
    this.description = _value.description;
    this.acl = _value.acl ? new framesystem001.Acl(_value.acl) : undefined;
    (this.attributes = _value!.attributes
      ? Object.keys(_value!.attributes).reduce(
          (r, k) => ({
            ...r,
            [k]: _value!.attributes![k]
              ? new framesystem000.Attribute(_value!.attributes![k])
              : undefined
          }),
          {}
        )
      : {}),
      (this.skills = _value!.skills
        ? Object.keys(_value!.skills).reduce(
            (r, k) => ({ ...r, [k]: _value!.skills![k] }),
            {}
          )
        : {}),
      (this.abilities = (_value.abilities || []).map(
        m => new framesystem003.Ability(m)
      ));
    Character.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get type(): CharacterType | undefined {
    return this._type;
  }
  set type(value: CharacterType | undefined) {
    this._type = value;
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
  get acl(): framesystem001.Acl | undefined {
    return this._acl;
  }
  set acl(value: framesystem001.Acl | undefined) {
    this._acl = value;
  }
  get attributes(): { [prop: string]: framesystem000.Attribute } | undefined {
    return this._attributes;
  }
  set attributes(
    value: { [prop: string]: framesystem000.Attribute } | undefined
  ) {
    this._attributes = value;
  }
  get skills(): { [prop: string]: framesystem002.SkillLevel } | undefined {
    return this._skills;
  }
  set skills(value: { [prop: string]: framesystem002.SkillLevel } | undefined) {
    this._skills = value;
  }
  get abilities(): framesystem003.Ability[] | undefined {
    return this._abilities;
  }
  set abilities(value: framesystem003.Ability[] | undefined) {
    this._abilities = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Character.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Character.AsObject {
    return {
      id: this.id,
      type: this.type,
      name: this.name,
      description: this.description,
      acl: this.acl ? this.acl.toObject() : undefined,
      attributes: this.attributes
        ? Object.keys(this.attributes).reduce(
            (r, k) => ({
              ...r,
              [k]: this.attributes![k]
                ? this.attributes![k].toObject()
                : undefined
            }),
            {}
          )
        : {},
      skills: this.skills
        ? Object.keys(this.skills).reduce(
            (r, k) => ({ ...r, [k]: this.skills![k] }),
            {}
          )
        : {},
      abilities: (this.abilities || []).map(m => m.toObject())
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
  ): Character.AsProtobufJSON {
    return {
      id: this.id,
      type: CharacterType[this.type ?? 0],
      name: this.name,
      description: this.description,
      acl: this.acl ? this.acl.toProtobufJSON(options) : null,
      attributes: this.attributes
        ? Object.keys(this.attributes).reduce(
            (r, k) => ({
              ...r,
              [k]: this.attributes![k] ? this.attributes![k].toJSON() : null
            }),
            {}
          )
        : {},
      skills: this.skills
        ? Object.keys(this.skills).reduce(
            (r, k) => ({ ...r, [k]: this.skills![k] }),
            {}
          )
        : {},
      abilities: (this.abilities || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module Character {
  /**
   * Standard JavaScript object representation for Character
   */
  export interface AsObject {
    id?: string;
    type?: CharacterType;
    name?: string;
    description?: string;
    acl?: framesystem001.Acl.AsObject;
    attributes?: { [prop: string]: framesystem000.Attribute };
    skills?: { [prop: string]: framesystem002.SkillLevel };
    abilities?: framesystem003.Ability.AsObject[];
  }

  /**
   * Protobuf JSON representation for Character
   */
  export interface AsProtobufJSON {
    id?: string;
    type?: string;
    name?: string;
    description?: string;
    acl?: framesystem001.Acl.AsProtobufJSON | null;
    attributes?: { [prop: string]: framesystem000.Attribute };
    skills?: { [prop: string]: framesystem002.SkillLevel };
    abilities?: framesystem003.Ability.AsProtobufJSON[] | null;
  }

  /**
   * Message implementation for framesystem.AttributesEntry
   */
  export class AttributesEntry implements GrpcMessage {
    static id = 'framesystem.AttributesEntry';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new AttributesEntry();
      AttributesEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AttributesEntry) {
      _instance.key = _instance.key || '';
      _instance.value = _instance.value || undefined;
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: AttributesEntry,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.key = _reader.readString();
            break;
          case 2:
            _instance.value = new framesystem000.Attribute();
            _reader.readMessage(
              _instance.value,
              framesystem000.Attribute.deserializeBinaryFromReader
            );
            break;
          default:
            _reader.skipField();
        }
      }

      AttributesEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: AttributesEntry,
      _writer: BinaryWriter
    ) {
      if (_instance.key) {
        _writer.writeString(1, _instance.key);
      }
      if (_instance.value) {
        _writer.writeMessage(
          2,
          _instance.value as any,
          framesystem000.Attribute.serializeBinaryToWriter
        );
      }
    }

    private _key?: string;
    private _value?: framesystem000.Attribute;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AttributesEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<AttributesEntry.AsObject>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value
        ? new framesystem000.Attribute(_value.value)
        : undefined;
      AttributesEntry.refineValues(this);
    }
    get key(): string | undefined {
      return this._key;
    }
    set key(value: string | undefined) {
      this._key = value;
    }
    get value(): framesystem000.Attribute | undefined {
      return this._value;
    }
    set value(value: framesystem000.Attribute | undefined) {
      this._value = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      AttributesEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AttributesEntry.AsObject {
      return {
        key: this.key,
        value: this.value ? this.value.toObject() : undefined
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
    ): AttributesEntry.AsProtobufJSON {
      return {
        key: this.key,
        value: this.value ? this.value.toProtobufJSON(options) : null
      };
    }
  }
  export module AttributesEntry {
    /**
     * Standard JavaScript object representation for AttributesEntry
     */
    export interface AsObject {
      key?: string;
      value?: framesystem000.Attribute.AsObject;
    }

    /**
     * Protobuf JSON representation for AttributesEntry
     */
    export interface AsProtobufJSON {
      key?: string;
      value?: framesystem000.Attribute.AsProtobufJSON | null;
    }
  }

  /**
   * Message implementation for framesystem.SkillsEntry
   */
  export class SkillsEntry implements GrpcMessage {
    static id = 'framesystem.SkillsEntry';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new SkillsEntry();
      SkillsEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: SkillsEntry) {
      _instance.key = _instance.key || '';
      _instance.value = _instance.value || 0;
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: SkillsEntry,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.key = _reader.readString();
            break;
          case 2:
            _instance.value = _reader.readEnum();
            break;
          default:
            _reader.skipField();
        }
      }

      SkillsEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: SkillsEntry,
      _writer: BinaryWriter
    ) {
      if (_instance.key) {
        _writer.writeString(1, _instance.key);
      }
      if (_instance.value) {
        _writer.writeEnum(2, _instance.value);
      }
    }

    private _key?: string;
    private _value?: framesystem002.SkillLevel;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SkillsEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<SkillsEntry.AsObject>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value;
      SkillsEntry.refineValues(this);
    }
    get key(): string | undefined {
      return this._key;
    }
    set key(value: string | undefined) {
      this._key = value;
    }
    get value(): framesystem002.SkillLevel | undefined {
      return this._value;
    }
    set value(value: framesystem002.SkillLevel | undefined) {
      this._value = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      SkillsEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): SkillsEntry.AsObject {
      return {
        key: this.key,
        value: this.value
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
    ): SkillsEntry.AsProtobufJSON {
      return {
        key: this.key,
        value: framesystem002.SkillLevel[this.value ?? 0]
      };
    }
  }
  export module SkillsEntry {
    /**
     * Standard JavaScript object representation for SkillsEntry
     */
    export interface AsObject {
      key?: string;
      value?: framesystem002.SkillLevel;
    }

    /**
     * Protobuf JSON representation for SkillsEntry
     */
    export interface AsProtobufJSON {
      key?: string;
      value?: string;
    }
  }
}
