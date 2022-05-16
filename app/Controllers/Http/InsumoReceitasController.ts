import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import InsumoReceita from 'App/Models/InsumoReceita'

export default class InsumoReceitasController {
    public async index ({ request, response }: HttpContextContract) {
        const insumoReceitas = await InsumoReceita.all()
        return response.json(insumoReceitas)
    }

    public async store ({ request, response }: HttpContextContract) {
        const data = request.all()
        const insumoReceita = await InsumoReceita.create(data)
        return response.json(insumoReceita)
    }

    public async show ({ params, response }: HttpContextContract) {
        const insumoReceita = await InsumoReceita.findOrFail(params.id)
        return response.json(insumoReceita)
    }

    public async update ({ params, request, response }: HttpContextContract) {
        const insumoReceita = await InsumoReceita.findOrFail(params.id)
        const data = request.all()
        insumoReceita.merge(data)
        await insumoReceita.save()
        return response.json(insumoReceita)
    }

    public async destroy ({ params, response }: HttpContextContract) {
        const insumoReceita = await InsumoReceita.findOrFail(params.id)
        await insumoReceita.delete()
        return response.json({ message: 'InsumoReceita deletada com sucesso!' })
    }
}
