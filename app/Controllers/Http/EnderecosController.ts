import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Endereco from "App/Models/Endereco"

export default class EnderecosController {
    public async index ({ request, response }: HttpContextContract) {
        const enderecos = await Endereco.all()
        return response.json(enderecos)
    }

    public async store ({ request, response }: HttpContextContract) {
        const data = request.all()
        const endereco = await Endereco.create(data)
        return response.json(endereco)
    }

    public async show ({ params, response }: HttpContextContract) {
        const endereco = await Endereco.findOrFail(params.id)
        return response.json(endereco)
    }

    public async update ({ params, request, response }: HttpContextContract) {
        const endereco = await Endereco.findOrFail(params.id)
        const data = request.all()
        endereco.merge(data)
        await endereco.save()
        return response.json(endereco)
    }

    public async destroy ({ params, response }: HttpContextContract) {
        const endereco = await Endereco.findOrFail(params.id)
        await endereco.delete()
        return response.json({ message: 'Endereco deletado com sucesso!' })
    }
}
