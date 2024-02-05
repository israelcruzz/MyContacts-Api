import { prismaClient } from '../database/prismaClient'

class CategoryRepository {
    async list() {
        return await prismaClient.category.findMany()
    }

    async show(id: any) {
        const category = await prismaClient.category.findUnique({
            where: {
                id,
            },
        })

        return category
    }

    async create(name: any) {
        const newCategory = await prismaClient.category.create({
            data: {
                name,
            },
        })

        return newCategory
    }

    async delete(id: any) {
        await prismaClient.category.delete({
            where: {
                id,
            },
        })
    }

    async update({ id, name }: any) {
        const updateCategory = await prismaClient.category.update({
            where: {
                id,
            },
            data: {
                name,
            },
        })

        return updateCategory
    }
}

export default new CategoryRepository()