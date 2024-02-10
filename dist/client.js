"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_js_1 = require("@grpc/grpc-js");
const proto_loader_1 = require("@grpc/proto-loader");
const node_path_1 = require("node:path");
const PROTO_PATH = (0, node_path_1.resolve)('proto/course_category.proto');
async function bootstrap() {
    const packageDefinition = (0, proto_loader_1.loadSync)(PROTO_PATH);
    const course_category = (0, grpc_js_1.loadPackageDefinition)(packageDefinition).courseCategory;
    const client = new course_category.CategoryService('localhost:50051', grpc_js_1.credentials.createInsecure());
    client.listCategory(null, function (err, response) {
        console.log(response);
    });
}
bootstrap();
//# sourceMappingURL=client.js.map