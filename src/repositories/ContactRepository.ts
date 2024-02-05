import { prismaClient } from '../database/prismaClient'

class ContactRepository {
    async findAll(orderBy: any) {
        return await prismaClient.contact.findMany({
            orderBy: {
                name: orderBy,
            },
            include: {
                category: {
                    select: {
                        name: true,
                    },
                },
            },
        })
    }

    async findById(id: any) {
        const user = await prismaClient.contact.findUnique({
            where: {
                id,
            },
            include: {
                category: {
                    select: {
                        name: true
                    }
                }
            }
        })

        return user
    }

    async findByEmail(email: any) {
        const userWithEmail = await prismaClient.contact.findUnique({
            where: {
                email,
            },
        })

        return userWithEmail
    }

    async delete(id: any) {
        await prismaClient.contact.delete({
            where: {
                id,
            },
        })
    }

    async create({ name, phone, email, categoryId }: any) {
        const newUser = await prismaClient.contact.create({
            data: {
                name,
                phone,
                email,
                categoryId,
            },
        })

        return newUser
    }

    async update({ id, name, phone, email, categoryId }: any) {
        const updateUser = await prismaClient.contact.update({
            where: {
                id,
            },
            data: {
                name,
                phone,
                email,
                categoryId,
            },
        })

        return updateUser
    }
}

export default new ContactRepository()
