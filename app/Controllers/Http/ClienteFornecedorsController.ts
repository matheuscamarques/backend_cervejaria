import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ClienteFornecedor from 'App/Models/ClienteFornecedor'

export default class ClienteFornecedorsController {
    public async index({ request, response }: HttpContextContract) {
        const clienteFornecedors = await ClienteFornecedor.all()
        return response.json(clienteFornecedors)
    }

    public async store({ request, response }: HttpContextContract) {
        const data = request.all()
        const clienteFornecedor = await ClienteFornecedor.create(data)
        return response.json(clienteFornecedor)
    }

    public async show({ params, response }: HttpContextContract) {
        const clienteFornecedor = await ClienteFornecedor.findOrFail(params.id)
        return response.json(clienteFornecedor)
    }

    public async update({ params, request, response }: HttpContextContract) {
        const clienteFornecedor = await ClienteFornecedor.findOrFail(params.id)
        const data = request.all()
        clienteFornecedor.merge(data)
        await clienteFornecedor.save()
        return response.json(clienteFornecedor)
    }

    public async destroy({ params, response }: HttpContextContract) {
        const clienteFornecedor = await ClienteFornecedor.findOrFail(params.id)
        await clienteFornecedor.delete()
        return response.json({ message: 'ClienteFornecedor deletado com sucesso!' })
    }

}
