import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Emprego extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public empresa: string
  @column()
  public cargo: string
  @column.dateTime()
  public data_entrada: DateTime
  @column.dateTime()
  public data_saida: DateTime

  public static table = 'emprego'
}
