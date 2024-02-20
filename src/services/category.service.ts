import { ServerUnaryCall, ServerReadableStream, ServerDuplexStream, sendUnaryData, status } from "@grpc/grpc-js"
import { randomUUID } from "node:crypto"
import { Blank } from "proto/courseCategory/Blank"
import { CategoryList__Output } from "proto/courseCategory/CategoryList"
import prisma from "src/prisma"
import validantionError from '../constants/error-validation.constant'
import validationRequired from "src/constants/validantion-required.constant"
import { CategoryResponse__Output } from "proto/courseCategory/CategoryResponse"
import { CategoryGetRequest } from "proto/courseCategory/CategoryGetRequest"
import { CreateCategoryRequest } from "proto/courseCategory/CreateCategoryRequest"
import { Category__Output } from "proto/courseCategory/Category"

export class CategoryService {
    listCategory = async(
        _: ServerUnaryCall<Blank, Blank>, 
        callback: sendUnaryData<CategoryList__Output>
    ) => {
        try {
            const categories = await prisma.category.findMany()
            const categoryList: CategoryList__Output = {
                categories
            }
            return callback(null, categoryList)
        } catch (error: any) {
            const err = validantionError(error)
            return callback(err);
        }
    }

    createCategory = async(
        { request }: ServerUnaryCall<CreateCategoryRequest, CreateCategoryRequest>, 
        callback: sendUnaryData<CategoryResponse__Output>
    ) => {
        const validantion = validationRequired(request)
        if (validantion.length) {
            return callback({ code: status.INVALID_ARGUMENT, details: `Required fields: [${validantion}]`});
        }

        try {
            const category = await prisma.category.create({
                data: {
                    id: randomUUID(),
                    name: request.name || '',
                    description: request.description || ''
                }
            })
            const categoryResponse: CategoryResponse__Output = {
                category
            }
            return callback(null, categoryResponse)
        } catch (error: any) {
            const err = validantionError(error)
            return callback(err);
        }
    }

    getCategory = async(
        { request }: ServerUnaryCall<CategoryGetRequest, CategoryGetRequest>, 
        callback: sendUnaryData<CategoryResponse__Output>
    ) => {
        const validantion = validationRequired(request)
        if (validantion.length) {
            return callback({ code: status.INVALID_ARGUMENT, details: `Required fields: [${validantion}]`});
        }
        
        try {
            const category = await prisma.category.findUnique({
                where: {
                    id: request.id
                }
            })
            const categoryResponse: CategoryResponse__Output = {
                category
            }
            return callback(null, categoryResponse)
        } catch (error: any) {
            const err = validantionError(error)
            return callback(err);
        }
    }

    createCategoryStream = (
        call: ServerReadableStream<CreateCategoryRequest, CreateCategoryRequest>, 
        callback: sendUnaryData<CategoryList__Output>
    ) => {
        const setId = new Set<string>()
        call.on('data', async (request: Category__Output) => {
            const validantion = validationRequired(request)
            if (validantion.length) {
                callback({ code: status.INVALID_ARGUMENT, details: `Required fields: [${validantion}]`});
            }
            try {
                call.pause()
                const category = await prisma.category.upsert({
                    where: {
                        name: request.name
                    },
                    update: {
                        description: request.description || ''
                    },
                    create: {
                        id: randomUUID(),
                        name: request.name || '',
                        description: request.description || ''
                    }
                })
                console.log(category)
                setId.add(JSON.stringify(category))
                call.resume()
            } catch (error) {
                const err = validantionError(error) 
                callback(err);
            } 
            
        });

        call.on('end', () => {
            const categories = [...setId].map(item => JSON.parse(item))
            const categoryList: CategoryList__Output = { 
                categories: categories 
            }

            callback(null, categoryList); 
        });
    }

    createCategoryStreamBidirectional = async(
        call: ServerDuplexStream<CreateCategoryRequest, CreateCategoryRequest>
    ) => {
        call.on('data', async (request: Category__Output) => {
            call.pause()
            const category = await prisma.category.upsert({
                where: {
                    name: request.name
                },
                update: {
                    description: request.description
                },
                create: {
                    id: randomUUID(),
                    name: request.name,
                    description: request.description
                }
            })
    
            call.write(category);
            call.resume();
        });

        call.on('end', () => {
            call.end()
        });
    }
}