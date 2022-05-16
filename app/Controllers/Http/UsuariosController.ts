import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario'

export default class UsuariosController {
    public async index ({ response }: HttpContextContract) {
        const usuarios = await Usuario.all()
        return response.json(usuarios)
    }
    
    public async store ({ request, response }: HttpContextContract) {
        const data = request.all()
        const usuario = await Usuario.create(data)
        return response.json(usuario)
    }
    
    public async show ({ params, response }: HttpContextContract) {
        const usuario = await Usuario.findOrFail(params.id)
        return response.json(usuario)
    }
    
    public async update ({ params, request, response }: HttpContextContract) {
        const usuario = await Usuario.findOrFail(params.id)
        const data = request.all()
        usuario.merge(data)
        await usuario.save()
        return response.json(usuario)
    }
    
    public async destroy ({ params, response }: HttpContextContract) {
        const usuario = await Usuario.findOrFail(params.id)
        await usuario.delete()
        return response.json({ message: 'Usuário deletado com sucesso!' })
    }
}
