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
import * as framesystem000 from './acl.pb';
import * as framesystem001 from './skill.pb';
import * as framesystem002 from './attribute.pb';
import * as framesystem003 from './ability.pb';
import * as framesystem004 from './campaign.pb';
import * as framesystem005 from './character.pb';
import * as framesystem006 from './user.pb';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
/**
 * Message implementation for framesystem.CreateCampaignRequest
 */
export class CreateCampaignRequest implements GrpcMessage {
  static id = 'framesystem.CreateCampaignRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateCampaignRequest();
    CreateCampaignRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateCampaignRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateCampaignRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateCampaignRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateCampaignRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateCampaignRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateCampaignRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    CreateCampaignRequest.refineValues(this);
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateCampaignRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateCampaignRequest.AsObject {
    return {
      name: this.name
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
  ): CreateCampaignRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module CreateCampaignRequest {
  /**
   * Standard JavaScript object representation for CreateCampaignRequest
   */
  export interface AsObject {
    name?: string;
  }

  /**
   * Protobuf JSON representation for CreateCampaignRequest
   */
  export interface AsProtobufJSON {
    name?: string;
  }
}

/**
 * Message implementation for framesystem.CreateCampaignResponse
 */
export class CreateCampaignResponse implements GrpcMessage {
  static id = 'framesystem.CreateCampaignResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateCampaignResponse();
    CreateCampaignResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateCampaignResponse) {
    _instance.created = _instance.created || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateCampaignResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.created = new framesystem004.Campaign();
          _reader.readMessage(
            _instance.created,
            framesystem004.Campaign.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CreateCampaignResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateCampaignResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.created) {
      _writer.writeMessage(
        1,
        _instance.created as any,
        framesystem004.Campaign.serializeBinaryToWriter
      );
    }
  }

  private _created?: framesystem004.Campaign;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateCampaignResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateCampaignResponse.AsObject>) {
    _value = _value || {};
    this.created = _value.created
      ? new framesystem004.Campaign(_value.created)
      : undefined;
    CreateCampaignResponse.refineValues(this);
  }
  get created(): framesystem004.Campaign | undefined {
    return this._created;
  }
  set created(value: framesystem004.Campaign | undefined) {
    this._created = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateCampaignResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateCampaignResponse.AsObject {
    return {
      created: this.created ? this.created.toObject() : undefined
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
  ): CreateCampaignResponse.AsProtobufJSON {
    return {
      created: this.created ? this.created.toProtobufJSON(options) : null
    };
  }
}
export module CreateCampaignResponse {
  /**
   * Standard JavaScript object representation for CreateCampaignResponse
   */
  export interface AsObject {
    created?: framesystem004.Campaign.AsObject;
  }

  /**
   * Protobuf JSON representation for CreateCampaignResponse
   */
  export interface AsProtobufJSON {
    created?: framesystem004.Campaign.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for framesystem.ReadCampaignRequest
 */
export class ReadCampaignRequest implements GrpcMessage {
  static id = 'framesystem.ReadCampaignRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReadCampaignRequest();
    ReadCampaignRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReadCampaignRequest) {
    _instance.id = _instance.id || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReadCampaignRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ReadCampaignRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReadCampaignRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
  }

  private _id?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReadCampaignRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReadCampaignRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    ReadCampaignRequest.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReadCampaignRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReadCampaignRequest.AsObject {
    return {
      id: this.id
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
  ): ReadCampaignRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module ReadCampaignRequest {
  /**
   * Standard JavaScript object representation for ReadCampaignRequest
   */
  export interface AsObject {
    id?: string;
  }

  /**
   * Protobuf JSON representation for ReadCampaignRequest
   */
  export interface AsProtobufJSON {
    id?: string;
  }
}

/**
 * Message implementation for framesystem.ReadCampaignResponse
 */
export class ReadCampaignResponse implements GrpcMessage {
  static id = 'framesystem.ReadCampaignResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReadCampaignResponse();
    ReadCampaignResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReadCampaignResponse) {
    _instance.campaign = _instance.campaign || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReadCampaignResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.campaign = new framesystem004.Campaign();
          _reader.readMessage(
            _instance.campaign,
            framesystem004.Campaign.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ReadCampaignResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReadCampaignResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.campaign) {
      _writer.writeMessage(
        1,
        _instance.campaign as any,
        framesystem004.Campaign.serializeBinaryToWriter
      );
    }
  }

  private _campaign?: framesystem004.Campaign;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReadCampaignResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReadCampaignResponse.AsObject>) {
    _value = _value || {};
    this.campaign = _value.campaign
      ? new framesystem004.Campaign(_value.campaign)
      : undefined;
    ReadCampaignResponse.refineValues(this);
  }
  get campaign(): framesystem004.Campaign | undefined {
    return this._campaign;
  }
  set campaign(value: framesystem004.Campaign | undefined) {
    this._campaign = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReadCampaignResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReadCampaignResponse.AsObject {
    return {
      campaign: this.campaign ? this.campaign.toObject() : undefined
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
  ): ReadCampaignResponse.AsProtobufJSON {
    return {
      campaign: this.campaign ? this.campaign.toProtobufJSON(options) : null
    };
  }
}
export module ReadCampaignResponse {
  /**
   * Standard JavaScript object representation for ReadCampaignResponse
   */
  export interface AsObject {
    campaign?: framesystem004.Campaign.AsObject;
  }

  /**
   * Protobuf JSON representation for ReadCampaignResponse
   */
  export interface AsProtobufJSON {
    campaign?: framesystem004.Campaign.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for framesystem.UpdateCampaignRequest
 */
export class UpdateCampaignRequest implements GrpcMessage {
  static id = 'framesystem.UpdateCampaignRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateCampaignRequest();
    UpdateCampaignRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateCampaignRequest) {
    _instance.campaign = _instance.campaign || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateCampaignRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.campaign = new framesystem004.Campaign();
          _reader.readMessage(
            _instance.campaign,
            framesystem004.Campaign.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.fieldMask = new googleProtobuf007.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf007.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateCampaignRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateCampaignRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.campaign) {
      _writer.writeMessage(
        1,
        _instance.campaign as any,
        framesystem004.Campaign.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf007.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _campaign?: framesystem004.Campaign;
  private _fieldMask?: googleProtobuf007.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateCampaignRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateCampaignRequest.AsObject>) {
    _value = _value || {};
    this.campaign = _value.campaign
      ? new framesystem004.Campaign(_value.campaign)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf007.FieldMask(_value.fieldMask)
      : undefined;
    UpdateCampaignRequest.refineValues(this);
  }
  get campaign(): framesystem004.Campaign | undefined {
    return this._campaign;
  }
  set campaign(value: framesystem004.Campaign | undefined) {
    this._campaign = value;
  }
  get fieldMask(): googleProtobuf007.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf007.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateCampaignRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateCampaignRequest.AsObject {
    return {
      campaign: this.campaign ? this.campaign.toObject() : undefined,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined
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
  ): UpdateCampaignRequest.AsProtobufJSON {
    return {
      campaign: this.campaign ? this.campaign.toProtobufJSON(options) : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module UpdateCampaignRequest {
  /**
   * Standard JavaScript object representation for UpdateCampaignRequest
   */
  export interface AsObject {
    campaign?: framesystem004.Campaign.AsObject;
    fieldMask?: googleProtobuf007.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateCampaignRequest
   */
  export interface AsProtobufJSON {
    campaign?: framesystem004.Campaign.AsProtobufJSON | null;
    fieldMask?: googleProtobuf007.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for framesystem.UpdateCampaignResponse
 */
export class UpdateCampaignResponse implements GrpcMessage {
  static id = 'framesystem.UpdateCampaignResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateCampaignResponse();
    UpdateCampaignResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateCampaignResponse) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateCampaignResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    UpdateCampaignResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateCampaignResponse,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateCampaignResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateCampaignResponse.AsObject>) {
    _value = _value || {};
    UpdateCampaignResponse.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateCampaignResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateCampaignResponse.AsObject {
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
  ): UpdateCampaignResponse.AsProtobufJSON {
    return {};
  }
}
export module UpdateCampaignResponse {
  /**
   * Standard JavaScript object representation for UpdateCampaignResponse
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for UpdateCampaignResponse
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for framesystem.DeleteCampaignRequest
 */
export class DeleteCampaignRequest implements GrpcMessage {
  static id = 'framesystem.DeleteCampaignRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteCampaignRequest();
    DeleteCampaignRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteCampaignRequest) {
    _instance.id = _instance.id || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteCampaignRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteCampaignRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteCampaignRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
  }

  private _id?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteCampaignRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteCampaignRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    DeleteCampaignRequest.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteCampaignRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteCampaignRequest.AsObject {
    return {
      id: this.id
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
  ): DeleteCampaignRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module DeleteCampaignRequest {
  /**
   * Standard JavaScript object representation for DeleteCampaignRequest
   */
  export interface AsObject {
    id?: string;
  }

  /**
   * Protobuf JSON representation for DeleteCampaignRequest
   */
  export interface AsProtobufJSON {
    id?: string;
  }
}

/**
 * Message implementation for framesystem.DeleteCampaignResponse
 */
export class DeleteCampaignResponse implements GrpcMessage {
  static id = 'framesystem.DeleteCampaignResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteCampaignResponse();
    DeleteCampaignResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteCampaignResponse) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteCampaignResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    DeleteCampaignResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteCampaignResponse,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteCampaignResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteCampaignResponse.AsObject>) {
    _value = _value || {};
    DeleteCampaignResponse.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteCampaignResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteCampaignResponse.AsObject {
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
  ): DeleteCampaignResponse.AsProtobufJSON {
    return {};
  }
}
export module DeleteCampaignResponse {
  /**
   * Standard JavaScript object representation for DeleteCampaignResponse
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for DeleteCampaignResponse
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for framesystem.ListCampaignsRequest
 */
export class ListCampaignsRequest implements GrpcMessage {
  static id = 'framesystem.ListCampaignsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListCampaignsRequest();
    ListCampaignsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListCampaignsRequest) {
    _instance.minLevel = _instance.minLevel || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListCampaignsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.minLevel = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    ListCampaignsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListCampaignsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.minLevel) {
      _writer.writeEnum(1, _instance.minLevel);
    }
  }

  private _minLevel?: framesystem000.AclLevel;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCampaignsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCampaignsRequest.AsObject>) {
    _value = _value || {};
    this.minLevel = _value.minLevel;
    ListCampaignsRequest.refineValues(this);
  }
  get minLevel(): framesystem000.AclLevel | undefined {
    return this._minLevel;
  }
  set minLevel(value: framesystem000.AclLevel | undefined) {
    this._minLevel = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListCampaignsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListCampaignsRequest.AsObject {
    return {
      minLevel: this.minLevel
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
  ): ListCampaignsRequest.AsProtobufJSON {
    return {
      minLevel: framesystem000.AclLevel[this.minLevel ?? 0]
    };
  }
}
export module ListCampaignsRequest {
  /**
   * Standard JavaScript object representation for ListCampaignsRequest
   */
  export interface AsObject {
    minLevel?: framesystem000.AclLevel;
  }

  /**
   * Protobuf JSON representation for ListCampaignsRequest
   */
  export interface AsProtobufJSON {
    minLevel?: string;
  }
}

/**
 * Message implementation for framesystem.ListCampaignsResponse
 */
export class ListCampaignsResponse implements GrpcMessage {
  static id = 'framesystem.ListCampaignsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListCampaignsResponse();
    ListCampaignsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListCampaignsResponse) {
    _instance.campaigns = _instance.campaigns || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListCampaignsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new framesystem004.Campaign();
          _reader.readMessage(
            messageInitializer1,
            framesystem004.Campaign.deserializeBinaryFromReader
          );
          (_instance.campaigns = _instance.campaigns || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListCampaignsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListCampaignsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.campaigns && _instance.campaigns.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.campaigns as any,
        framesystem004.Campaign.serializeBinaryToWriter
      );
    }
  }

  private _campaigns?: framesystem004.Campaign[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCampaignsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCampaignsResponse.AsObject>) {
    _value = _value || {};
    this.campaigns = (_value.campaigns || []).map(
      m => new framesystem004.Campaign(m)
    );
    ListCampaignsResponse.refineValues(this);
  }
  get campaigns(): framesystem004.Campaign[] | undefined {
    return this._campaigns;
  }
  set campaigns(value: framesystem004.Campaign[] | undefined) {
    this._campaigns = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListCampaignsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListCampaignsResponse.AsObject {
    return {
      campaigns: (this.campaigns || []).map(m => m.toObject())
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
  ): ListCampaignsResponse.AsProtobufJSON {
    return {
      campaigns: (this.campaigns || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ListCampaignsResponse {
  /**
   * Standard JavaScript object representation for ListCampaignsResponse
   */
  export interface AsObject {
    campaigns?: framesystem004.Campaign.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListCampaignsResponse
   */
  export interface AsProtobufJSON {
    campaigns?: framesystem004.Campaign.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for framesystem.CreateCharacterRequest
 */
export class CreateCharacterRequest implements GrpcMessage {
  static id = 'framesystem.CreateCharacterRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateCharacterRequest();
    CreateCharacterRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateCharacterRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateCharacterRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateCharacterRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateCharacterRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateCharacterRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateCharacterRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    CreateCharacterRequest.refineValues(this);
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateCharacterRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateCharacterRequest.AsObject {
    return {
      name: this.name
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
  ): CreateCharacterRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module CreateCharacterRequest {
  /**
   * Standard JavaScript object representation for CreateCharacterRequest
   */
  export interface AsObject {
    name?: string;
  }

  /**
   * Protobuf JSON representation for CreateCharacterRequest
   */
  export interface AsProtobufJSON {
    name?: string;
  }
}

/**
 * Message implementation for framesystem.CreateCharacterResponse
 */
export class CreateCharacterResponse implements GrpcMessage {
  static id = 'framesystem.CreateCharacterResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateCharacterResponse();
    CreateCharacterResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateCharacterResponse) {
    _instance.character = _instance.character || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateCharacterResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.character = new framesystem005.Character();
          _reader.readMessage(
            _instance.character,
            framesystem005.Character.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CreateCharacterResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateCharacterResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.character) {
      _writer.writeMessage(
        1,
        _instance.character as any,
        framesystem005.Character.serializeBinaryToWriter
      );
    }
  }

  private _character?: framesystem005.Character;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateCharacterResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateCharacterResponse.AsObject>) {
    _value = _value || {};
    this.character = _value.character
      ? new framesystem005.Character(_value.character)
      : undefined;
    CreateCharacterResponse.refineValues(this);
  }
  get character(): framesystem005.Character | undefined {
    return this._character;
  }
  set character(value: framesystem005.Character | undefined) {
    this._character = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateCharacterResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateCharacterResponse.AsObject {
    return {
      character: this.character ? this.character.toObject() : undefined
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
  ): CreateCharacterResponse.AsProtobufJSON {
    return {
      character: this.character ? this.character.toProtobufJSON(options) : null
    };
  }
}
export module CreateCharacterResponse {
  /**
   * Standard JavaScript object representation for CreateCharacterResponse
   */
  export interface AsObject {
    character?: framesystem005.Character.AsObject;
  }

  /**
   * Protobuf JSON representation for CreateCharacterResponse
   */
  export interface AsProtobufJSON {
    character?: framesystem005.Character.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for framesystem.ReadCharacterRequest
 */
export class ReadCharacterRequest implements GrpcMessage {
  static id = 'framesystem.ReadCharacterRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReadCharacterRequest();
    ReadCharacterRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReadCharacterRequest) {
    _instance.id = _instance.id || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReadCharacterRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ReadCharacterRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReadCharacterRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
  }

  private _id?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReadCharacterRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReadCharacterRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    ReadCharacterRequest.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReadCharacterRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReadCharacterRequest.AsObject {
    return {
      id: this.id
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
  ): ReadCharacterRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module ReadCharacterRequest {
  /**
   * Standard JavaScript object representation for ReadCharacterRequest
   */
  export interface AsObject {
    id?: string;
  }

  /**
   * Protobuf JSON representation for ReadCharacterRequest
   */
  export interface AsProtobufJSON {
    id?: string;
  }
}

/**
 * Message implementation for framesystem.ReadCharacterResponse
 */
export class ReadCharacterResponse implements GrpcMessage {
  static id = 'framesystem.ReadCharacterResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReadCharacterResponse();
    ReadCharacterResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReadCharacterResponse) {
    _instance.character = _instance.character || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReadCharacterResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.character = new framesystem005.Character();
          _reader.readMessage(
            _instance.character,
            framesystem005.Character.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ReadCharacterResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReadCharacterResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.character) {
      _writer.writeMessage(
        1,
        _instance.character as any,
        framesystem005.Character.serializeBinaryToWriter
      );
    }
  }

  private _character?: framesystem005.Character;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReadCharacterResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReadCharacterResponse.AsObject>) {
    _value = _value || {};
    this.character = _value.character
      ? new framesystem005.Character(_value.character)
      : undefined;
    ReadCharacterResponse.refineValues(this);
  }
  get character(): framesystem005.Character | undefined {
    return this._character;
  }
  set character(value: framesystem005.Character | undefined) {
    this._character = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReadCharacterResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReadCharacterResponse.AsObject {
    return {
      character: this.character ? this.character.toObject() : undefined
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
  ): ReadCharacterResponse.AsProtobufJSON {
    return {
      character: this.character ? this.character.toProtobufJSON(options) : null
    };
  }
}
export module ReadCharacterResponse {
  /**
   * Standard JavaScript object representation for ReadCharacterResponse
   */
  export interface AsObject {
    character?: framesystem005.Character.AsObject;
  }

  /**
   * Protobuf JSON representation for ReadCharacterResponse
   */
  export interface AsProtobufJSON {
    character?: framesystem005.Character.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for framesystem.UpdateCharacterRequest
 */
export class UpdateCharacterRequest implements GrpcMessage {
  static id = 'framesystem.UpdateCharacterRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateCharacterRequest();
    UpdateCharacterRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateCharacterRequest) {
    _instance.character = _instance.character || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateCharacterRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.character = new framesystem005.Character();
          _reader.readMessage(
            _instance.character,
            framesystem005.Character.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.fieldMask = new googleProtobuf007.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf007.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateCharacterRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateCharacterRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.character) {
      _writer.writeMessage(
        1,
        _instance.character as any,
        framesystem005.Character.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf007.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _character?: framesystem005.Character;
  private _fieldMask?: googleProtobuf007.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateCharacterRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateCharacterRequest.AsObject>) {
    _value = _value || {};
    this.character = _value.character
      ? new framesystem005.Character(_value.character)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf007.FieldMask(_value.fieldMask)
      : undefined;
    UpdateCharacterRequest.refineValues(this);
  }
  get character(): framesystem005.Character | undefined {
    return this._character;
  }
  set character(value: framesystem005.Character | undefined) {
    this._character = value;
  }
  get fieldMask(): googleProtobuf007.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf007.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateCharacterRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateCharacterRequest.AsObject {
    return {
      character: this.character ? this.character.toObject() : undefined,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined
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
  ): UpdateCharacterRequest.AsProtobufJSON {
    return {
      character: this.character ? this.character.toProtobufJSON(options) : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module UpdateCharacterRequest {
  /**
   * Standard JavaScript object representation for UpdateCharacterRequest
   */
  export interface AsObject {
    character?: framesystem005.Character.AsObject;
    fieldMask?: googleProtobuf007.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateCharacterRequest
   */
  export interface AsProtobufJSON {
    character?: framesystem005.Character.AsProtobufJSON | null;
    fieldMask?: googleProtobuf007.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for framesystem.UpdateCharacterResponse
 */
export class UpdateCharacterResponse implements GrpcMessage {
  static id = 'framesystem.UpdateCharacterResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateCharacterResponse();
    UpdateCharacterResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateCharacterResponse) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateCharacterResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    UpdateCharacterResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateCharacterResponse,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateCharacterResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateCharacterResponse.AsObject>) {
    _value = _value || {};
    UpdateCharacterResponse.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateCharacterResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateCharacterResponse.AsObject {
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
  ): UpdateCharacterResponse.AsProtobufJSON {
    return {};
  }
}
export module UpdateCharacterResponse {
  /**
   * Standard JavaScript object representation for UpdateCharacterResponse
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for UpdateCharacterResponse
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for framesystem.DeleteCharacterRequest
 */
export class DeleteCharacterRequest implements GrpcMessage {
  static id = 'framesystem.DeleteCharacterRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteCharacterRequest();
    DeleteCharacterRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteCharacterRequest) {
    _instance.id = _instance.id || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteCharacterRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteCharacterRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteCharacterRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
  }

  private _id?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteCharacterRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteCharacterRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    DeleteCharacterRequest.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteCharacterRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteCharacterRequest.AsObject {
    return {
      id: this.id
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
  ): DeleteCharacterRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module DeleteCharacterRequest {
  /**
   * Standard JavaScript object representation for DeleteCharacterRequest
   */
  export interface AsObject {
    id?: string;
  }

  /**
   * Protobuf JSON representation for DeleteCharacterRequest
   */
  export interface AsProtobufJSON {
    id?: string;
  }
}

/**
 * Message implementation for framesystem.DeleteCharacterResponse
 */
export class DeleteCharacterResponse implements GrpcMessage {
  static id = 'framesystem.DeleteCharacterResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteCharacterResponse();
    DeleteCharacterResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteCharacterResponse) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteCharacterResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    DeleteCharacterResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteCharacterResponse,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteCharacterResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteCharacterResponse.AsObject>) {
    _value = _value || {};
    DeleteCharacterResponse.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteCharacterResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteCharacterResponse.AsObject {
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
  ): DeleteCharacterResponse.AsProtobufJSON {
    return {};
  }
}
export module DeleteCharacterResponse {
  /**
   * Standard JavaScript object representation for DeleteCharacterResponse
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for DeleteCharacterResponse
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for framesystem.ListCharactersRequest
 */
export class ListCharactersRequest implements GrpcMessage {
  static id = 'framesystem.ListCharactersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListCharactersRequest();
    ListCharactersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListCharactersRequest) {
    _instance.minLevel = _instance.minLevel || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListCharactersRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.minLevel = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    ListCharactersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListCharactersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.minLevel) {
      _writer.writeEnum(1, _instance.minLevel);
    }
  }

  private _minLevel?: framesystem000.AclLevel;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCharactersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCharactersRequest.AsObject>) {
    _value = _value || {};
    this.minLevel = _value.minLevel;
    ListCharactersRequest.refineValues(this);
  }
  get minLevel(): framesystem000.AclLevel | undefined {
    return this._minLevel;
  }
  set minLevel(value: framesystem000.AclLevel | undefined) {
    this._minLevel = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListCharactersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListCharactersRequest.AsObject {
    return {
      minLevel: this.minLevel
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
  ): ListCharactersRequest.AsProtobufJSON {
    return {
      minLevel: framesystem000.AclLevel[this.minLevel ?? 0]
    };
  }
}
export module ListCharactersRequest {
  /**
   * Standard JavaScript object representation for ListCharactersRequest
   */
  export interface AsObject {
    minLevel?: framesystem000.AclLevel;
  }

  /**
   * Protobuf JSON representation for ListCharactersRequest
   */
  export interface AsProtobufJSON {
    minLevel?: string;
  }
}

/**
 * Message implementation for framesystem.ListCharactersResponse
 */
export class ListCharactersResponse implements GrpcMessage {
  static id = 'framesystem.ListCharactersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListCharactersResponse();
    ListCharactersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListCharactersResponse) {
    _instance.characters = _instance.characters || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListCharactersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new framesystem005.Character();
          _reader.readMessage(
            messageInitializer1,
            framesystem005.Character.deserializeBinaryFromReader
          );
          (_instance.characters = _instance.characters || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListCharactersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListCharactersResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.characters && _instance.characters.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.characters as any,
        framesystem005.Character.serializeBinaryToWriter
      );
    }
  }

  private _characters?: framesystem005.Character[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCharactersResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCharactersResponse.AsObject>) {
    _value = _value || {};
    this.characters = (_value.characters || []).map(
      m => new framesystem005.Character(m)
    );
    ListCharactersResponse.refineValues(this);
  }
  get characters(): framesystem005.Character[] | undefined {
    return this._characters;
  }
  set characters(value: framesystem005.Character[] | undefined) {
    this._characters = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListCharactersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListCharactersResponse.AsObject {
    return {
      characters: (this.characters || []).map(m => m.toObject())
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
  ): ListCharactersResponse.AsProtobufJSON {
    return {
      characters: (this.characters || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ListCharactersResponse {
  /**
   * Standard JavaScript object representation for ListCharactersResponse
   */
  export interface AsObject {
    characters?: framesystem005.Character.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListCharactersResponse
   */
  export interface AsProtobufJSON {
    characters?: framesystem005.Character.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for framesystem.ReadUserRequest
 */
export class ReadUserRequest implements GrpcMessage {
  static id = 'framesystem.ReadUserRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReadUserRequest();
    ReadUserRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReadUserRequest) {
    _instance.id = _instance.id || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReadUserRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ReadUserRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReadUserRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
  }

  private _id?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReadUserRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReadUserRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    ReadUserRequest.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReadUserRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReadUserRequest.AsObject {
    return {
      id: this.id
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
  ): ReadUserRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module ReadUserRequest {
  /**
   * Standard JavaScript object representation for ReadUserRequest
   */
  export interface AsObject {
    id?: string;
  }

  /**
   * Protobuf JSON representation for ReadUserRequest
   */
  export interface AsProtobufJSON {
    id?: string;
  }
}

/**
 * Message implementation for framesystem.ReadUserResponse
 */
export class ReadUserResponse implements GrpcMessage {
  static id = 'framesystem.ReadUserResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReadUserResponse();
    ReadUserResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReadUserResponse) {
    _instance.user = _instance.user || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReadUserResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.user = new framesystem006.User();
          _reader.readMessage(
            _instance.user,
            framesystem006.User.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ReadUserResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReadUserResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.user) {
      _writer.writeMessage(
        1,
        _instance.user as any,
        framesystem006.User.serializeBinaryToWriter
      );
    }
  }

  private _user?: framesystem006.User;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReadUserResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReadUserResponse.AsObject>) {
    _value = _value || {};
    this.user = _value.user ? new framesystem006.User(_value.user) : undefined;
    ReadUserResponse.refineValues(this);
  }
  get user(): framesystem006.User | undefined {
    return this._user;
  }
  set user(value: framesystem006.User | undefined) {
    this._user = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReadUserResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReadUserResponse.AsObject {
    return {
      user: this.user ? this.user.toObject() : undefined
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
  ): ReadUserResponse.AsProtobufJSON {
    return {
      user: this.user ? this.user.toProtobufJSON(options) : null
    };
  }
}
export module ReadUserResponse {
  /**
   * Standard JavaScript object representation for ReadUserResponse
   */
  export interface AsObject {
    user?: framesystem006.User.AsObject;
  }

  /**
   * Protobuf JSON representation for ReadUserResponse
   */
  export interface AsProtobufJSON {
    user?: framesystem006.User.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for framesystem.UpdateUserRequest
 */
export class UpdateUserRequest implements GrpcMessage {
  static id = 'framesystem.UpdateUserRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateUserRequest();
    UpdateUserRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateUserRequest) {
    _instance.user = _instance.user || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateUserRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.user = new framesystem006.User();
          _reader.readMessage(
            _instance.user,
            framesystem006.User.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.fieldMask = new googleProtobuf007.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf007.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateUserRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateUserRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.user) {
      _writer.writeMessage(
        1,
        _instance.user as any,
        framesystem006.User.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf007.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _user?: framesystem006.User;
  private _fieldMask?: googleProtobuf007.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateUserRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateUserRequest.AsObject>) {
    _value = _value || {};
    this.user = _value.user ? new framesystem006.User(_value.user) : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf007.FieldMask(_value.fieldMask)
      : undefined;
    UpdateUserRequest.refineValues(this);
  }
  get user(): framesystem006.User | undefined {
    return this._user;
  }
  set user(value: framesystem006.User | undefined) {
    this._user = value;
  }
  get fieldMask(): googleProtobuf007.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf007.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateUserRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateUserRequest.AsObject {
    return {
      user: this.user ? this.user.toObject() : undefined,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined
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
  ): UpdateUserRequest.AsProtobufJSON {
    return {
      user: this.user ? this.user.toProtobufJSON(options) : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module UpdateUserRequest {
  /**
   * Standard JavaScript object representation for UpdateUserRequest
   */
  export interface AsObject {
    user?: framesystem006.User.AsObject;
    fieldMask?: googleProtobuf007.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateUserRequest
   */
  export interface AsProtobufJSON {
    user?: framesystem006.User.AsProtobufJSON | null;
    fieldMask?: googleProtobuf007.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for framesystem.UpdateUserResponse
 */
export class UpdateUserResponse implements GrpcMessage {
  static id = 'framesystem.UpdateUserResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateUserResponse();
    UpdateUserResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateUserResponse) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateUserResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    UpdateUserResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateUserResponse,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateUserResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateUserResponse.AsObject>) {
    _value = _value || {};
    UpdateUserResponse.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateUserResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateUserResponse.AsObject {
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
  ): UpdateUserResponse.AsProtobufJSON {
    return {};
  }
}
export module UpdateUserResponse {
  /**
   * Standard JavaScript object representation for UpdateUserResponse
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for UpdateUserResponse
   */
  export interface AsProtobufJSON {}
}
