import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignkeys: {
      fk_direccion_id_cliente: {
        name: 'fk_direccion_id_cliente',
        entity: 'Cliente',
        entitykey: 'id',
        foreignkey: 'id_cliente',
      }
    },
  },
})
export class DireccionCliente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nomenclatura: string;

  @property({
    type: 'string',
    required: true,
  })
  numero: string;

  @property({
    type: 'number',
  })
  id_cliente?: number;

  constructor(data?: Partial<DireccionCliente>) {
    super(data);
  }
}

export interface DireccionClienteRelations {
  // describe navigational properties here
}

export type DireccionClienteWithRelations = DireccionCliente & DireccionClienteRelations;
