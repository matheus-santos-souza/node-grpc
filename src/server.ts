import { Server, loadPackageDefinition, ServerCredentials } from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'
import { resolve } from 'node:path'
import { randomUUID } from 'node:crypto'

const listCategories = { 
    categories: [
        {
            id: randomUUID(),
            name: 'TESTE 1',
            description: 'DESC 1'
        },
        {
            id: randomUUID(),
            name: 'TESTE 2',
            description: 'DESC 2'
        }
    ]
}

function listCategory(call: any, callback: any) {
    callback(null, listCategories)
}

const PROTO_PATH = resolve('proto/course_category.proto')

async function bootstrap() {
    const packageDefinition = loadSync(
        PROTO_PATH
    ) 

    const course_category: any = loadPackageDefinition(packageDefinition).courseCategory

    const server = new Server()
    server.addService(course_category.CategoryService.service, {
        listCategory: listCategory
    })
    server.bindAsync(
        '0.0.0.0:50051', 
        ServerCredentials.createInsecure(), 
        (err) => err ? console.log(err) : console.log('Server is running')
    );
}

bootstrap();