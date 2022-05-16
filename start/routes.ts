/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { status: 'Working' }
})


Route.resource('/cargos', 'CargosController') 
Route.resource('/cliente-fornecedor', 'ClienteFornecedorController')
Route.resource('/contatos', 'ContatosController')
Route.resource('/empregos', 'EmpregosController')
Route.resource('/enderecos', 'EnderecosController')
Route.resource('/info-usuarios', 'InfoUsuariosController')
Route.resource('/insumos', 'InsumosController')
Route.resource('/insumos-receitas', 'InsumosReceitasController')
Route.resource('/produtos', 'ProdutosController')
Route.resource('/receitas', 'ReceitasController')
Route.resource('/usuarios', 'UsuariosController')