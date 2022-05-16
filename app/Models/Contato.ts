import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Contato extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public telefone: string

  @column()
  public contato: string

  @column()
  public email: string

  public static table = 'contato'
}
