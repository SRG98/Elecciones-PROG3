import {Entity, model, property} from '@loopback/repository';

@model()
export class Movimiento extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Logo: string;


  constructor(data?: Partial<Movimiento>) {
    super(data);
  }
}

export interface MovimientoRelations {
  // describe navigational properties here
}

export type MovimientoWithRelations = Movimiento & MovimientoRelations;
