import { Request, Response } from 'express'
import CategoryRepository from '../repositories/CategoryRepository'

class CategoryController {
    async index(req: Request, res: Response) {
        try {
            const categorys = await CategoryRepository.list()

            res.json(categorys)
        } catch (error) {
            console.log(error);
            
            return res.status(400).json({ error: 'Error in Server' })
        }
    }

    async show(req: Request, res: Response) {
        try {
            const { id } = req.params
            const category = await CategoryRepository.show(id)

            res.json(category)
        } catch (error) {
            return res.status(400).json({ error: 'Error in Server' })
        }
    }

    async store(req: Request, res: Response) {
        try {
            const { name } = req.body
            const newCategory = await CategoryRepository.create(name)

            res.json(newCategory)
        } catch (error) {
            return res.status(400).json({ error: 'Error in Server' })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params
            await CategoryRepository.delete(id)

            res.sendStatus(204)
        } catch (error) {
            return res.status(400).json({ error: 'Error in Server' })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const { name } = req.body

            const updateCategory = await CategoryRepository.update({ id, name })

            res.json(updateCategory)
        } catch (error) {
            return res.status(400).json({ error: 'Error in Server' })
        }
    }
}

export default new CategoryController()
