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
  static refineValues(_instance: ListCampaignsRequest) {}

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
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCampaignsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCampaignsRequest.AsObject>) {
    _value = _value || {};
    ListCampaignsRequest.refineValues(this);
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
  ): ListCampaignsRequest.AsProtobufJSON {
    return {};
  }
}
export module ListCampaignsRequest {
  /**
   * Standard JavaScript object representation for ListCampaignsRequest
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for ListCampaignsRequest
   */
  export interface AsProtobufJSON {}
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
    _instance.campaignId = _instance.campaignId || [];
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
          const messageInitializer1 = new CampaignId();
          _reader.readMessage(
            messageInitializer1,
            CampaignId.deserializeBinaryFromReader
          );
          (_instance.campaignId = _instance.campaignId || []).push(
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
    if (_instance.campaignId && _instance.campaignId.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.campaignId as any,
        CampaignId.serializeBinaryToWriter
      );
    }
  }

  private _campaignId?: CampaignId[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCampaignsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCampaignsResponse.AsObject>) {
    _value = _value || {};
    this.campaignId = (_value.campaignId || []).map(m => new CampaignId(m));
    ListCampaignsResponse.refineValues(this);
  }
  get campaignId(): CampaignId[] | undefined {
    return this._campaignId;
  }
  set campaignId(value: CampaignId[] | undefined) {
    this._campaignId = value;
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
      campaignId: (this.campaignId || []).map(m => m.toObject())
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
      campaignId: (this.campaignId || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ListCampaignsResponse {
  /**
   * Standard JavaScript object representation for ListCampaignsResponse
   */
  export interface AsObject {
    campaignId?: CampaignId.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListCampaignsResponse
   */
  export interface AsProtobufJSON {
    campaignId?: CampaignId.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for framesystem.CampaignId
 */
export class CampaignId implements GrpcMessage {
  static id = 'framesystem.CampaignId';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CampaignId();
    CampaignId.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CampaignId) {
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CampaignId,
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
        default:
          _reader.skipField();
      }
    }

    CampaignId.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: CampaignId, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
  }

  private _id?: string;
  private _name?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CampaignId to deeply clone from
   */
  constructor(_value?: RecursivePartial<CampaignId.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    CampaignId.refineValues(this);
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

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CampaignId.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CampaignId.AsObject {
    return {
      id: this.id,
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
  ): CampaignId.AsProtobufJSON {
    return {
      id: this.id,
      name: this.name
    };
  }
}
export module CampaignId {
  /**
   * Standard JavaScript object representation for CampaignId
   */
  export interface AsObject {
    id?: string;
    name?: string;
  }

  /**
   * Protobuf JSON representation for CampaignId
   */
  export interface AsProtobufJSON {
    id?: string;
    name?: string;
  }
}
