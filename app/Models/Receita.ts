import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Receita extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome : string
  @column()
  public descricao : string

  public static table = 'receita'
}
