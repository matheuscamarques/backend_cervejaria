import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import InfoUsuario from 'App/Models/InfoUsuario'

export default class InfoUsuariosController {
    public async index({ request, response }: HttpContextContract) {
        const infoUsuarios = await InfoUsuario.all()
        return response.json(infoUsuarios)
    }
    
    public async store({ request, response }: HttpContextContract) {
        const data = request.all()
        const infoUsuario = await InfoUsuario.create(data)
        return response.json(infoUsuario)
    }
    
    public async show({ params, response }: HttpContextContract) {
        const infoUsuario = await InfoUsuario.findOrFail(params.id)
        return response.json(infoUsuario)
    }
    
    public async update({ params, request, response }: HttpContextContract) {
        const infoUsuario = await InfoUsuario.findOrFail(params.id)
        const data = request.all()
        infoUsuario.merge(data)
        await infoUsuario.save()
        return response.json(infoUsuario)
    }
    
    public async destroy({ params, response }: HttpContextContract) {
        const infoUsuario = await InfoUsuario.findOrFail(params.id)
        await infoUsuario.delete()
        return response.json({ message: 'InfoUsuario deletado com sucesso!' })
    }
}
