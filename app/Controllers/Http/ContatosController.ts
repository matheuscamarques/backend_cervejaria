import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Contato from "App/Models/Contato"

export default class ContatosController {
    public async index ({ request, response }: HttpContextContract) {
        const contatoes = await Contato.all()
        return response.json(contatoes)
    }

    public async store ({ request, response }: HttpContextContract) {
        const data = request.all()
        const contato = await Contato.create(data)
        return response.json(contato)
    }

    public async show ({ params, response }: HttpContextContract) {
        const contato = await Contato.findOrFail(params.id)
        return response.json(contato)
    }

    public async update ({ params, request, response }: HttpContextContract) {
        const contato = await Contato.findOrFail(params.id)
        const data = request.all()
        contato.merge(data)
        await contato.save()
        return response.json(contato)
    }

    public async destroy ({ params, response }: HttpContextContract) {
        const contato = await Contato.findOrFail(params.id)
        await contato.delete()
        return response.json({ message: 'Contato deletado com sucesso!' })
    }
}
