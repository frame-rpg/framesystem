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
 * Message implementation for framesystem.Acl
 */
export class Acl implements GrpcMessage {
  static id = 'framesystem.Acl';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Acl();
    Acl.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Acl) {
    _instance.authors = _instance.authors || [];
    _instance.collaborators = _instance.collaborators || [];
    _instance.visitors = _instance.visitors || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Acl, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.authors = _instance.authors || []).push(
            _reader.readString()
          );
          break;
        case 2:
          (_instance.collaborators = _instance.collaborators || []).push(
            _reader.readString()
          );
          break;
        case 3:
          (_instance.visitors = _instance.visitors || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Acl.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Acl, _writer: BinaryWriter) {
    if (_instance.authors && _instance.authors.length) {
      _writer.writeRepeatedString(1, _instance.authors);
    }
    if (_instance.collaborators && _instance.collaborators.length) {
      _writer.writeRepeatedString(2, _instance.collaborators);
    }
    if (_instance.visitors && _instance.visitors.length) {
      _writer.writeRepeatedString(3, _instance.visitors);
    }
  }

  private _authors?: string[];
  private _collaborators?: string[];
  private _visitors?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Acl to deeply clone from
   */
  constructor(_value?: RecursivePartial<Acl.AsObject>) {
    _value = _value || {};
    this.authors = (_value.authors || []).slice();
    this.collaborators = (_value.collaborators || []).slice();
    this.visitors = (_value.visitors || []).slice();
    Acl.refineValues(this);
  }
  get authors(): string[] | undefined {
    return this._authors;
  }
  set authors(value: string[] | undefined) {
    this._authors = value;
  }
  get collaborators(): string[] | undefined {
    return this._collaborators;
  }
  set collaborators(value: string[] | undefined) {
    this._collaborators = value;
  }
  get visitors(): string[] | undefined {
    return this._visitors;
  }
  set visitors(value: string[] | undefined) {
    this._visitors = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Acl.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Acl.AsObject {
    return {
      authors: (this.authors || []).slice(),
      collaborators: (this.collaborators || []).slice(),
      visitors: (this.visitors || []).slice()
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
  ): Acl.AsProtobufJSON {
    return {
      authors: (this.authors || []).slice(),
      collaborators: (this.collaborators || []).slice(),
      visitors: (this.visitors || []).slice()
    };
  }
}
export module Acl {
  /**
   * Standard JavaScript object representation for Acl
   */
  export interface AsObject {
    authors?: string[];
    collaborators?: string[];
    visitors?: string[];
  }

  /**
   * Protobuf JSON representation for Acl
   */
  export interface AsProtobufJSON {
    authors?: string[];
    collaborators?: string[];
    visitors?: string[];
  }
}
