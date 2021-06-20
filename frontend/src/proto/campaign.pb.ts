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
/**
 * Message implementation for framesystem.Campaign
 */
export class Campaign implements GrpcMessage {
  static id = 'framesystem.Campaign';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Campaign();
    Campaign.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Campaign) {
    _instance.id = _instance.id || '';
    _instance.acl = _instance.acl || undefined;
    _instance.name = _instance.name || '';
    _instance.description = _instance.description || '';
    _instance.skills = _instance.skills || {};
    _instance.characters = _instance.characters || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Campaign,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.acl = new framesystem001.Acl();
          _reader.readMessage(
            _instance.acl,
            framesystem001.Acl.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.name = _reader.readString();
          break;
        case 4:
          _instance.description = _reader.readString();
          break;
        case 5:
          const msg_5 = {} as any;
          _reader.readMessage(
            msg_5,
            Campaign.SkillsEntry.deserializeBinaryFromReader
          );
          _instance.skills = _instance.skills || {};
          _instance.skills[msg_5.key] = msg_5.value;
          break;
        case 6:
          (_instance.characters = _instance.characters || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Campaign.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Campaign, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.acl) {
      _writer.writeMessage(
        2,
        _instance.acl as any,
        framesystem001.Acl.serializeBinaryToWriter
      );
    }
    if (_instance.name) {
      _writer.writeString(3, _instance.name);
    }
    if (_instance.description) {
      _writer.writeString(4, _instance.description);
    }
    if (!!_instance.skills) {
      const keys_5 = Object.keys(_instance.skills as any);

      if (keys_5.length) {
        const repeated_5 = keys_5
          .map(key => ({ key: key, value: (_instance.skills as any)[key] }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          5,
          repeated_5,
          Campaign.SkillsEntry.serializeBinaryToWriter
        );
      }
    }
    if (_instance.characters && _instance.characters.length) {
      _writer.writeRepeatedString(6, _instance.characters);
    }
  }

  private _id?: string;
  private _acl?: framesystem001.Acl;
  private _name?: string;
  private _description?: string;
  private _skills?: { [prop: string]: framesystem002.Skill };
  private _characters?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Campaign to deeply clone from
   */
  constructor(_value?: RecursivePartial<Campaign.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.acl = _value.acl ? new framesystem001.Acl(_value.acl) : undefined;
    this.name = _value.name;
    this.description = _value.description;
    (this.skills = _value!.skills
      ? Object.keys(_value!.skills).reduce(
          (r, k) => ({
            ...r,
            [k]: _value!.skills![k]
              ? new framesystem002.Skill(_value!.skills![k])
              : undefined
          }),
          {}
        )
      : {}),
      (this.characters = (_value.characters || []).slice());
    Campaign.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get acl(): framesystem001.Acl | undefined {
    return this._acl;
  }
  set acl(value: framesystem001.Acl | undefined) {
    this._acl = value;
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
  get skills(): { [prop: string]: framesystem002.Skill } | undefined {
    return this._skills;
  }
  set skills(value: { [prop: string]: framesystem002.Skill } | undefined) {
    this._skills = value;
  }
  get characters(): string[] | undefined {
    return this._characters;
  }
  set characters(value: string[] | undefined) {
    this._characters = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Campaign.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Campaign.AsObject {
    return {
      id: this.id,
      acl: this.acl ? this.acl.toObject() : undefined,
      name: this.name,
      description: this.description,
      skills: this.skills
        ? Object.keys(this.skills).reduce(
            (r, k) => ({
              ...r,
              [k]: this.skills![k] ? this.skills![k].toObject() : undefined
            }),
            {}
          )
        : {},
      characters: (this.characters || []).slice()
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
  ): Campaign.AsProtobufJSON {
    return {
      id: this.id,
      acl: this.acl ? this.acl.toProtobufJSON(options) : null,
      name: this.name,
      description: this.description,
      skills: this.skills
        ? Object.keys(this.skills).reduce(
            (r, k) => ({
              ...r,
              [k]: this.skills![k] ? this.skills![k].toJSON() : null
            }),
            {}
          )
        : {},
      characters: (this.characters || []).slice()
    };
  }
}
export module Campaign {
  /**
   * Standard JavaScript object representation for Campaign
   */
  export interface AsObject {
    id?: string;
    acl?: framesystem001.Acl.AsObject;
    name?: string;
    description?: string;
    skills?: { [prop: string]: framesystem002.Skill };
    characters?: string[];
  }

  /**
   * Protobuf JSON representation for Campaign
   */
  export interface AsProtobufJSON {
    id?: string;
    acl?: framesystem001.Acl.AsProtobufJSON | null;
    name?: string;
    description?: string;
    skills?: { [prop: string]: framesystem002.Skill };
    characters?: string[];
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
      _instance.value = _instance.value || undefined;
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
            _instance.value = new framesystem002.Skill();
            _reader.readMessage(
              _instance.value,
              framesystem002.Skill.deserializeBinaryFromReader
            );
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
        _writer.writeMessage(
          2,
          _instance.value as any,
          framesystem002.Skill.serializeBinaryToWriter
        );
      }
    }

    private _key?: string;
    private _value?: framesystem002.Skill;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SkillsEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<SkillsEntry.AsObject>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value
        ? new framesystem002.Skill(_value.value)
        : undefined;
      SkillsEntry.refineValues(this);
    }
    get key(): string | undefined {
      return this._key;
    }
    set key(value: string | undefined) {
      this._key = value;
    }
    get value(): framesystem002.Skill | undefined {
      return this._value;
    }
    set value(value: framesystem002.Skill | undefined) {
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
    ): SkillsEntry.AsProtobufJSON {
      return {
        key: this.key,
        value: this.value ? this.value.toProtobufJSON(options) : null
      };
    }
  }
  export module SkillsEntry {
    /**
     * Standard JavaScript object representation for SkillsEntry
     */
    export interface AsObject {
      key?: string;
      value?: framesystem002.Skill.AsObject;
    }

    /**
     * Protobuf JSON representation for SkillsEntry
     */
    export interface AsProtobufJSON {
      key?: string;
      value?: framesystem002.Skill.AsProtobufJSON | null;
    }
  }
}
