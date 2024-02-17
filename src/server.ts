import { Server, loadPackageDefinition, ServerCredentials } from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'
import { resolve } from 'node:path'
import CategoryService from './services/category.service'
import { CONFIG_PACKAGE } from './constants/config-package.constant'
import { ReflectionService } from '@grpc/reflection'
import { ProtoGrpcType } from '../proto/course_category'

const PROTO_PATH = resolve('proto/course_category.proto')

async function bootstrap() {
    const packageDefinition = loadSync(PROTO_PATH, CONFIG_PACKAGE) 

    const course_category = loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

    const server = new Server()
    const reflection = new ReflectionService(packageDefinition);
    reflection.addToServer(server);

    const categoryService = new CategoryService()
    server.addService(course_category.courseCategory.CategoryService.service, {
        listCategory: categoryService.listCategory,
        createCategory: categoryService.createCategory,
        getCategory: categoryService.getCategory,
        createCategoryStream: categoryService.createCategoryStream,
        createCategoryStreamBidirectional: categoryService.createCategoryStreamBidirectional
    })
    server.bindAsync(
        '0.0.0.0:50051', 
        ServerCredentials.createInsecure(), 
        (err) => err ? console.log(err) : console.log('Server is running')
    );
}

bootstrap();