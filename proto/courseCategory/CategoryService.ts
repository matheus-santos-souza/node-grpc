// Original file: proto/course_category.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Blank as _courseCategory_Blank, Blank__Output as _courseCategory_Blank__Output } from '../courseCategory/Blank';
import type { Category as _courseCategory_Category, Category__Output as _courseCategory_Category__Output } from '../courseCategory/Category';
import type { CategoryGetRequest as _courseCategory_CategoryGetRequest, CategoryGetRequest__Output as _courseCategory_CategoryGetRequest__Output } from '../courseCategory/CategoryGetRequest';
import type { CategoryList as _courseCategory_CategoryList, CategoryList__Output as _courseCategory_CategoryList__Output } from '../courseCategory/CategoryList';
import type { CategoryResponse as _courseCategory_CategoryResponse, CategoryResponse__Output as _courseCategory_CategoryResponse__Output } from '../courseCategory/CategoryResponse';
import type { CreateCategoryRequest as _courseCategory_CreateCategoryRequest, CreateCategoryRequest__Output as _courseCategory_CreateCategoryRequest__Output } from '../courseCategory/CreateCategoryRequest';

export interface CategoryServiceClient extends grpc.Client {
  CreateCategory(argument: _courseCategory_CreateCategoryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_courseCategory_CategoryResponse__Output>): grpc.ClientUnaryCall;
  CreateCategory(argument: _courseCategory_CreateCategoryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_courseCategory_CategoryResponse__Output>): grpc.ClientUnaryCall;
  CreateCategory(argument: _courseCategory_CreateCategoryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_courseCategory_CategoryResponse__Output>): grpc.ClientUnaryCall;
  CreateCategory(argument: _courseCategory_CreateCategoryRequest, callback: grpc.requestCallback<_courseCategory_CategoryResponse__Output>): grpc.ClientUnaryCall;
  createCategory(argument: _courseCategory_CreateCategoryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_courseCategory_CategoryResponse__Output>): grpc.ClientUnaryCall;
  createCategory(argument: _courseCategory_CreateCategoryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_courseCategory_CategoryResponse__Output>): grpc.ClientUnaryCall;
  createCategory(argument: _courseCategory_CreateCategoryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_courseCategory_CategoryResponse__Output>): grpc.ClientUnaryCall;
  createCategory(argument: _courseCategory_CreateCategoryRequest, callback: grpc.requestCallback<_courseCategory_CategoryResponse__Output>): grpc.ClientUnaryCall;
  
  CreateCategoryStream(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_courseCategory_CategoryList__Output>): grpc.ClientWritableStream<_courseCategory_CreateCategoryRequest>;
  CreateCategoryStream(metadata: grpc.Metadata, callback: grpc.requestCallback<_courseCategory_CategoryList__Output>): grpc.ClientWritableStream<_courseCategory_CreateCategoryRequest>;
  CreateCategoryStream(options: grpc.CallOptions, callback: grpc.requestCallback<_courseCategory_CategoryList__Output>): grpc.ClientWritableStream<_courseCategory_CreateCategoryRequest>;
  CreateCategoryStream(callback: grpc.requestCallback<_courseCategory_CategoryList__Output>): grpc.ClientWritableStream<_courseCategory_CreateCategoryRequest>;
  createCategoryStream(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_courseCategory_CategoryList__Output>): grpc.ClientWritableStream<_courseCategory_CreateCategoryRequest>;
  createCategoryStream(metadata: grpc.Metadata, callback: grpc.requestCallback<_courseCategory_CategoryList__Output>): grpc.ClientWritableStream<_courseCategory_CreateCategoryRequest>;
  createCategoryStream(options: grpc.CallOptions, callback: grpc.requestCallback<_courseCategory_CategoryList__Output>): grpc.ClientWritableStream<_courseCategory_CreateCategoryRequest>;
  createCategoryStream(callback: grpc.requestCallback<_courseCategory_CategoryList__Output>): grpc.ClientWritableStream<_courseCategory_CreateCategoryRequest>;
  
