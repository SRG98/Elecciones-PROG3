import {Entity, model, property} from '@loopback/repository';

@model()
export class Eleccion extends Entity {
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
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Descripcion: string;

  @property({
    type: 'date',
    required: true,
  })
  Fecha: string;


  constructor(data?: Partial<Eleccion>) {
    super(data);
  }
}

export interface EleccionRelations {
  // describe navigational properties here
}

export type EleccionWithRelations = Eleccion & EleccionRelations;
