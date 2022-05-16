import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cargo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public funcao : string
  @column()
  public descricao : string

  public static table = 'cargo'
}
