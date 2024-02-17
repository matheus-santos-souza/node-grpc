import { status } from "@grpc/grpc-js"

export default function validantionError(error: any) {
    let details = 'Error Internal'
    let code = status.INTERNAL
    if (error.code === 'P2002') {
        details = `Unique constraint failed on the fields: [${error.meta.target}]`
        code = status.ALREADY_EXISTS
    }
    return { code, details }
}