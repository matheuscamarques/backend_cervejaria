import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_receita : number
  @column()
  public nome : string
  @column()
  public descricao : string
  @column.dateTime()
  public fabricao : DateTime
  @column.dateTime()
  public validade : DateTime
  @column()
  public quantidade : number
  @column()
  public und_medida : string
  @column.dateTime()
  public created_at : DateTime
  @column.dateTime()
  public updated_at : DateTime

  public static table = 'produto'
}
