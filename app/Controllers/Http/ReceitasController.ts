import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Receita from 'App/Models/Receita'

export default class ReceitasController {
    public async index({ request, response }: HttpContextContract) {
        const receitas = await Receita.all()
        return response.json(receitas)
    }

    public async store({ request, response }: HttpContextContract) {
        const data = request.all()
        const receita = await Receita.create(data)
        return response.json(receita)
    }

    public async show({ params, response }: HttpContextContract) {
        const receita = await Receita.findOrFail(params.id)
        return response.json(receita)
    }

    public async update({ params, request, response }: HttpContextContract) {
        const receita = await Receita.findOrFail(params.id)
        const data = request.all()
        receita.merge(data)
        await receita.save()
        return response.json(receita)
    }

    public async destroy({ params, response }: HttpContextContract) {
        const receita = await Receita.findOrFail(params.id)
        await receita.delete()
        return response.json({ message: 'Receita deletada com sucesso!' })
    }

}
