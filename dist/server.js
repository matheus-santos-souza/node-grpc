"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_js_1 = require("@grpc/grpc-js");
const proto_loader_1 = require("@grpc/proto-loader");
const node_path_1 = require("node:path");
const node_crypto_1 = require("node:crypto");
const listCategories = {
    categories: [
        {
            id: (0, node_crypto_1.randomUUID)(),
            name: 'TESTE 1',
            description: 'DESC 1'
        },
        {
            id: (0, node_crypto_1.randomUUID)(),
            name: 'TESTE 2',
            description: 'DESC 2'
        }
    ]
};
function listCategory(call, callback) {
    callback(null, listCategories);
}
const PROTO_PATH = (0, node_path_1.resolve)('proto/course_category.proto');
async function bootstrap() {
    const packageDefinition = (0, proto_loader_1.loadSync)(PROTO_PATH);
    const course_category = (0, grpc_js_1.loadPackageDefinition)(packageDefinition).courseCategory;
    const server = new grpc_js_1.Server();
    server.addService(course_category.CategoryService.service, {
        listCategory: listCategory
    });
    server.bindAsync('0.0.0.0:50051', grpc_js_1.ServerCredentials.createInsecure(), (err) => err ? console.log(err) : console.log('Server is running'));
}
bootstrap();
//# sourceMappingURL=server.js.map