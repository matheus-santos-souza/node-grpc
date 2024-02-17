import { loadPackageDefinition, credentials } from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'
import { resolve } from 'node:path'


const PROTO_PATH = resolve('proto/course_category.proto')

async function client() {
    const packageDefinition = loadSync(
        PROTO_PATH,
        {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true
        }
    ) 

    const course_category: any = loadPackageDefinition(packageDefinition).courseCategory

    const client = new course_category.CategoryService(
        'localhost:50051',
        credentials.createInsecure()
    );

    client.createCategory(
        {
        name: "TESTE 1",
        description: "DESC 1"
        }, 
        (err: any, response: any) => {
            console.log(response);
        }
    );

    client.listCategory({}, (err: any, response: any) => {
        console.log(response);
    });


    
}

client();