import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class InfoUsuario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column() 
  public id_usuario: number
  @column()
  public nome: string
  @column()
  public cpf: string
  @column.dateTime()
  public data_nascimento: DateTime
  @column()
  public id_endereco: number
  @column()
  public id_contato: number
  @column()
  public id_emprego: number
  @column()
  public id_cargo: number

  public static table = 'info_usuario'
}
