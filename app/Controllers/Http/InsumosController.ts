import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Insumo from "App/Models/Insumo"

export default class InsumosController {
    public async index ({ request, response }: HttpContextContract) {
        const insumos = await Insumo.all()
        return response.json(insumos)
    }
    
    public async store ({ request, response }: HttpContextContract) {
        const data = request.all()
        const insumo = await Insumo.create(data)
        return response.json(insumo)
    }
    
    public async show ({ params, response }: HttpContextContract) {
        const insumo = await Insumo.findOrFail(params.id)
        return response.json(insumo)
    }
    
    public async update ({ params, request, response }: HttpContextContract) {
        const insumo = await Insumo.findOrFail(params.id)
        const data = request.all()
        insumo.merge(data)
        await insumo.save()
        return response.json(insumo)
    }
    
    public async destroy ({ params, response }: HttpContextContract) {
        const insumo = await Insumo.findOrFail(params.id)
        await insumo.delete()
        return response.json({ message: 'Insumo deletado com sucesso!' })
    }
}
