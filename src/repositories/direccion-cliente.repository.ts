import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {DireccionCliente, DireccionClienteRelations} from '../models';

export class DireccionClienteRepository extends DefaultCrudRepository<
  DireccionCliente,
  typeof DireccionCliente.prototype.id,
  DireccionClienteRelations
> {
  constructor(
    @inject('datasources.MySQL') dataSource: MySqlDataSource,
  ) {
    super(DireccionCliente, dataSource);
  }
}
