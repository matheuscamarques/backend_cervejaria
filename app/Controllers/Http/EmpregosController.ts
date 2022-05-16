import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Emprego from 'App/Models/Emprego'

export default class EmpregosController {
    public async index ({ request, response }: HttpContextContract) {
        const empregos = await Emprego.all()
        return response.json(empregos)
    }

    public async store ({ request, response }: HttpContextContract) {
        const data = request.all()
        const emprego = await Emprego.create(data)
        return response.json(emprego)
    }

    public async show ({ params, response }: HttpContextContract) {
        const emprego = await Emprego.findOrFail(params.id)
        return response.json(emprego)
    }

    public async update ({ params, request, response }: HttpContextContract) {
        const emprego = await Emprego.findOrFail(params.id)
        const data = request.all()
        emprego.merge(data)
        await emprego.save()
        return response.json(emprego)
    }

    public async destroy ({ params, response }: HttpContextContract) {
        const emprego = await Emprego.findOrFail(params.id)
        await emprego.delete()
        return response.json({ message: 'Emprego deletado com sucesso!' })
    }
}
