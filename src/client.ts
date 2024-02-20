import { loadPackageDefinition, credentials } from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'
import { resolve } from 'node:path'
import { setTimeout } from 'node:timers/promises'
import { ProtoGrpcType } from 'proto/course_category'

const PROTO_PATH = resolve('proto/course_category.proto')

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

const course_category = loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

const client = new course_category.courseCategory.CategoryService(
  'localhost:50051',
  credentials.createInsecure() 
);

const categories = [
  {
    "name": "Client streams 1",
    "description": "DESC CLIENT STREAMS 1"
  },
  {
    "name": "Client streams 2",
    "description": "DESC CLIENT STREAMS 2"
  },
  {
    "name": "Client streams 3",
    "description": "DESC CLIENT STREAMS 3"
  },
  { 
    "name": "Client streams 4", 
    "description": "DESC CLIENT STREAMS 4"
  },
  {
    "name": "Client streams 5",
    "description": "DESC CLIENT STREAMS 5"
  },
  {
    "name": "Client streams 6",
    "description": "DESC CLIENT STREAMS 6"
  }
]

client.createCategory(
  {
    name: "TESTE CLIENTE 1",
    "description": "DESC CLIENTE 1"
  }, 
  (err, response) => {
    if (err) {
      console.error(err)
      return;
    }
    console.log('createCategory', response?.category)
  }
) 

client.listCategory({}, (err, response) => {
  if (err) {
    console.error(err)
    return;
  }
  console.log('listCategory', response);
});

client.getCategory(
    { 
      id: '335c2325-10f9-4e49-986d-7ff5c5157bba'
    },
    (err, response) => {
      if (err) {
        console.error(err)
        return;
      }
      console.log('getCategory', response)
    }
) 

async function createCategoryStream() {
  const call = client.createCategoryStream((err, res) => {
    console.log('createCategoryStream', res)
  })

  for (const category of categories) {
    await setTimeout(10)
    call.write(category)
  }

  call.end() 
}

async function createCategoryStreamBidirectional() {
  const call = client.createCategoryStreamBidirectional()

  call.on('data', (data) => {
    console.log('createCategoryStreamBidirectional', data)
  })
  
  for (const category of categories) {
    await setTimeout(10)
    call.write(category)
  }

  call.end()
}

createCategoryStreamBidirectional()
createCategoryStream()


