import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Produto from "App/Models/Produto"

export default class ProdutosController {
    public async index ({ request, response }: HttpContextContract) {
        const produtos = await Produto.all()
        return response.json(produtos)
    }
    
    public async store ({ request, response }: HttpContextContract) {
        const data = request.all()
        const produto = await Produto.create(data)
        return response.json(produto)
    }
    
    public async show ({ params, response }: HttpContextContract) {
        const produto = await Produto.findOrFail(params.id)
        return response.json(produto)
    }
    
    public async update ({ params, request, response }: HttpContextContract) {
        const produto = await Produto.findOrFail(params.id)
        const data = request.all()
        produto.merge(data)
        await produto.save()
        return response.json(produto)
    }
    
    public async destroy ({ params, response }: HttpContextContract) {
        const produto = await Produto.findOrFail(params.id)
        await produto.delete()
        return response.json({ message: 'Produto deletado com sucesso!' })
    }
}
