import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class InsumoReceita extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_insumo: number
  @column()
  public id_receita: number
  @column()
  public quantidade_insumo: number

  public static table = 'insumo_receita'
}