  CreateCategoryStreamBidirectional(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_courseCategory_CreateCategoryRequest, _courseCategory_Category__Output>;
  CreateCategoryStreamBidirectional(options?: grpc.CallOptions): grpc.ClientDuplexStream<_courseCategory_CreateCategoryRequest, _courseCategory_Category__Output>;
  createCategoryStreamBidirectional(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_courseCategory_CreateCategoryRequest, _courseCategory_Category__Output>;
  createCategoryStreamBidirectional(options?: grpc.CallOptions): grpc.ClientDuplexStream<_courseCategory_CreateCategoryRequest, _courseCategory_Category__Output>;
  
  GetCategory(argument: _courseCategory_CategoryGetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_courseCategory_CategoryResponse__Output>): grpc.ClientUnaryCall;
  GetCategory(argument: _courseCategory_CategoryGetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_courseCategory_CategoryResponse__Output>): grpc.ClientUnaryCall;
  GetCategory(argument: _courseCategory_CategoryGetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_courseCategory_CategoryResponse__Output>): grpc.ClientUnaryCall;
  GetCategory(argument: _courseCategory_CategoryGetRequest, callback: grpc.requestCallback<_courseCategory_CategoryResponse__Output>): grpc.ClientUnaryCall;
  getCategory(argument: _courseCategory_CategoryGetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_courseCategory_CategoryResponse__Output>): grpc.ClientUnaryCall;
  getCategory(argument: _courseCategory_CategoryGetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_courseCategory_CategoryResponse__Output>): grpc.ClientUnaryCall;
  getCategory(argument: _courseCategory_CategoryGetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_courseCategory_CategoryResponse__Output>): grpc.ClientUnaryCall;
  getCategory(argument: _courseCategory_CategoryGetRequest, callback: grpc.requestCallback<_courseCategory_CategoryResponse__Output>): grpc.ClientUnaryCall;
  
  ListCategory(argument: _courseCategory_Blank, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_courseCategory_CategoryList__Output>): grpc.ClientUnaryCall;
  ListCategory(argument: _courseCategory_Blank, metadata: grpc.Metadata, callback: grpc.requestCallback<_courseCategory_CategoryList__Output>): grpc.ClientUnaryCall;
  ListCategory(argument: _courseCategory_Blank, options: grpc.CallOptions, callback: grpc.requestCallback<_courseCategory_CategoryList__Output>): grpc.ClientUnaryCall;
  ListCategory(argument: _courseCategory_Blank, callback: grpc.requestCallback<_courseCategory_CategoryList__Output>): grpc.ClientUnaryCall;
  listCategory(argument: _courseCategory_Blank, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_courseCategory_CategoryList__Output>): grpc.ClientUnaryCall;
  listCategory(argument: _courseCategory_Blank, metadata: grpc.Metadata, callback: grpc.requestCallback<_courseCategory_CategoryList__Output>): grpc.ClientUnaryCall;
  listCategory(argument: _courseCategory_Blank, options: grpc.CallOptions, callback: grpc.requestCallback<_courseCategory_CategoryList__Output>): grpc.ClientUnaryCall;
  listCategory(argument: _courseCategory_Blank, callback: grpc.requestCallback<_courseCategory_CategoryList__Output>): grpc.ClientUnaryCall;
  
}

export interface CategoryServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateCategory: grpc.handleUnaryCall<_courseCategory_CreateCategoryRequest__Output, _courseCategory_CategoryResponse>;
  
  CreateCategoryStream: grpc.handleClientStreamingCall<_courseCategory_CreateCategoryRequest__Output, _courseCategory_CategoryList>;
  
  CreateCategoryStreamBidirectional: grpc.handleBidiStreamingCall<_courseCategory_CreateCategoryRequest__Output, _courseCategory_Category>;
  
  GetCategory: grpc.handleUnaryCall<_courseCategory_CategoryGetRequest__Output, _courseCategory_CategoryResponse>;
  
  ListCategory: grpc.handleUnaryCall<_courseCategory_Blank__Output, _courseCategory_CategoryList>;
  
}

export interface CategoryServiceDefinition extends grpc.ServiceDefinition {
  CreateCategory: MethodDefinition<_courseCategory_CreateCategoryRequest, _courseCategory_CategoryResponse, _courseCategory_CreateCategoryRequest__Output, _courseCategory_CategoryResponse__Output>
  CreateCategoryStream: MethodDefinition<_courseCategory_CreateCategoryRequest, _courseCategory_CategoryList, _courseCategory_CreateCategoryRequest__Output, _courseCategory_CategoryList__Output>
  CreateCategoryStreamBidirectional: MethodDefinition<_courseCategory_CreateCategoryRequest, _courseCategory_Category, _courseCategory_CreateCategoryRequest__Output, _courseCategory_Category__Output>
  GetCategory: MethodDefinition<_courseCategory_CategoryGetRequest, _courseCategory_CategoryResponse, _courseCategory_CategoryGetRequest__Output, _courseCategory_CategoryResponse__Output>
  ListCategory: MethodDefinition<_courseCategory_Blank, _courseCategory_CategoryList, _courseCategory_Blank__Output, _courseCategory_CategoryList__Output>
}
