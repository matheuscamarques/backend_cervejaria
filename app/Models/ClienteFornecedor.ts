import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ClienteFornecedor extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cpf_cnpj: string

  @column()
  public ie: string

  @column()
  public id_endereco: number

  @column()
  public id_contato: number

  @column()
  public tipo: string

  public static table = 'cliente_fornecedor'
}
