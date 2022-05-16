import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Insumo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_fornecedor: number
  @column()
  public nome: string
  @column.dateTime()
  public data_compra : DateTime
  @column.dateTime()
  public validade : DateTime
  @column()
  public preco_unit : number
  @column()
  public und_medida : string

  public static table = 'insumo'
}
