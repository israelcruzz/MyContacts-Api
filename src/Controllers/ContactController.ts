import { Request, Response } from 'express'
import ContactRepository from '../repositories/ContactRepository'

class ContactController {
    async index(req: Request, res: Response) {
        try {
            const { orderBy } = req.query
            const contacts = await ContactRepository.findAll(orderBy)

            res.json(contacts)
        } catch (error) {
            return res.status(400).json({ error: 'Error in Server' })
        }
    }

    async show(req: Request, res: Response) {
        try {
            const { id } = req.params

            const contact = await ContactRepository.findById(id)

            if (!contact) {
                return res.status(404).json({ error: 'Contact Not Exist' })
            }

            res.json(contact)
        } catch (error) {
            return res.status(400).json({ error: 'Error in Server' })
        }
    }

    async store(req: Request, res: Response) {
        try {
            const { name, phone, email, categoryId } = req.body

            const contactExists = await ContactRepository.findByEmail(email)

            if (contactExists) {
                return res.status(400).json({ error: 'Contact Already Exists' })
            }

            const newContact = await ContactRepository.create({
                name,
                phone,
                email,
                categoryId,
            })

            res.json(newContact)
        } catch (error) {
            return res.status(400).json({ error: 'Error in Server' })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const { name, phone, email, categoryId } = req.body

            const contactExist = await ContactRepository.findById(id)
            if (!contactExist) {
                return res.status(400).json({ error: 'Contact Not Exist' })
            }

            const emailExist = await ContactRepository.findByEmail(email)
            if (emailExist) {
                return res.status(400).json({ error: 'Contact Already Exists' })
            }

            if (!name) {
                return res.status(400).json({ error: 'Name Is Required' })
            }

            const updateContact = await ContactRepository.update({
                id,
                name,
                phone,
                email,
                categoryId,
            })
            res.json(updateContact)
        } catch (error) {
            return res.status(400).json({ error: 'Error in Server' })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            const contact = await ContactRepository.findById(id)

            if (!contact) {
                return res.status(404).json({ error: 'User Not Exist' })
            }

            await ContactRepository.delete(id)
            res.sendStatus(204)
        } catch (error) {
            return res.status(400).json({ error: 'Error in Server' })
        }
    }
}

export default new ContactController()