import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { CategoryServiceClient as _courseCategory_CategoryServiceClient, CategoryServiceDefinition as _courseCategory_CategoryServiceDefinition } from './courseCategory/CategoryService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  courseCategory: {
    Blank: MessageTypeDefinition
    Category: MessageTypeDefinition
    CategoryGetRequest: MessageTypeDefinition
    CategoryList: MessageTypeDefinition
    CategoryResponse: MessageTypeDefinition
    CategoryService: SubtypeConstructor<typeof grpc.Client, _courseCategory_CategoryServiceClient> & { service: _courseCategory_CategoryServiceDefinition }
    CreateCategoryRequest: MessageTypeDefinition
  }
}

