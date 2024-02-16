import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {UsuarioCliente, UsuarioClienteRelations} from '../models';

export class UsuarioClienteRepository extends DefaultCrudRepository<
  UsuarioCliente,
  typeof UsuarioCliente.prototype.id,
  UsuarioClienteRelations
> {
  constructor(
    @inject('datasources.MySQL') dataSource: MySqlDataSource,
  ) {
    super(UsuarioCliente, dataSource);
  }
}
