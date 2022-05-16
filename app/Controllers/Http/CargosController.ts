import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cargo from 'App/Models/Cargo'

export default class CargosController {
    public async index({ request, response }: HttpContextContract) {
        const cargos = await Cargo.all()
        return response.json(cargos)
    }

    public async store({ request, response }: HttpContextContract) {
        const data = request.all()
        const cargo = await Cargo.create(data)
        return response.json(cargo)
    }

    public async show({ params, response }: HttpContextContract) {
        const cargo = await Cargo.findOrFail(params.id)
        return response.json(cargo)
    }

    public async update({ params, request, response }: HttpContextContract) {
        const cargo = await Cargo.findOrFail(params.id)
        const data = request.all()
        cargo.merge(data)
        await cargo.save()
        return response.json(cargo)
    }

    public async destroy({ params, response }: HttpContextContract) {
        const cargo = await Cargo.findOrFail(params.id)
        await cargo.delete()
        return response.json({ message: 'Cargo deletado com sucesso!' })
    }
}
