import { ServerUnaryCall, ServerReadableStream, sendUnaryData, status } from "@grpc/grpc-js"
import { randomUUID } from "node:crypto"
import { Blank } from "proto/courseCategory/Blank"
import { CategoryList__Output } from "proto/courseCategory/CategoryList"
import prisma from "src/prisma"
import validantionError from '../constants/error-validation.constant'
import validationRequired from "src/constants/validantion-required.constant"
import { CategoryResponse__Output } from "proto/courseCategory/CategoryResponse"
import { CategoryGetRequest } from "proto/courseCategory/CategoryGetRequest"
import { CreateCategoryRequest } from "proto/courseCategory/CreateCategoryRequest"
import { Category, Category__Output } from "proto/courseCategory/Category"

export default class CategoryService {

    async listCategory(
        _: ServerUnaryCall<Blank, Blank>, 
        callback: sendUnaryData<CategoryList__Output>
    ) {
        try {
            const categories = await prisma.category.findMany()
            const categoryList: CategoryList__Output = {
                categories
            }
            callback(null, categoryList)
        } catch (error: any) {
            const err = validantionError(error)
            callback(err);
        }
    }

    async createCategory(
        { request }: ServerUnaryCall<CreateCategoryRequest, CreateCategoryRequest>, 
        callback: sendUnaryData<CategoryResponse__Output>
    ) {
        const validantion = validationRequired(request)
        if (validantion.length) {
            callback({ code: status.INVALID_ARGUMENT, details: `Required fields: [${validantion}]`});
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
            callback(null, categoryResponse)
        } catch (error: any) {
            const err = validantionError(error)
            callback(err);
        }
    }

    async getCategory(
        { request }: ServerUnaryCall<CategoryGetRequest, CategoryGetRequest>, 
        callback: sendUnaryData<CategoryResponse__Output>
    ) {
        const validantion = validationRequired(request)
        if (validantion.length) {
            callback({ code: status.INVALID_ARGUMENT, details: `Required fields: [${validantion}]`});
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
            callback(null, categoryResponse)
        } catch (error: any) {
            const err = validantionError(error)
            callback(err);
        }
    }

    async createCategoryStream(
        call: ServerReadableStream<CreateCategoryRequest, CreateCategoryRequest>, 
        callback: sendUnaryData<CategoryList__Output>
    ) {
        const setId = new Set<string>()
        call.on('data', async (request: Category__Output) => {
            const validantion = validationRequired(request)
            if (validantion.length) {
                callback({ code: status.INVALID_ARGUMENT, details: `Required fields: [${validantion}]`});
            }
            try {
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
                setId.add(category.id)
            } catch (error) {
                const err = validantionError(error)
                callback(err);
            }   
        });
          
        call.on('end', async () => {
            const categories = await prisma.category.findMany({
                where: {
                    id: { in: [...setId] }
                }
            })
            const categoryList: CategoryList__Output = { 
                categories: categories
            }
            callback(null, categoryList);
        });

    }
}