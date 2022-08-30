import {Entity, model, property} from '@loopback/repository';

@model()
export class Plancha extends Entity {
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
  Lema: string;


  constructor(data?: Partial<Plancha>) {
    super(data);
  }
}

export interface PlanchaRelations {
  // describe navigational properties here
}

export type PlanchaWithRelations = Plancha & PlanchaRelations;
